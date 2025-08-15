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

    public List<PigRow> rowPig = new List<PigRow>();

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
                MoveAlongTile(coin, path, () => OnCoinMoveComplete(coin, hole));
            }
        }
        Debug.Log($"Coin in bag: {coinInBag}");
        yield return new WaitForSeconds(0.001f);
    }
    private void OnCoinMoveComplete(Coin coin, Hole hole)
    {
        coin.JumpToHole(hole.pointToDropCoin, () =>
        {
            StartSetTrueCanClickHole(hole);
            if (!hole.isHoleActive)
            {
                hole.isHoleActive = true;
                hole.transform.DOScale(1.8f, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
                {
                    hole.transform.DOScale(1.5f, 0.5f).SetEase(Ease.OutBack);
                });
                hole.ActivateBlenderShape(900);
                hole.DeactivateBlenderShape(1300);
                DropCoin(hole, coin.colorType);
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

    public void DropCoin(Hole hole, ColorType col)
    {
        PigRow pigRow = null;
        PigRow pigRowNext = null;
        Pig pig = null;
        for (int i = 0; i < rowPig.Count; i++)
        {
            if (rowPig[i].pigs.Count > 0)
            {
                pigRow = rowPig[i];
                if (i < rowPig.Count - 1)
                {
                    pigRowNext = rowPig[i + 1];
                }
                break;
            }
        }
        if (pigRow == null) return;
        int[] index = new int[pigRow.pigs.Count];
        Vector3 pigPos = Vector3.zero;
        foreach (var p in pigRow.pigs)
        {
            if (p.colorType == hole.colorType)
            {
                pig = p;
                pigPos = p.gameObject.transform.position;
                break;
            }
        }
        pig.coinBag.gameObject.SetActive(true);
        pig.dropParticle.SetActive(true);
        pig.ActivateCoinEyes();
        int cnt = 32;
        while (cnt >= 0)
        {
            float delay = cnt * 0.05f;
            pig.DropDelay(delay, col);
            cnt--;
        }
        //pig.transform.SetParent(null);
        //Transform child = pigRowNext.transform.GetChild(index);
        //child.SetParent(pigRow.transform);
        //child.SetSiblingIndex(index);
        pig.OnFullDelay();
        index[0] = pigRow.pigs.IndexOf(pig);
        pigRow.pigs[index[0]] = pigRowNext.pigs[index[0]];
        StartCoroutine(MovePig(pigRowNext, index, pigPos));
        if (countCoin == GetAllTilesInGrid().Count)
        {
            PlayableManager.Instance.WinGame();
            countCoin = 0;
        }
    }
    IEnumerator MovePig(PigRow pigRowNext, int[] index, Vector3 pigPos)
    {
        yield return new WaitForSeconds(2f);
        if (pigRowNext.pigs[index[0]] != null)
            pigRowNext.pigs[index[0]].transform.DOMove(pigPos, 0.5f).SetEase(Ease.OutBack);
    }
}


