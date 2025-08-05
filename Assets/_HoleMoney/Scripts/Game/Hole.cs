using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using _HoleMoney.Scripts.ScriptableObjects;
using Base.Internal;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;

namespace _HoleMoney.Scripts.Game
{
    public class Hole : MonoBehaviour
    {
        public ColorType colorType = ColorType.Red;
        public ColorType originalColorType = ColorType.Red;
        public Transform pointToDropCoin;
        [FormerlySerializedAs("meshRenderer")] public SkinnedMeshRenderer skinnedMeshRenderer;
        public MeshRenderer meshRendererRainbow;
        public MeshRenderer pitMeshRenderer;
        public SoundFx audioSource;

        public List<Tile> targetTiles = new List<Tile>();
        public List<Tile> lockTiles = new List<Tile>();

        public void SetHoleMaterial(ColorType type)
        {
            colorType = type;
            originalColorType = type;
            foreach (var t in CenterDataManager.Instance.materialsSo.mainMaterials.Where(t => t.colorType == colorType))
            {
                skinnedMeshRenderer.material = t.material;
                pitMeshRenderer.material = t.pitMaterial;
                break;
            }
        }
        private void Update()
        {
            if(Input.GetMouseButtonDown(0))
            {
                var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                if (Physics.Raycast(ray, out var hit))
                {
                    if(hit.collider.transform == transform)
                    {
                        audioSource.Play();
                        transform.DOScale(0.9f, 0.1f)
                            .OnComplete(() => transform.DOScale(1f, 0.05f));

                        if (BoosterManager.Instance.isUsingHoleBooster)
                        {
                            if(CenterDataManager.Instance.gameData.currentAmountOfHoleBooster <= 0)
                            {
                                UIManager.Instance.uiBoosters.CancelHole();
                            }
                            else
                            {
                                if (BoosterManager.Instance.tempHole != null)
                                {
                                    BoosterManager.Instance.tempHole.colorType = BoosterManager.Instance.tempHole.originalColorType;
                                }
                                StartCoroutine(SetRainBow());
                                colorType = ColorType.Rainbow;
                                BoosterManager.Instance.tempHole = this;
                                GameManager.Instance.SetTypeOfAllCoin(ColorType.Rainbow);
                            }
                        }

                        GameManager.Instance.StartHoleMoneyGame(colorType, this);

                        if (BoosterManager.Instance.isUsingHoleBooster)
                        {
                            GameManager.Instance.SetOriginalTypeOfAllCoin();
                            UIManager.Instance.uiBoosters.DecrementHoleAmount(1);
                        }


                        if (TutorialManager.Instance.IsTutorialActive)
                        {
                            if(TutorialManager.Instance.holes.Contains(this))
                            {
                                TutorialManager.Instance.holes.Remove(this);
                            }
                            TutorialManager.Instance.StartTutorial();
                        }
                    }
                }
            }
        }

        private IEnumerator SetRainBow()
        {
            meshRendererRainbow.gameObject.SetActive(true);
            skinnedMeshRenderer.gameObject.SetActive(false);
            yield return new WaitForSeconds(2.5f);
            meshRendererRainbow.gameObject.SetActive(false);
            skinnedMeshRenderer.gameObject.SetActive(true);
        }
        public async void ActivateBlenderShape(int delay)
        {
            await Task.Delay(delay);
            if (skinnedMeshRenderer == null) return;
            skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
            float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
            DOTween.To(() => weight, x =>
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, x);
            }, 100, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
            });
        }

        public async void DeactivateBlenderShape(int delay)
        {
            await Task.Delay(delay);
            if(skinnedMeshRenderer == null) return;
            skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
            var weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
            DOTween.To(() => weight, x =>
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, x);
            }, 0, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
            });
        }
    }
}
