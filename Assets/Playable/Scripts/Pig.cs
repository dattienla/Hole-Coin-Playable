using DG.Tweening;
using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;


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
    [FormerlySerializedAs("skinnedMeshRenderer")] public SkinnedMeshRenderer skinnedMeshRenderer;
    public GameObject dropParticle;
    public void DropDelay(float timedelay, ColorType type)
    {
        coinColor = type;
        Invoke(nameof(DropCoinToPig), timedelay);
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
        var coinObjet = Instantiate(coinPrefab, coinBag.spawnPoint.position, Quaternion.Euler(0, 90f, 0));
        var coin = coinObjet.GetComponent<Coin>();
        var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == type);
        if (mat != null && coin.meshRenderer != null)
        {
            coin.colorType = type;
            coin.meshRenderer.material = mat.coinMaterial;
        }
        coin.transform.SetParent(transform);
        //coin.ResetCoin();
        coinObjet.transform.localRotation = Quaternion.Euler(45, 0f, 0);

        maxCoinCount--;
        coin.audioSource.Play();
        Vector3 start = coin.transform.position;
        Vector3 mid = positionToDropCoin.position;
        Vector3 end = endPoint.position;

        Vector3[] path = new Vector3[] { mid, end };

        coin.transform.DOPath(path, 0.35f, PathType.CatmullRom)
            .SetEase(Ease.InOutQuad)
            .OnComplete(() =>
            {
                dropParticle.SetActive(true);

                skinnedMeshRenderer.transform.DOScale(1f, 0.1f).SetEase(Ease.InOutQuad).OnComplete(() =>
                {
                    skinnedMeshRenderer.transform.DOScale(0.9f, 0.1f).SetEase(Ease.InOutQuad);
                });

                coin.transform.SetParent(null);
                Destroy(coin.gameObject);
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
        GameObject c = Instantiate(confettiPrefab,
                    transform.position + Vector3.up * 3 - Vector3.back * 2, Quaternion.Euler(-90, 0, 0));
        c.SetActive(true);
        transform.DOScale(0, 0.75f).SetEase(Ease.InBack).OnComplete(() =>
        {
            Destroy(gameObject);
            coinBag.DeactivateBlenderShape(true);
        });
    }
    public void OnFullDelay()
    {
        Invoke(nameof(OnFull), 1f);
    }

    public void ActivateBlenderShape()
    {
        skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
        float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
        DOTween.To(() => weight, x =>
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, x);
        }, 100, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
        });
    }

    public void DeactivateBlenderShape(bool isActive = false)
    {
        skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
        float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
        DOTween.To(() => weight, x =>
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, x);
        }, 0, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            gameObject.SetActive(isActive);
            skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
        });
    }
}
