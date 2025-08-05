using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.Managers;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Base.UI
{
    public class UIHomeManager : Singleton<UIHomeManager>
    {
        public Button playButton;
        public TextMeshProUGUI levelText;
        public TextMeshProUGUI coinText;
        public TextMeshProUGUI energyText;
        public TextMeshProUGUI timeToAddEnergyText;


        protected override void Awake()
        {
            base.Awake();
            playButton.onClick.AddListener(PlayGame);
        }

        private void Start()
        {
            levelText.text = "Level " + CenterDataManager.Instance.gameData.currentLevelText;
            UpdateMoney();

        }

        private void UpdateMoney()
        {
            coinText.text = Common.Common.FormatNumber((int)CenterDataManager.Instance.gameData.totalCoins);
        }

        private void Update()
        {
            energyText.text = LifeManager.Instance.energyText;
            timeToAddEnergyText.text = LifeManager.Instance.timerText;
        }

        private void PlayGame()
        {
            if(LifeManager.Instance.currentEnergy <= 0)
            {
                /*EventManager.Broadcast(GameEvent.OnShowRefillPanel);*/
                return;
            }
            SceneManager.LoadSceneAsync(SceneManager.GetActiveScene().buildIndex + 1);
        }
    }
}
