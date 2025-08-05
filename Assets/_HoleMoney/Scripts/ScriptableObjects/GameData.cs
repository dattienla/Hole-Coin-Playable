using NaughtyAttributes;
using UnityEngine;

namespace _HoleMoney.Scripts.ScriptableObjects
{
    [CreateAssetMenu(fileName = "GameData", menuName = "Data/GameData", order = 0)]
    public class GameData : ScriptableObject
    {
        public int currentLevel = 0;
        public int currentLevelText;
        public int totalCoins = 0;
        public int totalBricks = 0;
        public int currentAmountOfAddSlotBooster = 0;
        public int currentAmountOfHoleBooster = 0;
        public int currentAmountOfBagBooster = 0;
        public int maxLife = 5;

        public int currentSkinId;
        public string userName;

        [Button]
        public void ResetData()
        {
            maxLife = 5;
            currentSkinId = 1;
            currentLevel = 1;
            currentLevelText = 1;
            totalCoins = 100;
            totalBricks = 0;
            currentAmountOfAddSlotBooster = 5;
            currentAmountOfHoleBooster = 5;
            currentAmountOfBagBooster = 5;
        }
    }
}
