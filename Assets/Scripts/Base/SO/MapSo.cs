using System.Collections.Generic;
using UnityEngine;

namespace Base.SO
{
    [System.Serializable]
    public class Tower
    {
        public int towerID;
    }

    [System.Serializable]
    public class Island
    {
        public int islandID;
        public string islandName;
        public GameObject islandPrefab;
        public List<Tower> towers;
    }

    [CreateAssetMenu(fileName = "MapSo", menuName = "So/MapSo", order = 3)]
    public class MapSo : ScriptableObject
    {
        public List<Island> islands;
    }
}
