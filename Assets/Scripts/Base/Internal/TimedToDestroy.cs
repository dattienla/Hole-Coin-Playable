using System.Collections;
using DG.Tweening;
using UnityEngine;

namespace Base.Internal
{
    public class TimedToDestroy : MonoBehaviour
    {
        public float timeToDestroy = 1f;
        public bool scaleDown = false;

        private void Start()
        {
            if (scaleDown)
            {
                StartCoroutine(DestroyAfterDelay(timeToDestroy));
            }
            else
            {
                Destroy(gameObject, timeToDestroy);
            }
        }

        private IEnumerator DestroyAfterDelay(float delay)
        {
            yield return new WaitForSeconds(delay);
            transform.DOScale(Vector3.zero, 0.5f).OnComplete(() =>
            {
                Destroy(gameObject);
            });
        }
    }
}
