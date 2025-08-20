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
}
