using UnityEngine;
using UnityEngine.EventSystems;

namespace Base.UI
{
    public class HyperLinkText : MonoBehaviour, IPointerClickHandler
    {
        public string url = "https://play.google.com/store/apps/details?id=com.hotel2";
        public void OnPointerClick(PointerEventData eventData)
        {
            Application.OpenURL(url);
        }
    }
}
