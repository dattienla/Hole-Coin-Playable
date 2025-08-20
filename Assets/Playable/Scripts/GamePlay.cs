using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.Rendering.UI;
using UnityEngine.Scripting;
using UnityEngine.XR;

public class GamePlay : MonoBehaviour
{
    public static GamePlay Instance;
    public List<Hole> holes = new List<Hole>();
    public List<PigRow> pigRows = new List<PigRow>();
    public List<Pig> pigQs = new List<Pig>();
    //public List<Pig> pigQNexts = new List<Pig>();
    private int countCoin = 0;
    private Dictionary<ColorType, int> coinInBag = new Dictionary<ColorType, int>();
    private void Awake()
    {
        Instance = this;
        coinInBag = Enum.GetValues(typeof(ColorType))
               .Cast<ColorType>()
               .ToDictionary(c => c, c => 0);
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
    private void StartSetTrueCanClickHole0(Hole hole)
    {
        if (hole.canClick) return;
        StartCoroutine(SetTrueCanClickHole0(hole));
    }
    bool canClickHole0 = false;
    private IEnumerator SetTrueCanClickHole0(Hole hole)
    {
        if (canClickHole0) yield break;
        yield return new WaitForSeconds(1.2f);
        PlayableManager.Instance.hand.SetActive(true);
        PlayableManager.Instance.hand.GetComponent<RectTransform>().anchoredPosition = new Vector2(-33, -Screen.height * 2f);
        CanvasGroup handCG = PlayableManager.Instance.hand.GetComponent<CanvasGroup>();
        handCG.alpha = 0f;

        DOTween.To(() => handCG.alpha, x => handCG.alpha = x, 1f, 0.5f)
               .SetEase(Ease.InOutQuad);
        yield return new WaitForSeconds(0.4f);
        RectTransform handRT = PlayableManager.Instance.hand.GetComponent<RectTransform>();

        DOTween.To(() => handRT.anchoredPosition, x => handRT.anchoredPosition = x, new Vector2(-33, -220), 0.5f)
               .SetEase(Ease.OutCubic);
        yield return new WaitForSeconds(0.2f);
        hole.canClick = true;
        canClickHole0 = true;
    }

    public void StartHoleMoneyGame(Hole hole)
    {
        StartCoroutine(ProcessHole(hole));
    }

    private IEnumerator ProcessHole(Hole hole)
    {
        List<List<Tile>> allPath = new List<List<Tile>>();
        foreach (var tile in GetAllTiles2x2InGrid())
        {
            List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[3], hole);
            if (path != null)
            {
                allPath.Add(path);
            }
        }
        List<List<Tile>> result = new List<List<Tile>>();
        if (allPath.Count > 8)
        {
            result = allPath
                 .OrderBy(list => list.Count)   // sắp xếp theo số lượng Tile (ít → nhiều)
                 .Take(8)                      // lấy 8 list đầu tiên
                 .ToList();
        }
        else result = allPath;
        HashSet<Tile> tileTrue = new HashSet<Tile>();
        foreach (var r in result)
        {
            Tile tile = r[0];
            foreach (var t in Grid.instance.Get4Tile(tile))
            {
                tileTrue.Add(t);
            }

        }
        hole.isHoleActive = false;
        foreach (var tile in tileTrue)
        {
            List<Tile> path = TilePathfinder.Instance.FindShortestPath(tile, hole.targetTiles[UnityEngine.Random.Range(2, 3)], hole);
            if (path != null)
            {
                coinInBag[hole.colorType]++;
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
        yield return new WaitForSeconds(0.001f);
    }
    private void OnCoinMoveComplete(Coin coin, Hole hole)
    {
        coin.JumpToHole(hole.pointToDropCoin, () =>
        {
            if (!hole.isHoleActive)
            {
                hole.isHoleActive = true;
                AudioManager.Instance.audioSource.PlayOneShot(AudioManager.Instance.coinAndMoneyBagClip);
                hole.transform.DOScale(1.8f, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
                {
                    hole.transform.DOScale(1.5f, 0.5f).SetEase(Ease.OutBack);
                });
                hole.ActivateBlenderShape(900);
                hole.DeactivateBlenderShape(1300);
                //  StartCoroutine(DropCoin(hole));
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
    public List<Tile> GetAllTiles2x2InGrid() // không lấy tile trong hole
    {
        List<Tile> result = new List<Tile>();

        foreach (Tile tile in Grid.instance.GetTile2x2())
        {
            result.Add(tile);
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

    IEnumerator DropCoin(Hole hole)
    {
        CheckPigSameColor(hole);
        List<Pig> pigQCopy = new List<Pig>(pigQs);
        foreach (var pigQ in pigQCopy)
        {
            if (pigQ == null) continue;
            pigQ.coinBag.gameObject.SetActive(true);
            pigQ.dropParticle.SetActive(true);
            pigQ.ActivateCoinEyes();
            pigQ.OnFullDelay();
            int cnt = 0;
            while (cnt < 32)
            {
                {
                    float delay = cnt * 0.05f;
                    pigQ.DropDelay(delay, pigQ.colorType);
                    cnt++;
                }
            }
            yield return new WaitForSeconds(0.5f);
            if (countCoin == GetAllTilesInGrid().Count)
            {
                PlayableManager.Instance.WinGame();
                countCoin = 0;
            }
        }
    }
    public IEnumerator Move(Pig pig, Vector3 pos)
    {
        yield return new WaitForSeconds(1.8f);
        if (pig != null) { pig.transform.DOLocalMove(pos, 0.8f).SetEase(Ease.OutBack); }
    }
    public void CheckPigSameColor(Hole hole)
    {
        int k = 0;
        while (coinInBag[hole.colorType] > 0 && k < 5)
        {
            for (int i = 0; i < pigRows.Count; i++)
            {
                PigRow pigRow = pigRows[i];
                if (pigRow.pigs.Count == 0)
                {
                    continue;
                }

                Pig pig = null;
                foreach (var p in pigRow.pigs)
                {
                    if (!pigQs.Contains(p))
                    {
                        pig = p;
                        break;
                    }
                }
                if (pig.colorType == hole.colorType)
                {
                    coinInBag[hole.colorType] -= 16;
                    if (!pigQs.Contains(pig))
                        pigQs.Add(pig);
                }
            }
            k++;
        }

    }
}