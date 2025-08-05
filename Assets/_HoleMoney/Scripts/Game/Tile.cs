using System.Collections.Generic;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class Tile : MonoBehaviour
    {
        public bool isEmpty = true;
        public Vector2Int gridPosition;
        public Coin childCoin;
        public IceBox childIceBox;
        public bool isHidden = false;
        public bool isEmptyAfterCoinMove = false;


        public void SetHoleMaterial()
        {
            var meshRenderer = GetComponent<MeshRenderer>();
            meshRenderer.material = CenterDataManager.Instance.materialsSo.holeTileMaterial;
        }

        public void SetNormalMaterial()
        {
            var meshRenderer = GetComponent<MeshRenderer>();
            meshRenderer.material = CenterDataManager.Instance.materialsSo.normalTileMaterial;
        }

        public List<Tile> GetNeighbors()
        {
            List<Tile> neighbors = new List<Tile>();
            Vector2Int[] directions = new Vector2Int[]
            {
                Vector2Int.up,
                Vector2Int.down,
                Vector2Int.left,
                Vector2Int.right
            };

            foreach (var dir in directions)
            {
                Vector2Int neighborPos = gridPosition + dir;

                Debug.Log($"Checking neighbor at position: {neighborPos}");

                if (LevelDesigner.Instance.IsInsideGrid(neighborPos))
                {
                    Tile neighborTile = LevelDesigner.Instance.grid.rows[neighborPos.y].tiles[neighborPos.x];
                    if (neighborTile != null)
                        neighbors.Add(neighborTile);
                }
            }

            return neighbors;
        }

    }


}
