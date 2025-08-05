using System.Collections.Generic;
using UnityEngine;

namespace Base.UI.Build
{
    public class TowerController : MonoBehaviour
    {
        public int towerID;
        public List<Transform> buildPoints = new List<Transform>();
        public UITowerBrickAmount towerBrickAmount;
        public MeshRenderer towerMeshRenderer;

        private void Reset()
        {
            buildPoints.Clear();
            buildPoints.Add(transform);
            for (var i = 0; i < transform.childCount; i++)
            {
                var child = transform.GetChild(i);
                buildPoints.Add(child);
            }
        }
    }
}
