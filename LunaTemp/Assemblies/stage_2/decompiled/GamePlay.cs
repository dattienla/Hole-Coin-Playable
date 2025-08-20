using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class GamePlay : MonoBehaviour
{
	public static GamePlay Instance;

	public List<Hole> holes = new List<Hole>();

	public List<PigRow> pigRows = new List<PigRow>();

	public List<Pig> pigQs = new List<Pig>();

	public List<Pig> pigQNexts = new List<Pig>();

	private int countCoin = 0;

	private int coinInBag = 0;

	private bool canClickHole0 = false;

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
		yield return new WaitForSeconds(0.1f);
		hole.canClick = true;
	}

	private void StartSetTrueCanClickHole0(Hole hole)
	{
		if (!hole.canClick)
		{
			StartCoroutine(SetTrueCanClickHole0(hole));
		}
	}

	private IEnumerator SetTrueCanClickHole0(Hole hole)
	{
		if (!canClickHole0)
		{
			yield return new WaitForSeconds(1.2f);
			PlayableManager.Instance.hand.SetActive(true);
			PlayableManager.Instance.hand.GetComponent<RectTransform>().anchoredPosition = new Vector2(-33f, (float)(-Screen.height) * 2f);
			CanvasGroup handCG = PlayableManager.Instance.hand.GetComponent<CanvasGroup>();
			handCG.alpha = 0f;
			DOTween.To(() => handCG.alpha, delegate(float x)
			{
				handCG.alpha = x;
			}, 1f, 0.5f).SetEase(Ease.InOutQuad);
			yield return new WaitForSeconds(0.4f);
			RectTransform handRT = PlayableManager.Instance.hand.GetComponent<RectTransform>();
			DOTween.To(() => handRT.anchoredPosition, delegate(Vector2 x)
			{
				handRT.anchoredPosition = x;
			}, new Vector2(-33f, -220f), 0.5f).SetEase(Ease.OutCubic);
			yield return new WaitForSeconds(0.2f);
			hole.canClick = true;
			canClickHole0 = true;
		}
	}

	public void StartHoleMoneyGame(Hole hole)
	{
		StartCoroutine(ProcessHole(hole));
	}

	private IEnumerator ProcessHole(Hole hole)
	{
		coinInBag = 0;
		foreach (Tile tile in GetAllTilesInGrid())
		{
			List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[UnityEngine.Random.Range(0, 3)], hole);
			if (path != null)
			{
				coinInBag++;
				PlayableManager.Instance.hand.SetActive(false);
				StartSetTrueCanClickHole0(holes[0]);
				countCoin++;
				hole.canClick = false;
				GameObject obj = tile.childCoin;
				Coin coin = obj.GetComponent<Coin>();
				StartSetTrueCanClickHole(hole);
				MoveAlongTile(coin, path, delegate
				{
					OnCoinMoveComplete(coin, hole);
				});
			}
		}
		DropCoin2(hole);
		yield return new WaitForSeconds(0.001f);
	}

	private void OnCoinMoveComplete(Coin coin, Hole hole)
	{
		coin.JumpToHole(hole.pointToDropCoin, delegate
		{
			if (!hole.isHoleActive)
			{
				hole.isHoleActive = true;
				AudioManager.Instance.audioSource.PlayOneShot(AudioManager.Instance.coinAndMoneyBagClip);
				hole.transform.DOScale(1.8f, 0.5f).SetEase(Ease.OutBack).OnComplete(delegate
				{
					hole.transform.DOScale(1.5f, 0.5f).SetEase(Ease.OutBack);
				});
				hole.ActivateBlenderShape(900);
				hole.DeactivateBlenderShape(1300);
				StartCoroutine(DropCoin());
			}
		});
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

	private IEnumerator DropCoin()
	{
		List<Pig> pigQCopy = new List<Pig>(pigQs);
		foreach (Pig pigQ in pigQCopy)
		{
			pigQ.coinBag.gameObject.SetActive(true);
			pigQ.dropParticle.SetActive(true);
			pigQ.ActivateCoinEyes();
			pigQ.OnFullDelay();
			for (int cnt = 32; cnt > 0; cnt--)
			{
				float delay = (float)cnt * 0.05f;
				pigQ.DropDelay(delay, pigQ.colorType);
			}
			pigQs.Remove(pigQ);
			yield return new WaitForSeconds(0.5f);
		}
		List<Pig> pigQNextCopy = new List<Pig>(pigQNexts);
		foreach (Pig pigQNext in pigQNextCopy)
		{
			Vector3 pos = pigQNext.transform.localPosition + new Vector3(0f, 0f, 7f);
			StartCoroutine(Move(pigQNext, pos));
			pigQNexts.Remove(pigQNext);
		}
		if (countCoin == GetAllTilesInGrid().Count)
		{
			PlayableManager.Instance.WinGame();
			countCoin = 0;
		}
	}

	private IEnumerator Move(Pig pig, Vector3 pos)
	{
		yield return new WaitForSeconds(1.3f);
		if (pig != null)
		{
			pig.transform.DOLocalMove(pos, 0.5f).SetEase(Ease.OutBack);
		}
	}

	public void DropCoin2(Hole hole)
	{
		int j = 0;
		while (coinInBag > 0 && j < 5)
		{
			for (int i = 0; i < pigRows.Count; i++)
			{
				PigRow pigRow = pigRows[i];
				if (pigRow.pigs.Count != 0)
				{
					Pig pig = pigRow.pigs[0];
					if (pig.colorType == hole.colorType)
					{
						coinInBag -= 32;
						pigRow.RemovePig(pig);
						break;
					}
				}
			}
			j++;
		}
	}
}
