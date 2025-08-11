using System.Collections.Generic;
using UnityEngine;

public class CoinManager : MonoBehaviour
{
	private void Start()
	{
		Debug.Log(GetAllTilesInGrid().Count);
	}

	private List<Tile> GetAllTilesInGrid()
	{
		List<Tile> result = new List<Tile>();
		foreach (Row row in Grid.instance.rows)
		{
			foreach (Tile tile in row.tiles)
			{
				result.Add(tile);
			}
		}
		return result;
	}
}
