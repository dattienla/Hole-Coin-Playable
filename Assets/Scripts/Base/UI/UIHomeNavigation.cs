using Base.Common;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

namespace Base.UI
{
    public class UIHomeNavigation : Singleton<UIHomeNavigation>
    {
        public GameObject comingSoonPanel;
        public GameObject comingSoonPanel_1;
        public GameObject comingSoonPanel_2;
        public RectTransform horizontalLayout;
        public RectTransform shopPosition;
        public RectTransform questPosition;
        public RectTransform homePosition;
        public RectTransform rankPosition;
        public RectTransform lockPosition;

        public RectTransform shopIcon;
        public RectTransform questIcon;
        public RectTransform homeIcon;
        public RectTransform rankIcon;
        public RectTransform lockIcon;

        public GameObject shopText;
        public GameObject questText;
        public GameObject homeText;
        public GameObject rankText;
        public GameObject lockText;

        public RectTransform mainFeature;
        public RectTransform currentFeature;
        public RectTransform currentIcon;
        public GameObject currentText;



        public Vector2 normalSize;
        public Vector2 selectedSize;

        public Vector2 normalIconSize;
        public Vector2 selectedIconSize;

        public Vector2 normalIconPosition;
        public Vector2 selectedIconPosition;

        public void GoToShop()
        {
            comingSoonPanel.SetActive(false);
            comingSoonPanel_1.SetActive(false);
            comingSoonPanel_2.SetActive(false);
            if(currentFeature == shopPosition)
                return;
            mainFeature.DOMoveX(shopPosition.position.x, 0.25f).OnComplete(() =>
            {
                mainFeature.DOMoveX(shopPosition.position.x, 0.1f);
            });
            ChangeSize(shopPosition,shopIcon,shopText);

            /*UIShopManager.Instance.ShowShopPanel();
            UIRankingManager.Instance.HideRanking();
            VibrationManager.Vibrate(HapticTypes.SoftImpact);*/
        }

        public void GoToQuest()
        {
            comingSoonPanel.SetActive(false);
            comingSoonPanel_1.SetActive(false);
            comingSoonPanel_2.SetActive(false);
            comingSoonPanel.transform.position = new Vector3(questPosition.transform.position.x, comingSoonPanel.transform.position.y, 0);
            comingSoonPanel.SetActive(true);
            /*VibrationManager.Vibrate(HapticTypes.Warning);*/
            return;

            if(currentFeature == questPosition)
                return;
            mainFeature.DOMoveX(questPosition.position.x, 0.25f).OnComplete((() =>
            {
                mainFeature.DOMoveX(questPosition.position.x, 0.1f);
            }));

            ChangeSize(questPosition,questIcon,questText);
        }

        public void GoToHome()
        {
            comingSoonPanel.SetActive(false);
            comingSoonPanel_1.SetActive(false);
            comingSoonPanel_2.SetActive(false);
            if(currentFeature == homePosition)
                return;
            mainFeature.DOMoveX(homePosition.position.x, 0.25f).OnComplete(() =>
            {
                mainFeature.DOMoveX(homePosition.position.x, 0.1f);
            });
            ChangeSize(homePosition,homeIcon,homeText);
            /*UIShopManager.Instance.HideShopPanel();
            UIRankingManager.Instance.HideRanking();
            VibrationManager.Vibrate(HapticTypes.SoftImpact);*/
        }

        public void GoToRank()
        {
            comingSoonPanel.SetActive(false);
            comingSoonPanel_1.SetActive(false);
            comingSoonPanel_2.SetActive(false);
            comingSoonPanel_1.transform.position = new Vector3(rankPosition.transform.position.x, comingSoonPanel.transform.position.y, 0);
            comingSoonPanel_1.SetActive(true);
            /*VibrationManager.Vibrate(HapticTypes.Warning);*/
            return;
            if(currentFeature == rankPosition)
                return;
            mainFeature.DOMoveX(rankPosition.position.x, 0.25f).OnComplete((() =>
            {
                mainFeature.DOMoveX(rankPosition.position.x, 0.1f);
            }));
            ChangeSize(rankPosition,rankIcon,rankText);
            /*UIShopManager.Instance.HideShopPanel();
            UIRankingManager.Instance.ShowRanking();*/
        }

        public void GoToLock()
        {
            comingSoonPanel.SetActive(false);
            comingSoonPanel_1.SetActive(false);
            comingSoonPanel_2.SetActive(false);
            comingSoonPanel_2.transform.position = new Vector3(lockPosition.transform.position.x, comingSoonPanel.transform.position.y, 0);
            comingSoonPanel_2.SetActive(true);
            /*VibrationManager.Vibrate(HapticTypes.Warning);*/
            return;
            if (mainFeature == lockPosition)
                return;
            mainFeature.DOMoveX(lockPosition.position.x, 0.25f).OnComplete((() =>
            {
                mainFeature.DOMoveX(lockPosition.position.x, 0.1f);
            }));
            ChangeSize(lockPosition,lockIcon,lockText);
        }

        private void ChangeSize(RectTransform rectTransform,RectTransform icon,GameObject text)
        {
            currentIcon.DOSizeDelta(normalIconSize, 0.3f);
            currentIcon.transform.DOLocalMove(normalIconPosition, 0.3f);
            currentIcon = icon;
            currentIcon.DOSizeDelta(selectedIconSize, 0.3f);
            currentIcon.transform.DOLocalMove(selectedIconPosition, 0.3f);

            currentFeature.DOSizeDelta(normalSize, 0.3f);
            currentFeature = rectTransform;
            currentFeature.DOSizeDelta(selectedSize, 0.3f);

            currentText.SetActive(false);
            currentText = text;
            currentText.SetActive(true);
        }

        private void Update()
        {
            LayoutRebuilder.ForceRebuildLayoutImmediate(horizontalLayout);
        }
    }
}
