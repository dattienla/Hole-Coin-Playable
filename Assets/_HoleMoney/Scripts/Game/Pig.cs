using System.Collections;
using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Internal;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

namespace _HoleMoney.Scripts.Game
{
    public class Pig : MonoBehaviour
    {
        public ColorType colorType;
        public int maxCoinCount = 32;
        public Transform positionToDropCoin;
        public Transform endPoint;
        public TextMeshPro coinCountText;
        public bool isDropping = false;
        public SoundFx audioSource;
        public CoinBag coinBag;
        [FormerlySerializedAs("skinnedMeshRenderer")] public SkinnedMeshRenderer skinnedMeshRenderer;
        public GameObject dropParticle;

        private void Start()
        {
            UpdateCoinText();
        }

        public void SetPigMaterial(ColorType type)
        {
            colorType = type;
            foreach (var t in CenterDataManager.Instance.materialsSo.mainMaterials.Where(t => t.colorType == colorType))
            {
                skinnedMeshRenderer.material = t.pigMaterial;
                List<Material> materials = new List<Material>();
                materials.AddRange(skinnedMeshRenderer.sharedMaterials);
                materials[2] = t.coinMaterial;
                skinnedMeshRenderer.materials = materials.ToArray();
                break;
            }
        }

        public void DropCoinToPig(ColorType type)
        {

            if (maxCoinCount <= 0)
            {
                OnFull();
                return;
            }
            var coinObjet = Instantiate(CenterDataManager.Instance.prefabSo.coinPrefab,coinBag.spawnPoint.position, Quaternion.Euler(0, 90f, 0));
            var coin = coinObjet.GetComponent<Coin>();
            coin.SetCoinMaterial(type);

            coin.transform.SetParent(transform);
            coin.ResetCoin();
            coinObjet.transform.localRotation = Quaternion.Euler(45, 0f, 0);

            maxCoinCount--;
            coin.audioSource.Play();
            Vector3 start = coin.transform.position;
            Vector3 mid = positionToDropCoin.position;
            Vector3 end = endPoint.position;

            Vector3[] path = new Vector3[] { mid, end };

            coin.transform.DOPath(path, 0.35f, PathType.CatmullRom)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() =>
                {
                    dropParticle.SetActive(true);

                    skinnedMeshRenderer.transform.DOScale(1f, 0.1f).SetEase(Ease.InOutQuad).OnComplete(() =>
                    {
                        skinnedMeshRenderer.transform.DOScale(0.9f, 0.1f).SetEase(Ease.InOutQuad);
                    });

                    coin.transform.SetParent(null);
                    Destroy(coin.gameObject);
                    UpdateCoinText();
                });

        }

        public void ActivateCoinEyes()
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
        }

        public void DeactivateCoinEyes()
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
        }

        public void OnFull()
        {
            var pigRow = GetComponentInParent<PigRow>();
            if (pigRow != null)
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
                coinCountText.gameObject.SetActive(false);
                audioSource.Play();
                /*pigRow.pigs.Remove(this);*/
                pigRow.RemovePig(this);
            }
        }

        public void UpdateCoinText()
        {
            if (coinCountText != null)
                coinCountText.text = maxCoinCount.ToString();
        }

        public void ActivateBlenderShape()
        {
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

        public void DeactivateBlenderShape(bool isActive = false)
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
            float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
            DOTween.To(() => weight, x =>
            {
                skinnedMeshRenderer.SetBlendShapeWeight(0, x);
            }, 0, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
            {
                gameObject.SetActive(isActive);
                skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
            });
        }
    }
}
