using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.Internal;
using Base.UI;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace _HoleMoney.Scripts.UI
{
    public class UIWin : MonoBehaviour
    {
        public CollectEffect collectEffect;
        public SoundFx winSoundFx;
        public TextMeshProUGUI rewardText;
        public TextMeshProUGUI coinText;
        public TextMeshProUGUI brickText;

        public void OnEnable()
        {
            winSoundFx.Play();
            UIManager.Instance.uiTop.gameObject.SetActive(false);
            coinText.text = Common.FormatNumber(CenterDataManager.Instance.gameData.totalCoins);
            var levelData = CenterDataManager.Instance.levelDesigner.rewardPerLevel[CenterDataManager.Instance.gameData.currentLevel];
            rewardText.text = "+ " + levelData.coinReward;
            brickText.text = "+ " + levelData.brickReward;

            CenterDataManager.Instance.gameData.currentLevel++;
            CenterDataManager.Instance.gameData.currentLevelText++;
            CenterDataManager.Instance.gameData.totalBricks += levelData.brickReward;

            CenterDataManager.Instance.Save();

            AudioManager.Instance.coinDropAudioSource.Play();
            collectEffect.CollectMoney(rewardText.transform, coinText.transform.parent, levelData.coinReward, () =>
            {
                AudioManager.Instance.uiClickAudioSource.Play();
                CenterDataManager.Instance.gameData.totalCoins++;
                CenterDataManager.Instance.Save();
                UpdateCoinText();
            });
        }

        public void OnContinue()
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
        }

        private void UpdateCoinText()
        {
            coinText.text = Common.FormatNumber(CenterDataManager.Instance.gameData.totalCoins);
        }
    }
}
