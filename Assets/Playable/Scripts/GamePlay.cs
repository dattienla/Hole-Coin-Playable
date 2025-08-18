using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.Rendering.UI;
using UnityEngine.Scripting;
public class GamePlay : MonoBehaviour
{
    public static GamePlay Instance;

    public List<Hole> holes = new List<Hole>();

    public List<PigRow> pigRows = new List<PigRow>();

    public List<Pig> pigQs = new List<Pig>();
    public List<Pig> pigQNexts = new List<Pig>();

    private readonly Dictionary<ColorType, int> tempCoins = new();
    private int countCoin = 0;
    private int coinInBag = 0;
    private void Awake()
    {
        Instance = this;
        Application.targetFrameRate = 60;
        QualitySettings.vSyncCount = 0;   // Tắt VSync để Unity tự điều khiển FPS
    }
    private void StartSetTrueCanClickHole(Hole hole)
    {
        if (hole.canClick) return;
        StartCoroutine(SetTrueCanClickHole(hole));
    }

    private IEnumerator SetTrueCanClickHole(Hole hole)
    {
        yield return new WaitForSeconds(0.1f);
        hole.canClick = true;
    }

    public void StartHoleMoneyGame(Hole hole)
    {
        StartCoroutine(ProcessHole(hole));
    }
    private IEnumerator ProcessHole(Hole hole)
    {
        coinInBag = 0;
        hole.isHoleActive = false;
        foreach (var tile in GetAllTilesInGrid())
        {
            List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[UnityEngine.Random.Range(0, 3)], hole);
            if (path != null)
            {
                coinInBag++;
                PlayableManager.Instance.hand.SetActive(false);
                holes[0].canClick = true;
                countCoin++;
                hole.canClick = false;
                GameObject obj = tile.childCoin;
                Coin coin = obj.GetComponent<Coin>();
                StartSetTrueCanClickHole(hole);
                MoveAlongTile(coin, path, () => OnCoinMoveComplete(coin, hole));
            }
        }
        DropCoin2(hole);
        yield return new WaitForSeconds(0.001f);
    }
    private void OnCoinMoveComplete(Coin coin, Hole hole)
    {
        coin.JumpToHole(hole.pointToDropCoin, () =>
        {
            if (!hole.isHoleActive)
            {
                hole.isHoleActive = true;
                hole.transform.DOScale(1.8f, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
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
        foreach (var tile in path)
        {
            tile.transform.DOScale(Vector3.one * 0.8f, 0.3f).SetEase(Ease.InBack).OnComplete(() =>
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

            coin.transform.DOMove(movePos, duration)
                .SetEase(Ease.Linear)
                .OnComplete(() =>
                {
                    coin.smokeParticle.SetActive(false);
                    moveDone = true; // báo hiệu coin đã di chuyển xong
                });

            //chờ tween kết thúc trước khi tiếp tục vòng foreach
            yield return new WaitUntil(() => moveDone);

        }

        yield return new WaitForSeconds(UnityEngine.Random.Range(0f, 0f));
        onComplete?.Invoke();
    }
    public List<Tile> GetAllTilesInGrid() // không lấy tile trong hole
    {
        List<Tile> result = new List<Tile>();
        foreach (var row in Grid.instance.rows)
        {
            foreach (Tile tile in row.tiles)
            {
                result.Add(tile);
            }
        }
        foreach (var hole in holes)
        {
            foreach (var tile in hole.tilesInHole)
            {
                if (result.Contains(tile))
                {
                    result.Remove(tile);
                }
            }
        }
        return result;
    }

    IEnumerator DropCoin()
    {
        List<Pig> pigQCopy = new List<Pig>(pigQs);
        foreach (var pigQ in pigQCopy)
        {
            pigQ.coinBag.gameObject.SetActive(true);
            pigQ.dropParticle.SetActive(true);
            pigQ.ActivateCoinEyes();
            pigQ.OnFullDelay();
            int cnt = 32;
            while (cnt >= 0)
            {
                float delay = cnt * 0.05f;
                pigQ.DropDelay(delay, pigQ.colorType);
                cnt--;
            }
            pigQs.Remove(pigQ);
            yield return new WaitForSeconds(0.5f);
        }
        List<Pig> pigQNextCopy = new List<Pig>(pigQNexts);
        foreach (var pigQNext in pigQNextCopy)
        {
            Vector3 pos = pigQNext.transform.localPosition + new Vector3(0, 0, 7);
            StartCoroutine(Move(pigQNext, pos));
            pigQNexts.Remove(pigQNext);
        }
        if (countCoin == GetAllTilesInGrid().Count)
        {
            PlayableManager.Instance.WinGame();
            countCoin = 0;
        }
    }
    IEnumerator Move(Pig pig, Vector3 pos)
    {
        yield return new WaitForSeconds(1.5f);
        if (pig != null) { pig.transform.DOLocalMove(pos, 0.8f).SetEase(Ease.OutBack); }
    }
    public void DropCoin2(Hole hole)
    {
        int k = 0;
        while (coinInBag > 0 && k < 5)
        {
            for (int i = 0; i < pigRows.Count; i++)
            {
                PigRow pigRow = pigRows[i];
                if (pigRow.pigs.Count == 0)
                {
                    continue;
                }
                Pig pig = pigRow.pigs[0];
                if (pig.colorType == hole.colorType)
                {
                    coinInBag -= 32;
                    pigRow.RemovePig(pig);
                    break;
                }
            }
            k++;
        }

    }
}


