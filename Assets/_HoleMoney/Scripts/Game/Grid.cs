using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

namespace _HoleMoney.Scripts.Game
{
    public class Grid : MonoBehaviour
    {
        public List<Row> rows = new List<Row>();
        public void Reset()
        {
            rows = new List<Row>(GetComponentsInChildren<Row>(true));
            foreach (var row in rows)
            {
                row.Reset();
            }
        }

        public void ResetUnIncluded()
        {
            rows = new List<Row>(GetComponentsInChildren<Row>(false));
            foreach (var row in rows)
            {
                row.ResetUnIncluded();
                for (var x = 0; x < row.tiles.Count; x++)
                {
                    if (row.tiles[x] != null)
                    {
                        row.tiles[x].gridPosition = new Vector2Int(x, rows.IndexOf(row));
                    }
                }
            }
        }
    }
}
