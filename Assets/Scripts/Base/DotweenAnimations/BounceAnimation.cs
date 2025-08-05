using DG.Tweening;
using UnityEngine;

namespace Base.DotweenAnimations
{
    public class BounceAnimation : MonoBehaviour
    {
        [Header("Bounce Animation Settings")]
        public float bounceDuration = 0.5f;
        public float bounceDelay = 0f;
        public Vector3 bounceScale = new Vector3(1.2f, 1.2f, 1.2f);
        public bool playOnStart = true;
        public bool isLooping = false;
        public Ease easeType = Ease.OutBounce;

        private void Start()
        {
            if (playOnStart)
            {
                if (isLooping)
                {
                    InvokeRepeating(nameof(PlayBounceAnimation), Random.Range(bounceDelay , bounceDelay * 2), Random.Range(bounceDelay , bounceDelay * 2));
                }
                else
                {
                    Invoke(nameof(PlayBounceAnimation), bounceDelay);
                }
            }
        }

        public void PlayBounceAnimation()
        {
            transform.DOScale(bounceScale, bounceDuration)
                .SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    if (isLooping)
                    {
                        transform.DOScale(Vector3.one, bounceDuration)
                            .SetEase(easeType)
                            .OnComplete(PlayBounceAnimation);
                    }
                    else
                    {
                        transform.localScale = Vector3.one; // Reset scale after animation
                    }
                });
        }

    }
}
