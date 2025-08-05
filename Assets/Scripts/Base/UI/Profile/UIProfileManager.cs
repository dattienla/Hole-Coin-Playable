using _HoleMoney.Scripts.Managers;
using Base.Common;
using DotweenAnimations;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Button = UnityEngine.UI.Button;

namespace Base.UI.Profile
{
    public class UIProfileManager : Singleton<UIProfileManager>
    {
        public UISkinManager skinManager;
        public GameObject accessoryPanel;
        public GameObject skinPanel;
        public MoveAnimation navigationAnimation;
        public ScaleAnimation accessoryText;
        public ScaleAnimation skinText;
        public Button accessoryButton;
        public Button skinButton;
        public Image avatarImage;

        public TMP_InputField userNameText;
        private bool isSkin;

        protected override void Awake()
        {
            base.Awake();
            accessoryButton.onClick.AddListener(OnAccessoryButtonClicked);
            skinButton.onClick.AddListener(OnBackButtonClicked);
            userNameText.text = CenterDataManager.Instance.gameData.userName;
            userNameText.onValueChanged.AddListener(OnUserNameChanged);
        }

        private void OnAccessoryButtonClicked()
        {
            if (!isSkin) return;
            isSkin = false;
            /*VibrationManager.Vibrate(HapticTypes.Selection);*/
            navigationAnimation.MoveBack();
            accessoryText.ScaleUp();
            skinText.ScaleOrigin();
            accessoryPanel.SetActive(false);
            skinPanel.SetActive(true);
        }

        private void OnBackButtonClicked()
        {
            if (isSkin) return;
            isSkin = true;
            /*VibrationManager.Vibrate(HapticTypes.Selection);*/
            navigationAnimation.Move();
            accessoryText.ScaleOrigin();
            skinText.ScaleUp();
            accessoryPanel.SetActive(true);
            skinPanel.SetActive(false);
        }

        private void OnUserNameChanged(string text)
        {
            CenterDataManager.Instance.gameData.userName = text;
            CenterDataManager.Instance.Save();
        }

        public void Close()
        {
            /*RankingManager.Instance.UpdateExtraUserData();*/
        }

    }
}
