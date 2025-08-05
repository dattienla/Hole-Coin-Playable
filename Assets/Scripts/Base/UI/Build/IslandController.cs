using System.Collections.Generic;
using UnityEngine;

namespace Base.UI.Build
{
    public class IslandController : MonoBehaviour
    {
        public int islandID;
        public List<TowerController> towerControllers = new List<TowerController>();
    }
}
