using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class Hole : MonoBehaviour
{
	public Color colorType;

	public List<Tile> targetTiles = new List<Tile>();

	private void Start()
	{
		colorType = GetColorHole();
	}

	private void Update()
	{
		if (!Input.GetMouseButtonDown(0))
		{
			return;
		}
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, out var hit) && hit.collider.transform == base.transform)
		{
			base.transform.DOScale(2.3f, 0.1f).OnComplete(delegate
			{
				base.transform.DOScale(2.5f, 0.05f);
			});
			MoveCoin();
		}
	}

	public Color GetColorHole()
	{
		Transform hole = base.transform.Find("coinColor");
		if (hole != null)
		{
			Renderer r = hole.GetComponent<Renderer>();
			if (r != null)
			{
				return r.material.color;
			}
		}
		return Color.clear;
	}

	public void MoveCoin()
	{
		foreach (Tile startTile in GetAllTilesInGrid())
		{
			List<Tile> path = TilePathfinder.Instance.FindShortestPath(startTile, targetTiles[0]);
			Coin coin = startTile.childCoin;
			if (path != null)
			{
				GamePlay.Instance.MoveAlongTiles(coin, path);
			}
		}
		List<Tile> GetAllTilesInGrid()
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
}
