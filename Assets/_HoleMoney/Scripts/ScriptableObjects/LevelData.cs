using System.Collections.Generic;
using _HoleMoney.Scripts.Enums;
using UnityEngine;
using UnityEngine.Serialization;

namespace _HoleMoney.Scripts.ScriptableObjects
{
    [System.Serializable]
    public class CoinPosition
    {
        public int xPosition;
        public int yPosition;
        public string colorType;
        public string typeLock;
        public int typeLockValue;
    }

    [System.Serializable]
    public class HolePosition
    {
        public int xPosition;
        public int yPosition;
        public string colorType;
        public string typeLock;
        public int typeLockValue;
    }

    [System.Serializable]
    public class PigRowData
    {
        public List<ColorType> pigType = new List<ColorType>();
    }

    [System.Serializable]
    public class ObstaclePosition
    {
        public int xPosition;
        public int yPosition;
    }

    [CreateAssetMenu(fileName = "CurrentLevelData", menuName = "So/LevelData", order = 0)]
    public class LevelData : ScriptableObject
    {
        public int xMapSize = 10;
        public int yMapSize = 10;
        public List<CoinPosition> coinPositions = new List<CoinPosition>();
        public List<HolePosition> holePositions = new List<HolePosition>();
        public List<PigRowData> pigRows = new List<PigRowData>();
        public List<ObstaclePosition> obstaclePositions = new List<ObstaclePosition>();
        public List<ObstaclePosition> iceObstaclePositions = new List<ObstaclePosition>();

        public void Clear()
        {
            xMapSize = 10;
            yMapSize = 10;
            coinPositions.Clear();
            holePositions.Clear();
            pigRows.Clear();
            obstaclePositions.Clear();
            iceObstaclePositions.Clear();
        }
    }
}
