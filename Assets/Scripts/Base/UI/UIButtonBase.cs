using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

namespace Base.UI
{

    public class UIButtonBase : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
    {

        private Vector3 _originalScale;

        private void Awake()
        {
            _originalScale = transform.localScale;
        }

        public void OnPointerDown(PointerEventData eventData)
        {
            transform.DOScale(0.8f * _originalScale, 0.1f); // Thu nhỏ khi giữ
        }

        public void OnPointerUp(PointerEventData eventData)
        {
            transform.DOScale(_originalScale, 0.1f); // Quay lại kích thước ban đầu
        }
    }
}
