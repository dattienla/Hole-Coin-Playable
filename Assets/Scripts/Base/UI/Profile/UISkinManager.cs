using System.Collections.Generic;
using _HoleMoney.Scripts.Managers;
using UnityEngine;
using UnityEngine.UI;

namespace Base.UI.Profile
{
    public class UISkinManager : MonoBehaviour
    {
        public List<UISkinItem> skinItems;
        public Image skinImage;

        private void Reset()
        {
            skinItems = new List<UISkinItem>(GetComponentsInChildren<UISkinItem>());
        }

        private void Awake()
        {
            LoadSkins();
        }

        private void LoadSkins()
        {
            var skins = CenterDataManager.Instance.skinSo.skins;
            for (var i = 0; i < skinItems.Count; i++)
            {
                if (i < skins.Count)
                {
                    skinItems[i].SetSkinImage(skins[i]);
                    skinItems[i].gameObject.SetActive(true);
                    skinItems[i].SetSelectSkin(skins[i].id == CenterDataManager.Instance.gameData.currentSkinId);
                    if(skins[i].id == CenterDataManager.Instance.gameData.currentSkinId)
                    {
                        skinImage.sprite = skins[i].skinSprite;
                        UIProfileManager.Instance.avatarImage.sprite = skins[i].skinSprite;
                    }
                }
                else
                {
                    skinItems[i].gameObject.SetActive(false);
                }
            }
        }

        public void DeselectAllSkins()
        {
            foreach (var skinItem in skinItems)
            {
                skinItem.SetSelectSkin(false);
            }
        }
    }
}
