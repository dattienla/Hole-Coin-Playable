using UnityEngine;

namespace Base.Internal
{
    [RequireComponent(typeof(AudioSource))]
    public class SoundFx : MonoBehaviour
    {
        private AudioSource audioSource;

        private void Awake()
        {
            audioSource = GetComponent<AudioSource>();
        }

        public void Play()
        {
            if (audioSource == null)
            {
                audioSource = GetComponent<AudioSource>();
                return;
            }

            if(PlayerPrefs.GetInt("OnSoundOpen", 1) == 1)
            {
                audioSource.Play();
            }
        }

        public void PlayDelayed(float delay)
        {
            if (audioSource == null)
            {
                audioSource = GetComponent<AudioSource>();
                return;
            }

            if(PlayerPrefs.GetInt("OnSoundOpen", 1) == 1)
            {
                audioSource.PlayDelayed(delay);
            }
        }
    }
}
