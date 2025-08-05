using _HoleMoney.Scripts.Managers;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace _HoleMoney.Scripts.UI
{
    public class UITop : MonoBehaviour
    {
        public TextMeshProUGUI levelText;

        public void UpdateLevelText()
        {
            levelText.text = $"Level {CenterDataManager.Instance.gameData.currentLevelText}";
        }

        public void ResetLevel()
        {
            SceneManager.LoadScene(SceneManager.GetActiveScene().name);
        }
    }
}
