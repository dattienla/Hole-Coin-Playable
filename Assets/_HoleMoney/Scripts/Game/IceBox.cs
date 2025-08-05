using _HoleMoney.Scripts.Enums;
using Base.Common;
using Base.Internal;
using TMPro;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class IceBox : MonoBehaviour
    {
        public int maxLockValue = 0;
        public int lockValue = 0;
        public TextMeshPro lockValueText;

        public GameObject highIce;
        public GameObject lowIce;
        public GameObject mediumIce;
        public GameObject effectIce;

        public SoundFx audioSource;

        private void Awake()
        {
            Observer.RegisterObserver(GameEvents.OnDecreaseIceBoxLockValue.ToString(), DecreaseLockValue);
            Debug.Log("99999");
        }

        private void OnDestroy()
        {
            Observer.RemoveObserver(GameEvents.OnDecreaseIceBoxLockValue.ToString(), DecreaseLockValue);
        }

        private void DecreaseLockValue(object sender)
        {
            if (!(sender is int)) return;

            int value = (int)sender;
            DecreaseLockValue(value);
        }

        public void SetMaxLockValue(int value)
        {
            maxLockValue = value;
            lockValue = value;
            SetText();
        }

        private void DecreaseLockValue(int value = 1)
        {
            if (lockValue <= 0) return;

            lockValue -= value;
            if (lockValue <= maxLockValue / 2 && highIce.activeSelf)
            {
                audioSource.Play();
                effectIce.SetActive(true);
                highIce.SetActive(false);
            }
            if (lockValue <= maxLockValue / 4 && mediumIce.activeSelf)
            {
                audioSource.Play();
                effectIce.SetActive(true);
                mediumIce.SetActive(false);
            }
            if (lockValue <= 0 && lowIce.activeSelf)
            {
                audioSource.Play();
                effectIce.SetActive(true);
                lockValue = 0;
                lowIce.SetActive(false);
                lockValueText.gameObject.SetActive(false);
            }
            SetText();
        }

        public void Deactivate()
        {
            gameObject.SetActive(false);
        }

        private void SetText()
        {
            if (lockValueText != null)
            {
                lockValueText.text = lockValue.ToString();
            }
        }
    }
}
