using DG.Tweening;
using UnityEngine;

public class CoinBag : MonoBehaviour
{
	public SkinnedMeshRenderer skinnedMeshRenderer;

	public Transform spawnPoint;

	private void OnEnable()
	{
		base.transform.DOLocalRotate(new Vector3(0f, 30f, 0f), 0.5f).SetEase(Ease.OutBack).SetLoops(1)
			.SetRelative(true)
			.SetUpdate(true);
		ActivateBlenderShape();
	}

	public void ActivateBlenderShape()
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
		float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
		DOTween.To(() => weight, delegate(float x)
		{
			skinnedMeshRenderer.SetBlendShapeWeight(0, x);
		}, 50f, 0.25f).SetEase(Ease.InBack).OnComplete(delegate
		{
			skinnedMeshRenderer.SetBlendShapeWeight(0, 50f);
		});
	}

	public void DeactivateBlenderShape(bool isActive = false)
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 50f);
		float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
		DOTween.To(() => weight, delegate(float x)
		{
			skinnedMeshRenderer.SetBlendShapeWeight(0, x);
		}, 0f, 0.25f).SetEase(Ease.InBack).OnComplete(delegate
		{
			base.gameObject.SetActive(isActive);
			skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
		});
	}
}
