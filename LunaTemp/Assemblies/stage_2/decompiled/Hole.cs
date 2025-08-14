using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;

public class Hole : MonoBehaviour
{
	public ColorType colorType;

	public Transform pointToDropCoin;

	public bool canClick = true;

	[FormerlySerializedAs("meshRenderer")]
	public SkinnedMeshRenderer skinnedMeshRenderer;

	public List<Tile> tilesInHole = new List<Tile>();

	public List<Tile> targetTiles = new List<Tile>();

	private void Update()
	{
		if (!Input.GetMouseButtonDown(0))
		{
			return;
		}
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, out var hit) && hit.collider.transform == base.transform)
		{
			base.transform.DOScale(1.8f, 0.1f).OnComplete(delegate
			{
				base.transform.DOScale(2f, 0.05f);
			});
			Debug.Log("111");
			Debug.Log(GamePlay.Instance);
			if (canClick)
			{
				GamePlay.Instance.StartHoleMoneyGame(this);
			}
		}
	}

	public void ActivateBlenderShape(int delayMs)
	{
		StartCoroutine(ActivateBlenderShapeRoutine(delayMs));
	}

	private IEnumerator ActivateBlenderShapeRoutine(int delayMs)
	{
		yield return new WaitForSeconds((float)delayMs / 1000f);
		if (!(skinnedMeshRenderer == null))
		{
			skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
			float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
			DOTween.To(() => weight, delegate(float x)
			{
				skinnedMeshRenderer.SetBlendShapeWeight(0, x);
			}, 100f, 0.25f).SetEase(Ease.InBack).OnComplete(delegate
			{
				skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
			});
		}
	}

	public void DeactivateBlenderShape(int delayMs)
	{
		StartCoroutine(DeactivateBlenderShapeRoutine(delayMs));
	}

	private IEnumerator DeactivateBlenderShapeRoutine(int delayMs)
	{
		yield return new WaitForSeconds((float)delayMs / 1000f);
		if (!(skinnedMeshRenderer == null))
		{
			skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
			float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
			DOTween.To(() => weight, delegate(float x)
			{
				skinnedMeshRenderer.SetBlendShapeWeight(0, x);
			}, 0f, 0.25f).SetEase(Ease.InBack).OnComplete(delegate
			{
				skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
			});
		}
	}
}
