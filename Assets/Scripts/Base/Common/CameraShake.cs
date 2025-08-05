using DG.Tweening;
using UnityEngine;

namespace Base.Common
{
    public class CameraShake : Singleton<CameraShake>
    {

        private Vector3 _originalPos;
        protected override void Awake()
        {
            base.Awake();
            _originalPos = transform.localPosition;
        }


        public void Shake()
        {
            var random1 = new Vector3(0.05f, 0f, -0.05f);
            var random2 = new Vector3(-0.04f, 0f, 0.04f);
            var random3 = new Vector3(0.02f, 0f, -0.02f);
            transform.DOLocalMove(_originalPos + random1, 0.05f).SetEase(Ease.OutSine).OnComplete(() =>
            {
                transform.DOLocalMove(_originalPos + random2, 0.05f).SetEase(Ease.OutSine).OnComplete(() =>
                {
                    transform.DOLocalMove(_originalPos + random3, 0.05f).SetEase(Ease.OutSine).OnComplete(() =>
                    {
                        transform.DOLocalMove(_originalPos, 0.05f).SetEase(Ease.OutSine);
                    });
                });
            });
        }

    }
}
