using DG.Tweening;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class BagBooster : CoinBag
    {
        private Vector3 originalPosition;

        private void Start()
        {
            originalPosition = transform.position;
        }

        public Transform point1;
        public Transform point2;

        public void SuckCoin(Coin coin)
        {
            if (coin == null)
            {
                Debug.LogWarning("Coin is null, cannot suck.");
                return;
            }

            var startPosition = coin.transform.position;
            var midPoint = point1.position;
            var endPosition = point2.position;

            coin.transform.DOPath(new Vector3[] { startPosition, midPoint, endPosition }, 0.5f).SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                });
        }

        public void ResetPosition()
        {
            transform.DOMove(originalPosition, 1f).SetEase(Ease.OutBack)
                .OnComplete(() =>
                {
                });
            DeactivateBlenderShape();
        }
    }
}
