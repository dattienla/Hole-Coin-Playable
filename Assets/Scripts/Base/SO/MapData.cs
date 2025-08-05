using System.Collections.Generic;
using NaughtyAttributes;
using UnityEngine;

namespace Base.SO
{

    [System.Serializable]
    public class TowerData
    {
        public int towerID;
        public bool unlocked;
        public int currentBrick;
        public int maxBricks;

        public void ResetData()
        {
            currentBrick = 0;
        }
    }

    [System.Serializable]
    public class IslandData
    {
        public int islandID;
        public bool unlocked;
        public List<TowerData> towersData;

        public void ResetData()
        {
            for(var i = 0; i < towersData.Count; i++)
            {
                towersData[i].ResetData();
                towersData[i].towerID = i + 1;
            }
        }
    }

    [CreateAssetMenu(fileName = "MapData", menuName = "MapData", order = 5)]
    public class MapData : ScriptableObject
    {
        public int currentIslandID;
        public int currentTowerID;
        public List<IslandData> islandsData;

        [Button]
        public void ResetData()
        {
            currentIslandID = 1;
            currentTowerID = 1;

            for (var i = 0; i < islandsData.Count; i++)
            {
                islandsData[i].ResetData();
                islandsData[i].islandID = i + 1;
                for (var j = 0; j < islandsData[i].towersData.Count; j++)
                {
                    islandsData[i].towersData[j].towerID = j + 1;
                    islandsData[i].towersData[j].ResetData();
                    islandsData[i].towersData[j].maxBricks = i * 150 + j * 100 + 50;
                }
            }
        }
    }

}
