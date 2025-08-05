using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace Base.UI
{
    public class UILoadingBar : MonoBehaviour
    {
        public float loadingTime = 2;
        public TextMeshProUGUI deviceNameText;
        public Image loadingBarImage;

        private void Awake()
        {
            Loading((() =>
            {
                SceneManager.LoadSceneAsync(SceneManager.GetActiveScene().buildIndex + 1);
            }), loadingTime);
        }

        private void Start()
        {
            var id = SystemInfo.deviceUniqueIdentifier;
            deviceNameText.text = id;
        }

        private void Loading(Action onComplete, float timeToLoad)
        {
            loadingBarImage.fillAmount = 0;
            loadingBarImage.DOFillAmount(1, timeToLoad).OnComplete(() =>
            {
                onComplete?.Invoke();
            });
        }
    }
}
