using DG.Tweening;
using UnityEngine;

public class CoinBag : MonoBehaviour
{
    public SkinnedMeshRenderer skinnedMeshRenderer;
    public Transform spawnPoint;

    private void OnEnable()
    {
        transform.DOLocalRotate(new Vector3(0, 30, 0), 0.5f, RotateMode.Fast)
       .SetEase(Ease.OutBack)     // kiểu easing OutBack
       .SetLoops(1)               // lặp 1 lần (thực ra default là 1 rồi)
       .SetRelative(true)         // relative rotation
       .SetUpdate(true);          // ignore timescale (chạy bất chấp timescale)
        ActivateBlenderShape();
    }

    public void ActivateBlenderShape()
    {
        skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
        float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
        DOTween.To(() => weight, x =>
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, x);
        }, 50, 0.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            skinnedMeshRenderer.SetBlendShapeWeight(0, 50);
        });
    }

    public void DeactivateBlenderShape(bool isActive = false)
    {
        skinnedMeshRenderer.SetBlendShapeWeight(0, 50);
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
