using System.Collections;
using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.SO;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace Base.UI.Build
{
    public class BuildManager : MonoBehaviour
    {
        public TowerController towerController;
        public IslandController currentIslandController;
        public GameObject buildResourcePrefab;
        public List<IslandController> islandControllers;

        private Island _currentIsland;
        private IslandData _currentIslandData;
        private Tower _currentTower;
        private TowerData _currentTowerData;

        private int _isLandIndex;
        private int _towerIndex;
        private static readonly int FillPercent = Shader.PropertyToID("_Fillpercent");

        private void Start()
        {
            _isLandIndex = CenterDataManager.Instance.mapData.currentIslandID;
            _towerIndex = CenterDataManager.Instance.mapData.currentTowerID;

            foreach (var islandController in islandControllers)
            {
                if (_isLandIndex == islandController.islandID)
                {
                    currentIslandController = islandController;
                    currentIslandController.gameObject.SetActive(true);
                }
                else
                {
                    islandController.gameObject.SetActive(false);
                }
            }
            LoadData(_isLandIndex, _towerIndex);

        }

        private void LoadData(int isLandIndex,int towerIndex)
        {
            foreach (var controller in currentIslandController.towerControllers)
            {
                if (towerIndex == controller.towerID)
                {
                    towerController = controller;
                    controller.gameObject.SetActive(true);
                    controller.towerBrickAmount.gameObject.SetActive(true);
                }
                else if (controller.towerID < towerIndex)
                {
                    controller.gameObject.SetActive(true);
                    controller.towerBrickAmount.gameObject.SetActive(false);
                    controller.towerBrickAmount.SetAmount(0);
                }
                else
                {
                    controller.towerBrickAmount.gameObject.SetActive(false);
                    controller.gameObject.SetActive(false);
                }
            }

            foreach (var islandData in CenterDataManager.Instance.mapData.islandsData.Where(islandData => islandData.islandID == isLandIndex))
            {
                _currentIslandData = islandData;
                _currentTowerData = _currentIslandData.towersData.FirstOrDefault(t => t.towerID == towerIndex);
                break;
            }

            foreach (var il in CenterDataManager.Instance.mapSo.islands.Where(il => il.islandID == isLandIndex))
            {
                _currentIsland = il;
                _currentTower = _currentIsland.towers.FirstOrDefault(t => t.towerID == towerIndex);
                break;
            }
            if (_currentTowerData != null) _currentTowerData.unlocked = true;
            _currentIslandData.unlocked = true;

            UpdateTowerData();
        }

        private void UpdateTowerData()
        {
            if (_currentTowerData != null && towerController != null)
            {
                var fillValue = _currentTowerData.currentBrick / (float)_currentTowerData.maxBricks;
                fillValue = Mathf.Clamp01(fillValue);
                towerController.towerMeshRenderer.material.SetFloat(FillPercent, fillValue);
                towerController.towerBrickAmount.SetAmount(_currentTowerData.maxBricks - _currentTowerData.currentBrick);
            }
        }

        private IEnumerator SpawnResource()
        {
            var index = 0;
            while (CenterDataManager.Instance.gameData.totalBricks > 0)
            {
                CenterDataManager.Instance.gameData.totalBricks--;
                _currentTowerData.currentBrick++;

                if(_currentTowerData.currentBrick >= _currentTowerData.maxBricks)
                {
                    towerController.towerBrickAmount.gameObject.SetActive(false);
                    if (_towerIndex == currentIslandController
                            .towerControllers[^1].towerID)
                    {
                        UIBuild.Instance.holdButton.SetActive(false);
                        UIBuild.Instance.nextButton.SetActive(true);
                        _isLandIndex++;
                        _towerIndex = 1;
                        CenterDataManager.Instance.mapData.currentIslandID = _isLandIndex;
                        CenterDataManager.Instance.mapData.currentTowerID = _towerIndex;

                        StopBuilding();
                    }
                    else
                    {
                        _towerIndex++;
                        CenterDataManager.Instance.mapData.currentTowerID = _towerIndex;
                        LoadData(_isLandIndex, _towerIndex);
                    }
                }

                UIBuild.Instance.UpdateBrick();
                var resource = ObjectPooling.Instance.GetGameObject(buildResourcePrefab,
                    towerController.buildPoints[index % towerController.buildPoints.Count].position + Vector3.up * 20,
                    Quaternion.identity);
                resource.SetActive(true);
                /*VibrationManager.Vibrate(HapticTypes.Selection);*/
                resource.transform.DOMoveY(towerController.transform.position.y, 0.6f).OnComplete(() =>
                {
                    resource.SetActive(false);
                    UpdateTowerData();
                    towerController.transform.DOScale(1.1f, 0.05f).OnComplete(() =>
                    {
                        towerController.transform.DOScale(1f, 0.1f);
                    });
                });
                yield return new WaitForSeconds(0.025f);
                index++;
            }

            UIBuild.Instance.holdButton.SetActive(false);
            UIBuild.Instance.nextButton.SetActive(true);
        }

        public void StartBuilding()
        {
            StartCoroutine(SpawnResource());
        }

        public void StopBuilding()
        {
            StopAllCoroutines();
        }
    }
}
