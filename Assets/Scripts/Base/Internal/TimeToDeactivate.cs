using System.Collections;
using UnityEngine;

namespace Base.Internal
{
    public class TimeToDeactivate : MonoBehaviour
    {
        [SerializeField] protected float lifeTime = 10f;
        private void OnEnable()
        {
            StartCoroutine(Deactivate());
        }

        private void OnDisable()
        {
            StopAllCoroutines();
        }

        IEnumerator Deactivate()
        {
            yield return new WaitForSeconds(lifeTime);
            gameObject.SetActive(false);
        }
    }
}
