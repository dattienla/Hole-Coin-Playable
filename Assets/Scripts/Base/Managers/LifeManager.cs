using System;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using UnityEngine;

namespace Base.Managers
{
    public class LifeManager : Singleton<LifeManager>
    {
        [Header("Energy Settings")]
        public float timeToRecover = 600f; // 10 phút
        public string energyText;
        public string timerText;

        public int currentEnergy;
        private DateTime nextEnergyTime;
        private DateTime lastEnergyUpdate;

        private const string EnergyKey = "Energy";
        private const string NextEnergyKey = "NextEnergyTime";
        private const string LastEnergyUpdateKey = "LastEnergyUpdate";

        protected override void Awake()
        {
            base.Awake();
            DontDestroyOnLoad(gameObject);
            LoadEnergy();
        }

        private void Update()
        {
            UpdateEnergy();
            UpdateUI();
        }
        public void AddEnergy(int amount)
        {
            currentEnergy += amount;
            if (currentEnergy > CenterDataManager.Instance.gameData.maxLife)
                currentEnergy = CenterDataManager.Instance.gameData.maxLife;

            SaveEnergy();

            // Nếu năng lượng đầy thì reset thời gian đếm
            if (currentEnergy == CenterDataManager.Instance.gameData.maxLife)
            {
                nextEnergyTime = DateTime.MinValue;
                PlayerPrefs.DeleteKey("NextEnergyTime");
            }
        }

        private void UpdateEnergy()
        {
            if (currentEnergy >= CenterDataManager.Instance.gameData.maxLife)
                return;

            TimeSpan timeSpan = nextEnergyTime - DateTime.Now;

            if (timeSpan <= TimeSpan.Zero)
            {
                int energyToAdd = (int)((DateTime.Now - nextEnergyTime).TotalSeconds / timeToRecover) + 1;
                currentEnergy += energyToAdd;
                if (currentEnergy >= CenterDataManager.Instance.gameData.maxLife)
                {
                    currentEnergy = CenterDataManager.Instance.gameData.maxLife;
                    timerText = "Full";
                }
                else
                {
                    nextEnergyTime = nextEnergyTime.AddSeconds(energyToAdd * timeToRecover);
                }

                SaveEnergy();
            }
        }

        private void UpdateUI()
        {
            energyText = $"{currentEnergy}";

            if (currentEnergy < CenterDataManager.Instance.gameData.maxLife)
            {
                TimeSpan time = nextEnergyTime - DateTime.Now;
                if (time.TotalSeconds < 0) time = TimeSpan.Zero;
                timerText = $"{time.Minutes:D2}m {time.Seconds:D2}s";
            }
            else
            {
                timerText = "Full";
            }
        }

        public void UseEnergy(int amount = 1)
        {
            if (currentEnergy >= amount)
            {
                currentEnergy -= amount;
                if (currentEnergy < CenterDataManager.Instance.gameData.maxLife && nextEnergyTime < DateTime.Now)
                {
                    nextEnergyTime = DateTime.Now.AddSeconds(timeToRecover);
                }
                SaveEnergy();
            }
        }

        private void LoadEnergy()
        {
            currentEnergy = PlayerPrefs.GetInt(EnergyKey, CenterDataManager.Instance.gameData.maxLife);

            string nextEnergyString = PlayerPrefs.GetString(NextEnergyKey, string.Empty);
            if (!string.IsNullOrEmpty(nextEnergyString) &&
                DateTime.TryParse(nextEnergyString, null, System.Globalization.DateTimeStyles.RoundtripKind, out DateTime parsedTime))
            {
                nextEnergyTime = parsedTime;
            }
            else
            {
                nextEnergyTime = DateTime.Now;
            }

            string lastUpdateString = PlayerPrefs.GetString(LastEnergyUpdateKey, string.Empty);
            if (!string.IsNullOrEmpty(lastUpdateString) &&
                DateTime.TryParse(lastUpdateString, null, System.Globalization.DateTimeStyles.RoundtripKind, out DateTime parsedLastTime))
            {
                lastEnergyUpdate = parsedLastTime;
            }
            else
            {
                lastEnergyUpdate = DateTime.Now;
            }

            // Tính thời gian offline
            TimeSpan timePassed = DateTime.Now - lastEnergyUpdate;
            int energyRecovered = (int)(timePassed.TotalSeconds / timeToRecover);
            currentEnergy = Mathf.Min(CenterDataManager.Instance.gameData.maxLife, currentEnergy + energyRecovered);

            if (currentEnergy < CenterDataManager.Instance.gameData.maxLife)
            {
                double leftover = timePassed.TotalSeconds % timeToRecover;
                nextEnergyTime = DateTime.Now.AddSeconds(timeToRecover - leftover);
            }

            SaveEnergy();
        }

        private void SaveEnergy()
        {
            PlayerPrefs.SetInt(EnergyKey, currentEnergy);
            PlayerPrefs.SetString(NextEnergyKey, nextEnergyTime.ToString("o"));
            PlayerPrefs.SetString(LastEnergyUpdateKey, DateTime.Now.ToString("o"));
            PlayerPrefs.Save();
        }

        private void OnApplicationQuit()
        {
            SaveEnergy();
        }

        private void OnApplicationPause(bool pause)
        {
            if (pause)
            {
                SaveEnergy();
            }
            else
            {
                LoadEnergy();
            }
        }

        private void OnDestroy()
        {
            SaveEnergy();
        }
    }
}
