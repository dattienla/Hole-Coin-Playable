using _HoleMoney.Scripts.Managers;
using TMPro;
using UnityEngine;

namespace _HoleMoney.Scripts.UI
{
    public class UISettings : MonoBehaviour
    {
        public GameObject musicOff;
        public GameObject soundOff;
        public GameObject hapticOff;
        public TextMeshProUGUI versionText;

        private void Start()
        {
            AllChange();
            versionText.text = "Version " + Application.version;
        }

        private void AllChange()
        {
            var music = PlayerPrefs.GetInt("OnMusicOpen", 1) == 1;
            var sound = PlayerPrefs.GetInt("OnSoundOpen", 1) == 1;
            var haptic = PlayerPrefs.GetInt("OnHapticOpen", 1) == 1;

            musicOff.SetActive(!music);
            soundOff.SetActive(!sound);
            hapticOff.SetActive(!haptic);
            AudioManager.Instance.backgroundMusic.mute = !music;
        }

        public void OnMusicChange()
        {
            var music = PlayerPrefs.GetInt("OnMusicOpen", 1) == 1;
            music = !music; // Toggle the music state
            PlayerPrefs.SetInt("OnMusicOpen", music ? 1 : 0);
            PlayerPrefs.Save();
            musicOff.SetActive(!music);
            AudioManager.Instance.backgroundMusic.mute = !music;
        }

        public void OnSoundChange()
        {
            var sound = PlayerPrefs.GetInt("OnSoundOpen", 1) == 1;
            sound = !sound; // Toggle the sound state
            PlayerPrefs.SetInt("OnSoundOpen", sound ? 1 : 0);
            PlayerPrefs.Save();
            soundOff.SetActive(!sound);
        }

        public void OnHapticChange()
        {
            var haptic = PlayerPrefs.GetInt("OnHapticOpen", 1) == 1;
            haptic = !haptic; // Toggle the haptic state
            PlayerPrefs.SetInt("OnHapticOpen", haptic ? 1 : 0);
            PlayerPrefs.Save();
            hapticOff.SetActive(!haptic);
        }
    }
}
