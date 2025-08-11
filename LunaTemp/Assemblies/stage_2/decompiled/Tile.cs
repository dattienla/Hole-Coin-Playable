using System.Collections.Generic;
using UnityEngine;

public class Tile : MonoBehaviour
{
	public Vector2Int gridPosition;

	public bool isEmptyAfterCoinMove = false;

	public Coin childCoin;

	public bool isEmpty => childCoin == null;

	private void Awake()
	{
		if (base.transform.childCount > 0)
		{
			childCoin = base.transform.GetChild(0).GetComponent<Coin>();
		}
		else
		{
			childCoin = null;
		}
	}

	private void Start()
	{
	}

	public List<Tile> GetNeighbors()
	{
		List<Tile> neighbors = new List<Tile>();
		Vector2Int[] directions = new Vector2Int[4]
		{
			Vector2Int.up,
			Vector2Int.down,
			Vector2Int.left,
			Vector2Int.right
		};
		Vector2Int[] array = directions;
		foreach (Vector2Int dir in array)
		{
			Vector2Int neighborPos = gridPosition + dir;
			if (IsInsideGrid(neighborPos))
			{
				Tile neighborTile = Grid.instance.rows[neighborPos.x].tiles[neighborPos.y];
				if (neighborTile != null)
				{
					neighbors.Add(neighborTile);
				}
			}
		}
		return neighbors;
	}

	public bool IsInsideGrid(Vector2Int pos)
	{
		return pos.x >= 0 && pos.x < Grid.instance.rows.Count && pos.y >= 0 && pos.y < Grid.instance.rows[pos.x].tiles.Count;
	}

	public Color GetColorTile()
	{
		if (isEmpty)
		{
			return Color.clear;
		}
		Transform coin = childCoin.transform.Find("coin/Cylinder");
		if (coin != null)
		{
			Renderer r = coin.GetComponent<Renderer>();
			if (r != null)
			{
				return r.material.color;
			}
		}
		return Color.clear;
	}
}
