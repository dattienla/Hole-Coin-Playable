using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.Internal;
using DG.Tweening;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class Coin : MonoBehaviour
    {
        public ColorType colorType;
        private ColorType _originalColorType;
        public MeshRenderer meshRenderer;
        public Animator animator;
        public GameObject smokeParticle;
        public SoundFx audioSource;
        public GameObject hiddenCoin;

        private bool trigered = false;

        public ColorType GetOriginalColorType()
        {
            return _originalColorType;
        }

        public void ResetCoin()
        {
            gameObject.SetActive(true);
            animator.enabled = false;
            smokeParticle?.SetActive(false);
            transform.localRotation = Quaternion.identity;
            meshRenderer.transform.localRotation = Quaternion.identity;
        }

        public void SetHidden(bool hidden)
        {
            hiddenCoin.SetActive(hidden);
            animator.gameObject.SetActive(!hidden);
        }

        public void SetOriginalColorType(ColorType type)
        {
            _originalColorType = type;
            /*SetCoinMaterial(type);*/
        }

        public void SetCoinMaterial()
        {
            colorType = _originalColorType;
            SetCoinMaterial(colorType);
        }

        public void SetCoinMaterial(ColorType type)
        {
            colorType = type;
            var mat = CenterDataManager.Instance.materialsSo.mainMaterials
                .FirstOrDefault(t => t.colorType == colorType);

            if (mat != null && meshRenderer != null)
                meshRenderer.material = mat.coinMaterial;
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

            var jumpPower = Random.Range(3.5f, 5.5f);
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
}
