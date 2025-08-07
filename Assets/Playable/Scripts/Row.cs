using System.Collections.Generic;
using System.Linq;
using UnityEngine;

    public class Row : MonoBehaviour
    {
        public List<Tile> tiles = new List<Tile>();

        public void Reset()
        {
            tiles = GetComponentsInChildren<Tile>(true).ToList();
        }

        public void ResetUnIncluded()
        {
            tiles = GetComponentsInChildren<Tile>(false).ToList();
        }
    }

