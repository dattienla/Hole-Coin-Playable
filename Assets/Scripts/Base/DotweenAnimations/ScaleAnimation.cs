using DG.Tweening;
using UnityEngine;

namespace DotweenAnimations
{
    public enum ScaleDirection { ScaleUp, ScaleDown }

    public class ScaleAnimation : MonoBehaviour
    {
        public bool PlayOnStart = true;
        public ScaleDirection scaleDirection = ScaleDirection.ScaleUp;
        public Ease ease = Ease.Linear;
        public float duration = 1f;
        public float scaleFactor = 1.1f;
        public float delay = 0f;
        public int loopCount = -1; // -1 means infinite loop by default
        private Vector3 originalScale;

        private void Start()
        {
            originalScale = transform.localScale;

            if (PlayOnStart)
            {
                if (scaleDirection == ScaleDirection.ScaleUp)
                {
                    ScaleUp();
                }
                else
                {
                    ScaleDown();
                }
            }
        }

        public void ScaleUp()
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOScale(originalScale * scaleFactor, duration))
                .SetDelay(delay)
                .SetEase(ease)
                .SetLoops(loopCount, LoopType.Yoyo);
        }

        public void ScaleOrigin()
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOScale(originalScale, duration))
                .SetDelay(delay)
                .SetEase(ease)
                .SetLoops(loopCount, LoopType.Yoyo);
        }

        public void ScaleDown()
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(transform.DOScale(originalScale * (1 / scaleFactor), duration))
                .SetDelay(delay)
                .SetEase(ease)
                .SetLoops(loopCount, LoopType.Yoyo);
        }
    }

}
