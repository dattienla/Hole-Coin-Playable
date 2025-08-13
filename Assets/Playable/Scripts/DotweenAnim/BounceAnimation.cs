using DG.Tweening;
using UnityEngine;

public class BounceAnimation : MonoBehaviour
{
    [Header("Bounce Animation Settings")]
    public float bounceDuration = 0.75f;
    public float bounceDelay = 3f;
    public Vector3 bounceScale = new Vector3(0.9f, 0.9f, 1.1f);
    public bool playOnStart = true;
    public bool isLooping = true;
    public Ease easeType = Ease.OutBounce;

    private void Start()
    {
        if (playOnStart)
        {
            if (isLooping)
            {
                InvokeRepeating(nameof(PlayBounceAnimation), Random.Range(bounceDelay, bounceDelay * 2), Random.Range(bounceDelay, bounceDelay * 2));
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

