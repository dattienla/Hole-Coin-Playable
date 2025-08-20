using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Hand : MonoBehaviour
{
    // Start is called before the first frame update
    public void OnEnable()
    {
        transform.DOScale(0.8f, 0.6f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
    }
    public void MoveToHole0()
    {
        gameObject.SetActive(true);
        gameObject.GetComponent<RectTransform>().anchoredPosition = new Vector2(-33, -Screen.height * 2f);
        CanvasGroup handCG = gameObject.GetComponent<CanvasGroup>();
        handCG.alpha = 0f;

        DOTween.To(() => handCG.alpha, x => handCG.alpha = x, 1f, 0.5f)
               .SetEase(Ease.InOutQuad);
        RectTransform handRT = gameObject.GetComponent<RectTransform>();

        DOTween.To(() => handRT.anchoredPosition, x => handRT.anchoredPosition = x, new Vector2(-33, -220), 0.5f)
               .SetEase(Ease.OutCubic);
    }
}
