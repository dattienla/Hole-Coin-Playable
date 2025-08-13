using System;
using DG.Tweening;
using UnityEngine;

public class Coin : MonoBehaviour
{
	public ColorType colorType;

	public MeshRenderer meshRenderer;

	public Animator animator;

	public GameObject smokeParticle;

	public AudioSource audioSource;

	public void ResetCoin()
	{
		base.gameObject.SetActive(true);
		animator.enabled = false;
		smokeParticle?.SetActive(false);
		base.transform.localRotation = Quaternion.identity;
		meshRenderer.transform.localRotation = Quaternion.identity;
	}

	public void JumpToHole(Transform hole, Action onComplete = null)
	{
		if (animator != null)
		{
			animator.enabled = true;
		}
		if (smokeParticle != null)
		{
			smokeParticle.SetActive(true);
		}
		Vector3 offset = new Vector3(UnityEngine.Random.Range(-0.2f, 0.2f), -0.5f, UnityEngine.Random.Range(-0.2f, 0.2f));
		Vector3 end = hole.position + offset;
		end.y += 0.5f;
		float jumpPower = UnityEngine.Random.Range(7.5f, 10f);
		float duration = UnityEngine.Random.Range(0.6f, 1f);
		base.transform.DOJump(end, jumpPower, 1, duration).SetEase(Ease.Linear).OnComplete(delegate
		{
			base.transform.DOMoveY(hole.position.y - 1f, 0.3f).SetEase(Ease.InQuad).OnComplete(delegate
			{
				if (smokeParticle != null)
				{
					smokeParticle.SetActive(false);
				}
				base.transform.localRotation = Quaternion.identity;
				onComplete?.Invoke();
				UnityEngine.Object.Destroy(base.gameObject, 0.5f);
			});
		});
	}
}
