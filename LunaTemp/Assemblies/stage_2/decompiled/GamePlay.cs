using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GamePlay : MonoBehaviour
{
	public static GamePlay Instance;

	public List<Hole> holes = new List<Hole>();

	public List<Pig> pigs = new List<Pig>();

	private readonly Dictionary<ColorType, int> tempCoins = new Dictionary<ColorType, int>();

	private int countCoin = 0;

	private void Awake()
	{
		Instance = this;
		Application.targetFrameRate = 60;
		QualitySettings.vSyncCount = 0;
	}

	private void StartSetTrueCanClickHole(Hole hole)
	{
		if (!hole.canClick)
		{
			StartCoroutine(SetTrueCanClickHole(hole));
		}
	}

	private IEnumerator SetTrueCanClickHole(Hole hole)
	{
		yield return new WaitForSeconds(2f);
		hole.canClick = true;
	}

	public void StartHoleMoneyGame(Hole hole)
	{
		StartCoroutine(ProcessHole(hole));
	}

	private IEnumerator ProcessHole(Hole hole)
	{
		bool isHoleActive = true;
		foreach (Tile tile in GetAllTilesInGrid())
		{
			List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[UnityEngine.Random.Range(0, 7)], hole);
			if (path != null)
			{
				countCoin++;
				hole.canClick = false;
				GameObject obj = tile.childCoin;
				Coin coin = obj.GetComponent<Coin>();
				MoveAlongTile(coin, path, delegate
				{
					OnCoinMoveComplete(coin, hole, ref isHoleActive);
				});
			}
		}
		yield return new WaitForSeconds(0.001f);
	}

	private void OnCoinMoveComplete(Coin coin, Hole hole, ref bool isHoleActive)
	{
		coin.JumpToHole(hole.pointToDropCoin, delegate
		{
			StartSetTrueCanClickHole(hole);
		});
		if (isHoleActive)
		{
			hole.ActivateBlenderShape(800);
			hole.transform.DOScale(2.4f, 0.5f).SetEase(Ease.OutBack).OnComplete(delegate
			{
				hole.transform.DOScale(2f, 0.5f).SetEase(Ease.OutBack);
			});
			hole.DeactivateBlenderShape(1000);
			DropCoin(hole, coin.colorType);
		}
		isHoleActive = false;
	}

	public void MoveAlongTile(Coin coin, List<Tile> path, Action onComplete = null)
	{
		StartCoroutine(MoveStepBySteps(coin, path, onComplete));
	}

	public IEnumerator MoveStepBySteps(Coin coin, List<Tile> path, Action onComplete = null)
	{
		foreach (Tile tile in path)
		{
			tile.transform.DOScale(Vector3.one * 0.8f, 0.3f).SetEase(Ease.InBack).OnComplete(delegate
			{
				tile.transform.DOScale(Vector3.one, 0.4f).SetEase(Ease.OutBack);
			});
			Vector3 target = tile.transform.position;
			Vector3 movePos = new Vector3(target.x, coin.transform.position.y, target.z);
			tile.isEmptyAfterCoinMove = true;
			coin.smokeParticle.SetActive(true);
			coin.smokeParticle.SetActive(true);
			float duration = UnityEngine.Random.Range(0.04f, 0.08f);
			bool moveDone = false;
			coin.transform.DOMove(movePos, duration).SetEase(Ease.Linear).OnComplete(delegate
			{
				coin.smokeParticle.SetActive(false);
				moveDone = true;
			});
			yield return new WaitUntil(() => moveDone);
		}
		yield return new WaitForSeconds(UnityEngine.Random.Range(0f, 0f));
		onComplete?.Invoke();
	}

	public List<Tile> GetAllTilesInGrid()
	{
		List<Tile> result = new List<Tile>();
		foreach (Row row in Grid.instance.rows)
		{
			foreach (Tile tile2 in row.tiles)
			{
				result.Add(tile2);
			}
		}
		foreach (Hole hole in holes)
		{
			foreach (Tile tile in hole.tilesInHole)
			{
				if (result.Contains(tile))
				{
					result.Remove(tile);
				}
			}
		}
		return result;
	}

	public void DropCoin(Hole hole, ColorType col)
	{
		Pig pig = null;
		foreach (Pig p in pigs)
		{
			if (p.colorType == hole.colorType)
			{
				pig = p;
			}
		}
		pig.coinBag.gameObject.SetActive(true);
		pig.dropParticle.SetActive(true);
		pig.ActivateCoinEyes();
		for (int i = 32; i >= 0; i--)
		{
			float delay = (float)i * 0.05f;
			pig.DropDelay(delay, col);
		}
		if (countCoin == GetAllTilesInGrid().Count)
		{
			PlayableManager.Instance.WinGame();
			countCoin = 0;
		}
		pig.OnFullDelay();
	}
}
