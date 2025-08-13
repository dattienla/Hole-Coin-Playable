using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Unity.VisualScripting;
using UnityEngine;

public class GamePlay : MonoBehaviour
{
    public static GamePlay Instance;

    public List<Hole> holes = new List<Hole>();

    public List<Pig> pigs = new List<Pig>();

    private readonly Dictionary<ColorType, int> tempCoins = new();
    private void Awake()
    {
        DOTween.Init();
        Application.targetFrameRate = 60;
        QualitySettings.vSyncCount = 0;   // Tắt VSync để Unity tự điều khiển FPS
        Instance = this;
    }
    private void Update()
    {
    }
    private void StartSetTrueCanClickHole(Hole hole)
    {
        if (hole.canClick) return;
        StartCoroutine(SetTrueCanClickHole(hole));
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
        foreach (var tile in GetAllTilesInGrid())
        {
            List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[UnityEngine.Random.Range(0, 7)], hole);
            if (path != null)
            {
                hole.canClick = false;
                GameObject obj = tile.childCoin;
                Coin coin = obj.GetComponent<Coin>();
                Debug.Log("11đsấdsa");
                MoveAlongTiles(coin, path, () =>
                {
                    Debug.Log("2");
                    coin.JumpToHole(hole.pointToDropCoin, () =>
                    {
                        StartSetTrueCanClickHole(hole);
                    });
                    if (isHoleActive)
                    {
                        hole.ActivateBlenderShape(800);
                        hole.transform.DOScale(2.4f, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
                        {
                            hole.transform.DOScale(2f, 0.5f).SetEase(Ease.OutBack);
                        });
                        hole.DeactivateBlenderShape(1000);

                        DropCoins(hole, coin.colorType);
                    }
                    isHoleActive = false;
                });
            }
        }
        yield return new WaitForSeconds(0.001f);
    }
    public void MoveAlongTiles(Coin coin, IEnumerable<Tile> path, Action onComplete = null)
    {
        Debug.Log("111111");
        StartCoroutine(MoveStepByStep(coin, path, onComplete));
    }

    private IEnumerator MoveStepByStep(Coin coin, IEnumerable<Tile> path, Action onComplete = null)
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

            // chờ tween kết thúc trước khi tiếp tục vòng foreach
            yield return new WaitUntil(() => moveDone);

        }

        yield return new WaitForSeconds(UnityEngine.Random.Range(0.1f, 0.2f));
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

    public void DropCoins(Hole hole, ColorType col)
    {
        Pig pig = null;
        foreach (var p in pigs)
        {
            if (p.colorType == hole.colorType)
            {
                pig = p;
            }
        }
        pig.coinBag.gameObject.SetActive(true);
        pig.dropParticle.SetActive(true);
        pig.ActivateCoinEyes();
        int i = 32;
        while (i >= 0)
        {
            float delay = i * 0.05f;
            pig.DropDelay(delay, col);
            i--;
        }
        pig.OnFullDelay();
    }

}
