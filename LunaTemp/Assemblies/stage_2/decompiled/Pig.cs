using System.Linq;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Serialization;

public class Pig : MonoBehaviour
{
	public ColorType colorType;

	public int maxCoinCount = 32;

	public Transform positionToDropCoin;

	public Transform endPoint;

	public bool isDropping = false;

	public CoinBag coinBag;

	public MaterialsSO materialsSo;

	public GameObject coinPrefab;

	public GameObject confettiPrefab;

	public ColorType coinColor;

	[FormerlySerializedAs("skinnedMeshRenderer")]
	public SkinnedMeshRenderer skinnedMeshRenderer;

	public GameObject dropParticle;

	public void DropDelay(float timedelay, ColorType type)
	{
		coinColor = type;
		Invoke("DropCoinToPig", timedelay);
	}

	public void DropCoinToPig()
	{
		DropCoinToPig(coinColor);
	}

	public void DropCoinToPig(ColorType type)
	{
		if (maxCoinCount <= 0)
		{
			return;
		}
		GameObject coinObjet = Object.Instantiate(coinPrefab, coinBag.spawnPoint.position, Quaternion.Euler(0f, 90f, 0f));
		Coin coin = coinObjet.GetComponent<Coin>();
		MainMaterials mat = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == type);
		if (mat != null && coin.meshRenderer != null)
		{
			coin.colorType = type;
			coin.meshRenderer.material = mat.coinMaterial;
		}
		coin.transform.SetParent(base.transform);
		coinObjet.transform.localRotation = Quaternion.Euler(45f, 0f, 0f);
		maxCoinCount--;
		coin.audioSource.Play();
		Vector3 start = coin.transform.position;
		Vector3 mid = positionToDropCoin.position;
		Vector3 end = endPoint.position;
		Vector3[] path = new Vector3[2] { mid, end };
		coin.transform.DOPath(path, 0.35f, PathType.CatmullRom).SetEase(Ease.InOutQuad).OnComplete(delegate
		{
			dropParticle.SetActive(true);
			skinnedMeshRenderer.transform.DOScale(1f, 0.1f).SetEase(Ease.InOutQuad).OnComplete(delegate
			{
				skinnedMeshRenderer.transform.DOScale(0.9f, 0.1f).SetEase(Ease.InOutQuad);
			});
			coin.transform.SetParent(null);
			Object.Destroy(coin.gameObject);
		});
	}

	public void ActivateCoinEyes()
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
	}

	public void DeactivateCoinEyes()
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 0f);
	}

	public void OnFull()
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
		GameObject c = Object.Instantiate(confettiPrefab, base.transform.position + Vector3.up * 3f - Vector3.back * 2f, Quaternion.Euler(-90f, 0f, 0f));
		c.SetActive(true);
		base.transform.DOScale(0f, 0.75f).SetEase(Ease.InBack).OnComplete(delegate
		{
			Object.Destroy(base.gameObject);
			coinBag.DeactivateBlenderShape(true);
		});
	}

	public void OnFullDelay()
	{
		Invoke("OnFull", 1f);
	}

	public void ActivateBlenderShape()
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

	public void DeactivateBlenderShape(bool isActive = false)
	{
		skinnedMeshRenderer.SetBlendShapeWeight(0, 100f);
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
