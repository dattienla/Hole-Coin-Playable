using _HoleMoney.Scripts.Managers;
using Base.Common;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Base.UI.Build
{
    public class UIBuild : Singleton<UIBuild>
    {
        public TextMeshProUGUI brickAmountText;

        public GameObject holdButton;
        public GameObject nextButton;

        private void Start()
        {
            UpdateBrick();
            holdButton.SetActive(true);
            nextButton.SetActive(false);
        }

        public void UpdateBrick()
        {
            brickAmountText.text = Common.Common.FormatNumber(CenterDataManager.Instance.gameData.totalBricks);
        }

        public void NextButton()
        {
            CenterDataManager.Instance.Save();
            SceneManager.LoadScene("Game_Home");
        }
    }
}
