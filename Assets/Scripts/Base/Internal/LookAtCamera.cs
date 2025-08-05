using UnityEngine;

namespace Base.Internal
{
    public class LookAtCamera : MonoBehaviour
    {
        public Transform targetCamera;

        private void Start()
        {
            if (targetCamera == null)
            {
                targetCamera = Camera.main.transform;
            }
        }

        void LateUpdate()
        {
            if (targetCamera != null)
            {
                Vector3 targetPosition = targetCamera.position - transform.position;
                transform.rotation = Quaternion.LookRotation(-targetPosition);
            }
        }
    }
}
