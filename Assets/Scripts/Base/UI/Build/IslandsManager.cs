using System;
using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Managers;
using Base.SO;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace Base.UI.Build
{
    [Serializable]
    public class IslandPosition
    {
        public Vector3 originPosition;
        public Transform islandTransform;
    }

    public class IslandsManager : MonoBehaviour
    {
        private MapSo _mapSo;
        public Button leftButton;
        public Button rightButton;
        public TextMeshProUGUI islandNameText;
        private int _currentIndex = 0;

        public List<IslandPosition> islandObjects = new List<IslandPosition>();
        public List<IslandController> islandControllers = new List<IslandController>();
        private static readonly int FillMount = Shader.PropertyToID("_Fillpercent");

        public void Start()
        {
            _mapSo = CenterDataManager.Instance.mapSo;
            for (var i = 0 ; i < _mapSo.islands.Count; i++)
            {
                var towerObject = new GameObject($"Island_{i}");
                towerObject.transform.SetParent(transform);
                towerObject.transform.localPosition = new Vector3(i * 30, 0, 0);
                towerObject.transform.localRotation = Quaternion.Euler(0, 0, 0);
                islandObjects.Add(new IslandPosition
                {
                    islandTransform = towerObject.transform,
                    originPosition = towerObject.transform.position
                });
                var il = Instantiate(_mapSo.islands[i].islandPrefab, towerObject.transform);
                var islandController = il.GetComponent<IslandController>();
                islandControllers.Add(islandController);
                il.transform.localPosition = Vector3.zero;
                il.transform.localRotation = Quaternion.Euler(0, 0, 0);
            }

            leftButton.onClick.AddListener(SLideLeft);
            rightButton.onClick.AddListener(SLideRight);

            for (var i = 1; i < CenterDataManager.Instance.mapData.currentIslandID; i++)
            {
                SLideRight();
            }

            UpdateName();

            LoadIslandData();
        }

        private void LoadIslandData()
        {
            foreach (var island in CenterDataManager.Instance.mapData.islandsData)
            {
                foreach (var il in islandControllers.Where(il => island.islandID == il.islandID))
                {
                    foreach (var tower in il.towerControllers)
                    {
                        foreach (var towerData in island.towersData.Where(towerData => tower.towerID == towerData.towerID))
                        {
                            tower.towerMeshRenderer.material.SetFloat(FillMount,
                                towerData.currentBrick / (float)towerData.maxBricks);
                            break;
                        }
                    }
                    break;
                }
            }
        }

        public void SLideToCurrentIsland()
        {
            var a = CenterDataManager.Instance.mapData.currentIslandID;
            if(_currentIndex + 1 < a)
            {
                for (var i = _currentIndex + 1; i < a; i++)
                {
                    SLideRight();
                }
            }
            else if (_currentIndex + 1 > a)
            {
                for (var i = _currentIndex + 1; i > a; i--)
                {
                    SLideLeft();
                }
            }
        }

        private void UpdateName()
        {
            islandNameText.text = (_currentIndex + 1) + ". " + _mapSo.islands[_currentIndex].islandName;
        }

        private void Update()
        {
            leftButton.gameObject.SetActive(_currentIndex > 0);
            rightButton.gameObject.SetActive(_currentIndex < _mapSo.islands.Count - 1);
        }

        private void SLideLeft()
        {
            if (_currentIndex > 0)
            {
                _currentIndex--;
                foreach (var t in islandObjects)
                {
                    t.islandTransform.DOLocalMoveX(_currentIndex * -30 + t.originPosition.x, 0.5f).SetEase(Ease.OutBack);
                }
                UpdateName();
            }
        }

        private void SLideRight()
        {
            if (_currentIndex < _mapSo.islands.Count - 1)
            {
                _currentIndex++;
                foreach (var t in islandObjects)
                {
                    t.islandTransform.DOLocalMoveX(_currentIndex * -30 + t.originPosition.x, 0.5f).SetEase(Ease.OutBack);
                }
                UpdateName();
            }
        }

    }
}
