using System;
using System.Collections.Generic;
using UnityEngine;

namespace _HoleMoney.Scripts.ScriptableObjects
{
    [Serializable]
    public class ConfigsPerLevel
    {
        [Header("Level Configs")] public int numberOfSLots = 4;

        [Header("Level Rewards")]
        public int coinReward;

        public int brickReward = 20;
    }

    [CreateAssetMenu(fileName = "levelDesigner", menuName = "So/LevelDesigner", order = 0)]
    public class LevelDesigner : ScriptableObject
    {
        public List<TextAsset> mapLevel;
        public List<TextAsset> pigLevel;
        public List<ConfigsPerLevel> rewardPerLevel;
    }
}
