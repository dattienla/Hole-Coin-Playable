using System.Collections;
using UnityEngine;

public class TimeToDeactivate : MonoBehaviour
{
	[SerializeField]
	protected float lifeTime = 10f;

	private void OnEnable()
	{
		StartCoroutine(Deactivate());
	}

	private void OnDisable()
	{
		StopAllCoroutines();
	}

	private IEnumerator Deactivate()
	{
		yield return new WaitForSeconds(lifeTime);
		base.gameObject.SetActive(false);
	}
}
