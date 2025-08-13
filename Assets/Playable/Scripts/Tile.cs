using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering.UI;

public class Tile : MonoBehaviour
{
    public bool isEmpty => childCoin == null || isEmptyAfterCoinMove;
    public Vector2Int gridPosition;
    public bool isEmptyAfterCoinMove = false;
    public GameObject childCoin;
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
            if (IsInsideGrid(neighborPos))
            {
                Tile neighborTile = Grid.instance.rows[neighborPos.x].tiles[neighborPos.y];
                if (neighborTile != null)
                    neighbors.Add(neighborTile);
            }
        }

        return neighbors;
    }
    public bool IsInsideGrid(Vector2Int pos)
    {
        return pos.x >= 0 && pos.x < Grid.instance.rows.Count &&
              pos.y >= 0 && pos.y < Grid.instance.rows[pos.x].tiles.Count;
    }
    public ColorType GetColorTile()
    {
        if (isEmpty) return ColorType.None;
        else return childCoin.GetComponent<Coin>().colorType;
    }

}



