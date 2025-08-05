using UnityEngine;

namespace _HoleMoney.Scripts.ScriptableObjects
{
    [CreateAssetMenu(fileName = "PrefabsSo", menuName = "So/Prefabs", order = 0)]
    public class PrefabsSo : ScriptableObject
    {
        public GameObject holePrefab;
        public GameObject coinPrefab;
        public GameObject pigPrefab;
        public GameObject boxPrefab;
        public GameObject iceBoxPrefab;

        [Header("UI Prefabs")] public GameObject coinFxPrefab;

        [Header("Effects Prefabs")]
        public GameObject confettiPrefab;
        public GameObject starFxPrefab;

    }
}
