
using DG.Tweening;
using DG.Tweening.Core.Easing;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Serialization;
using static Unity.VisualScripting.Dependencies.Sqlite.SQLite3;

public class Hole : MonoBehaviour
{
    public ColorType colorType;
    public Transform pointToDropCoin;
    public bool isHoleActive;
    public bool canClick = true;
    public AudioSource audioSource;
    [FormerlySerializedAs("meshRenderer")] public SkinnedMeshRenderer skinnedMeshRenderer;
    public List<Tile> tilesInHole = new List<Tile>();
    public List<Tile> targetTiles = new List<Tile>();


    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out var hit))
            {
                if (hit.collider.transform == transform)
                {

                    //HapticFeedbackController.TriggerHaptics(HapticPatterns.PresetType.Success);
                    audioSource.Play();
                    transform.DOScale(1.25f, 0.1f)
                     .OnComplete(() => transform.DOScale(1.5f, 0.05f));
                    if (canClick)
                        GamePlay.Instance.StartHoleMoneyGame(this);

                }
            }
        }
    }
    public void ActivateBlenderShape(int delayMs)
    {
        StartCoroutine(ActivateBlenderShapeRoutine(delayMs));
    }

    private IEnumerator ActivateBlenderShapeRoutine(int delayMs)
    {
        yield return new WaitForSeconds(delayMs / 1000f); // tương đương Task.Delay
        if (skinnedMeshRenderer == null) yield break;

        skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
        float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);
        DOTween.To(() => weight, x => skinnedMeshRenderer.SetBlendShapeWeight(0, x), 100f, 0.25f)
          .SetEase(Ease.InBack)
          .OnComplete(() => skinnedMeshRenderer.SetBlendShapeWeight(0, 100));

    }

    public void DeactivateBlenderShape(int delayMs)
    {
        StartCoroutine(DeactivateBlenderShapeRoutine(delayMs));
    }

    private IEnumerator DeactivateBlenderShapeRoutine(int delayMs)
    {
        // Delay tương đương Task.Delay
        yield return new WaitForSeconds(delayMs / 1000f);

        if (skinnedMeshRenderer == null) yield break;

        // Set weight = 100 ngay sau delay
        skinnedMeshRenderer.SetBlendShapeWeight(0, 100);
        float weight = skinnedMeshRenderer.GetBlendShapeWeight(0);

        // Tween từ weight (100) → 0 trong 0.25s
        DOTween.To(() => weight, x => skinnedMeshRenderer.SetBlendShapeWeight(0, x), 0f, 0.25f)
            .SetEase(Ease.InBack)
            .OnComplete(() =>
            {
                isHoleActive = false;
                // Đảm bảo weight cuối cùng chính xác = 0
                skinnedMeshRenderer.SetBlendShapeWeight(0, 0);
            });
    }
}
