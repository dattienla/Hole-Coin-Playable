using System.Collections.Generic;
using UnityEngine;

public class Grid : MonoBehaviour
{
	public static Grid instance;

	public List<Row> rows = new List<Row>();

	private void Awake()
	{
		instance = this;
		for (int i = 0; i < base.transform.childCount; i++)
		{
			for (int j = 0; j < base.transform.GetChild(i).childCount; j++)
			{
				Tile tile = base.transform.GetChild(i).GetChild(j).GetComponent<Tile>();
				tile.gridPosition = new Vector2Int(i, j);
			}
		}
	}

	private void Start()
	{
	}

	public void Reset()
	{
		rows = new List<Row>(GetComponentsInChildren<Row>(true));
		foreach (Row row in rows)
		{
			row.Reset();
		}
	}

	public void ResetUnIncluded()
	{
		rows = new List<Row>(GetComponentsInChildren<Row>(false));
		foreach (Row row in rows)
		{
			row.ResetUnIncluded();
			for (int x = 0; x < row.tiles.Count; x++)
			{
				if (row.tiles[x] != null)
				{
					row.tiles[x].gridPosition = new Vector2Int(x, rows.IndexOf(row));
				}
			}
		}
	}
}
