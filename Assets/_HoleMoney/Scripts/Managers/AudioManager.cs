using Base.Common;
using Base.Internal;
using UnityEngine;

namespace _HoleMoney.Scripts.Managers
{
    public class AudioManager : Singleton<AudioManager>
    {
        [Header("Background Music")]
        public AudioSource backgroundMusic;

        public SoundFx coinDropAudioSource;
        public SoundFx uiClickAudioSource;
    }
}
