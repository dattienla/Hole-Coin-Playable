using _HoleMoney.Scripts.Managers;
using Base.SO;
using UnityEngine;
using UnityEngine.UI;

namespace Base.UI.Profile
{
    public class UISkinItem : MonoBehaviour
    {
        public GameObject selectSkin;
        public Image skinImage;
        public Skin skinItem;


        public void SetSkinImage(Skin skin)
        {
            skinItem = skin;
            var sprite = skinItem.skinSprite;
            if (sprite == null)
            {
                Debug.LogError("Skin sprite is null");
                return;
            }
            skinImage.sprite = sprite;
        }

        public void SetSelectSkin(bool isSelected)
        {
            selectSkin.SetActive(isSelected);
        }

        public void OnClick()
        {
            if (selectSkin.activeSelf) return;
            UIProfileManager.Instance.skinManager.DeselectAllSkins();
            CenterDataManager.Instance.gameData.currentSkinId = skinItem.id;
            UIProfileManager.Instance.skinManager.skinImage.sprite = skinItem.skinSprite;
            UIProfileManager.Instance.avatarImage.sprite = skinItem.skinSprite;
            CenterDataManager.Instance.Save();
            SetSelectSkin(true);

        }
    }
}
