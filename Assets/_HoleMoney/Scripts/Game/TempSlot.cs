using System.Collections.Generic;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.Serialization;

namespace _HoleMoney.Scripts.Game
{
    public class TempSlot : MonoBehaviour
    {
        public int coinCount = 0;
        [FormerlySerializedAs("_colorType")] public ColorType colorType;
        public List<Slot> slots = new List<Slot>();
        public List<Coin> coins = new List<Coin>();
        public Transform pointToDropCoin;
        public SpriteRenderer outline;
        public TextMeshPro remainingText;
        public CoinBag coinBag;
        public bool isDropping = false;

        private Color _originalColor;

        private void Awake()
        {
            _originalColor = outline.color;
        }

        private void Reset()
        {
            slots = new List<Slot>(GetComponentsInChildren<Slot>(true));
        }

        private void Update()
        {
            // di chuyển coinbag về vị trí của slots[coinCount] một cách smooth
            if (coinBag != null && coinCount < slots.Count)
            {
                var targetPosition = slots[coinCount].transform.position + new Vector3(0, 3f, 5f);
                coinBag.transform.position = Vector3.Lerp(coinBag.transform.position, targetPosition, Time.deltaTime * 5f);
            }
        }

        public void DropCoinToSlot(ColorType type)
        {
            var coinObject = Instantiate(CenterDataManager.Instance.prefabSo.coinPrefab, coinBag.spawnPoint.position, Quaternion.identity);
            coinObject.transform.localScale = Vector3.one;
            var coin = coinObject.GetComponent<Coin>();
            coin.SetCoinMaterial(type);
            coin.ResetCoin();

            if (colorType == ColorType.None)
            {
                colorType = coin.colorType;
                var material = CenterDataManager.Instance.materialsSo.mainMaterials.Find(t => t.colorType == colorType);
                if (material != null)
                {
                    var color = material.material.color;
                    outline.color = color;
                    remainingText.color = color;
                }
            }

            coin.transform.SetParent(slots[coinCount].transform);

            coins.Add(coin);
            var position = slots[coinCount].transform.position;
            coin.audioSource.Play();
            var start = coin.transform.position;
            var end = position;
            var mid = (start + end) / 2 + Vector3.up * 1.5f; // Tạo điểm giữa cong lên

            var path = new Vector3[] { mid, end };

            coin.transform.DOPath(path, 0.5f, PathType.CatmullRom)
                .SetEase(Ease.InOutQuad)
                .OnComplete(() =>
                {
                    coin.transform.localRotation = Quaternion.Euler(0, 0, 0);
                    coin.transform.localPosition = Vector3.zero + new Vector3(0, 0.1f, 0);

                    if (coin.meshRenderer != null)
                        coin.meshRenderer.transform.localRotation = Quaternion.Euler(0, 0, 0);
                    ObjectPooling.Instance.GetGameObject(CenterDataManager.Instance.prefabSo.starFxPrefab,
                        slots[coinCount].transform.position + Vector3.up * 0.5f, Quaternion.identity)
                        .SetActive(true);
                    coin.transform.position = position;
                    // coin.gameObject.SetActive(true); // Không cần thiết gọi lại
                });

            coinCount++;
            if (remainingText != null)
                remainingText.text = (32 - coinCount).ToString();
        }

        public List<Coin> GetCoins(int amount,ColorType type)
        {
            var amountToGet = Mathf.Min(amount, coinCount);
            var coinsToReturn = new List<Coin>();

            for (int i = coins.Count - 1; i >= coins.Count - amountToGet; i--)
            {
                if (i < 0) break;
                coinsToReturn.Add(coins[i]);
            }
            coins.RemoveRange(coins.Count - amountToGet, amountToGet);
            coinCount -= amountToGet;
            if (remainingText != null)
                remainingText.text = (32 - coinCount).ToString();
            if(coins.Count == 0)
            {
                colorType = ColorType.None;
                outline.color = _originalColor;
                if (remainingText != null)
                    remainingText.color = _originalColor;
            }
            return coinsToReturn;
        }

    }
}
