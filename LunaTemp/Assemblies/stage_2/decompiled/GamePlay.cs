using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GamePlay : MonoBehaviour
{
	public Tile startTile;

	public Tile targetTile;

	public static GamePlay Instance;

	private void Awake()
	{
		Instance = this;
	}

	private void Start()
	{
		List<Tile> path = TilePathfinder.Instance.FindShortestPath(startTile, targetTile);
		GameObject[] allObjects = UnityEngine.Object.FindObjectsOfType<GameObject>();
		List<GameObject> coins = new List<GameObject>();
		GameObject[] array = allObjects;
		foreach (GameObject obj in array)
		{
			if (obj.name == "coin 1")
			{
				coins.Add(obj);
			}
		}
		foreach (GameObject coin in coins)
		{
			coin.AddComponent<Coin>();
		}
	}

	public void MoveCoin()
	{
	}

	public void MoveAlongTiles(Coin coin, IEnumerable<Tile> path, Action onComplete = null)
	{
		StartCoroutine(MoveStepByStep(coin, path));
	}

	private IEnumerator MoveStepByStep(Coin coin, IEnumerable<Tile> path)
	{
		foreach (Tile tile in path)
		{
			tile.transform.DOScale(Vector3.one * 0.8f, 0.3f).SetEase(Ease.InBack).OnComplete(delegate
			{
				tile.transform.DOScale(Vector3.one, 0.4f).SetEase(Ease.OutBack);
			});
			Vector3 target = tile.transform.position;
			Vector3 movePos = new Vector3(target.x, coin.transform.position.y, target.z);
			coin.smokeParticle.SetActive(true);
			yield return coin.transform.DOMove(movePos, UnityEngine.Random.Range(0.04f, 0.08f)).SetEase(Ease.Linear).OnComplete(delegate
			{
				coin.smokeParticle.SetActive(false);
			})
				.WaitForCompletion();
		}
		yield return new WaitForSeconds(UnityEngine.Random.Range(0.1f, 0.2f));
	}
}
