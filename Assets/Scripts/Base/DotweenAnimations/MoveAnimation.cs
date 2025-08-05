using DG.Tweening;
using UnityEngine;

namespace DotweenAnimations
{
    public class MoveAnimation : MonoBehaviour
    {
        public Ease ease = Ease.Linear;

        public Vector2 distance = new Vector3(0, 0);
        public float duration = 1f;
        public float delay = 0f;

        private Vector2 originalPosition;

        private RectTransform rectTransform;

        private void Awake()
        {
            rectTransform = GetComponent<RectTransform>();
            originalPosition = rectTransform.anchoredPosition;
        }

        public void Move()
        {
            rectTransform.DOAnchorPos(originalPosition + distance, duration).From(originalPosition)
                .SetDelay(delay)
                .SetEase(ease);
        }


        public void MoveBack()
        {
                rectTransform.DOAnchorPos(originalPosition, duration).From(originalPosition + distance)
                    .SetDelay(delay)
                    .SetEase(ease);
        }
    }
}
