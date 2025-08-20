using DG.Tweening;
using UnityEngine;

public class Hand : MonoBehaviour
{
	public void OnEnable()
	{
		base.transform.DOScale(0.8f, 0.6f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
	}
}
