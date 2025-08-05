using _HoleMoney.Scripts.Managers;
using Base.Internal;
using Base.Managers;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace _HoleMoney.Scripts.UI
{
    public class UILose : MonoBehaviour
    {
        public SoundFx loseSoundFx;
        public TextMeshProUGUI levelText;

        private void OnEnable()
        {
            loseSoundFx.Play();
            levelText.text = "Level " + CenterDataManager.Instance.gameData.currentLevel + " Failed!";
            LifeManager.Instance.UseEnergy();
        }
        public void OnTryAgain()
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        }
    }
}
