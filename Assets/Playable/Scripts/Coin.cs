using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coin : MonoBehaviour
{
    public ColorType colorType;
    public MeshRenderer meshRenderer;
    public Animator animator;
    public GameObject smokeParticle;
    public AudioSource audioSource;

    public void ResetCoin()
    {
        gameObject.SetActive(true);
        animator.enabled = false;
        smokeParticle?.SetActive(false);
        transform.localRotation = Quaternion.identity;
        meshRenderer.transform.localRotation = Quaternion.identity;
    }
    public void JumpToHole(Transform hole, System.Action onComplete = null)
    {
        if (animator != null) animator.enabled = true;
        if (smokeParticle != null) smokeParticle.SetActive(true);

        var offset = new Vector3(
            Random.Range(-0.2f, 0.2f),
            -0.5f,
            Random.Range(-0.2f, 0.2f)
        );
        var end = hole.position + offset;
        end.y += 0.5f;

        var jumpPower = Random.Range(7.5f, 10f);
        var duration = Random.Range(0.6f, 1f);
        transform.DOJump(end, jumpPower, 1, duration)
            .SetEase(Ease.Linear)
            .OnComplete(() =>
            {
                transform.DOMoveY(hole.position.y - 1f, 0.3f)
                    .SetEase(Ease.InQuad)
                    .OnComplete(() =>
                    {
                        if (smokeParticle != null) smokeParticle.SetActive(false);
                        transform.localRotation = Quaternion.identity;
                        onComplete?.Invoke();
                        Destroy(gameObject, 0.5f);
                    });
            });
    }
}
