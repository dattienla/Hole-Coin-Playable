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
				InvokeRepeating("PlayBounceAnimation", Random.Range(bounceDelay, bounceDelay * 2f), Random.Range(bounceDelay, bounceDelay * 2f));
			}
			else
			{
				Invoke("PlayBounceAnimation", bounceDelay);
			}
		}
	}

	public void PlayBounceAnimation()
	{
		base.transform.DOScale(bounceScale, bounceDuration).SetEase(Ease.Linear).OnComplete(delegate
		{
			if (isLooping)
			{
				base.transform.DOScale(Vector3.one, bounceDuration).SetEase(easeType).OnComplete(PlayBounceAnimation);
			}
			else
			{
				base.transform.localScale = Vector3.one;
			}
		});
	}
}
