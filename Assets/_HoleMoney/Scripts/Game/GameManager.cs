using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using DG.Tweening;
using UnityEngine;
using Random = UnityEngine.Random;

namespace _HoleMoney.Scripts.Game
{
    public class GameManager : Singleton<GameManager>
    {
        private TilePathfinder _tilePathFinder;

        private readonly Dictionary<ColorType, int> tempCoins = new();
        private readonly Dictionary<ColorType, Queue<ColorType>> coinDropQueues = new();
        private readonly Dictionary<ColorType, bool> dropInProgress = new();

        public bool canClickHole = true;

        public void Start()
        {
            Application.targetFrameRate = 60;
            Init();
            UIManager.Instance.uiTop.UpdateLevelText();
        }

        private void Update()
        {
            JumpCoinToPigs();

        }

        private void StartSetTrueCanClickHole()
        {
            if (canClickHole) return;
            canClickHole = true;
            StartCoroutine(SetTrueCanClickHole());
        }

        private IEnumerator SetTrueCanClickHole()
        {
            yield return new WaitForSeconds(0.1f);
            canClickHole = true;
        }

        private void Init()
        {
            AudioManager.Instance.backgroundMusic.Play();
            CenterDataManager.Instance.LoadLevel();
            LevelDesigner.Instance.InitializeGrid();
            LevelDesigner.Instance.InitializeHoles();
            LevelDesigner.Instance.InitCoins();
            LevelDesigner.Instance.InitPigs();
            LevelDesigner.Instance.InitObstacles();
            PigRowManager.Instance.GetAllPigRows();
            _tilePathFinder = new TilePathfinder(LevelDesigner.Instance.grid);

            foreach (ColorType color in Enum.GetValues(typeof(ColorType)))
            {
                if (color == ColorType.None) continue;
                coinDropQueues[color] = new Queue<ColorType>();
                dropInProgress[color] = false;
            }
        }

        public void SetTypeOfAllCoin(ColorType colorType)
        {
            foreach(var row in LevelDesigner.Instance.grid.rows)
            {
                foreach (var tile in row.tiles)
                {
                    if (tile.childCoin != null && tile.childCoin.colorType != ColorType.Rainbow)
                    {
                        tile.childCoin.colorType = colorType;
                    }
                }
            }
        }

        public void SetOriginalTypeOfAllCoin()
        {
            foreach(var row in LevelDesigner.Instance.grid.rows)
            {
                foreach (var tile in row.tiles)
                {
                    if (tile.childCoin != null)
                    {
                        tile.childCoin.SetCoinMaterial();
                    }
                }
            }
        }

        private List<Tile> GetPath(Hole hole, Tile startTile)
        {
            var minDistance = int.MaxValue;
            List<Tile> bestPath = null;

            foreach (var tile in hole.targetTiles)
            {
                var path = _tilePathFinder.FindShortestPath(startTile, tile,hole);
                if (path != null && path.Count < minDistance)
                {
                    minDistance = path.Count;
                    bestPath = path;
                }
            }
            return bestPath;
        }

        public void StartHoleMoneyGame(ColorType colorType, Hole hole)
        {
            if (!canClickHole) return;
            canClickHole = false;
            StartSetTrueCanClickHole();
            StartCoroutine(ProcessHole(colorType, hole));
        }

        private IEnumerator ProcessHole(ColorType colorType, Hole hole)
        {
            var grid = LevelDesigner.Instance.grid;
            var sameColorTiles = LevelDesigner.Instance.TileContainer[colorType];

            List<Dictionary<Tile,List<Tile>>> paths = new List<Dictionary<Tile, List<Tile>>>();
            foreach (var tile in sameColorTiles)
            {
                if (tile.childCoin != null && !tile.isHidden && tile.childCoin.colorType == colorType && (tile.childIceBox == null || (tile.childIceBox != null && tile.childIceBox.lockValue == 0)))
                {
                    var path = GetPath(hole, tile);
                    if (path != null)
                    {
                        path.RemoveAt(path.Count - 1);
                        paths.Add(new Dictionary<Tile, List<Tile>> { { tile, path } });
                    }
                }
            }

            paths = paths
                .OrderBy(dict => dict.Values.FirstOrDefault()?.Count ?? 0).Take(8)
                .ToList();

            var paths2 = new List<Dictionary<Tile, List<Tile>>>();

            foreach (var p in paths)
            {
                var tile1 = p.Keys.First();
                var path1 = p.Values.First();

                var y = tile1.gridPosition.y;
                var x = tile1.gridPosition.x;

                var tile2 = grid.rows[y + 1].tiles[x + 1];
                var path2 = GetPath(hole, tile2);

                var tile3 = grid.rows[y + 1].tiles[x];
                var path3 = GetPath(hole, tile3);

                var tile4 = grid.rows[y].tiles[x + 1];
                var path4 = GetPath(hole, tile4);

                paths2.AddRange(new List<Dictionary<Tile, List<Tile>>>
                {
                    new Dictionary<Tile, List<Tile>> { { tile1, path1 } },
                    new Dictionary<Tile, List<Tile>> { { tile2, path2 } },
                    new Dictionary<Tile, List<Tile>> { { tile3, path3 } },
                    new Dictionary<Tile, List<Tile>> { { tile4, path4 } }
                });
            }
            foreach (var p in paths2)
            {
                var tile = p.Keys.First();
                var path = p.Values.First();
                var coin = tile.childCoin;
                if (coin != null)
                {
                    tile.childCoin = null;
                    tile.isEmpty = true;
                    tile.isEmptyAfterCoinMove = true;
                    tempCoins[coin.GetOriginalColorType()] = tempCoins.TryGetValue(coin.GetOriginalColorType(), out var count) ? count + 1 : 1;

                    MoveAlongTiles(coin, path, () =>
                    {
                        AudioManager.Instance.coinDropAudioSource.PlayDelayed(0.3f);
                        Observer.NotifyObservers(GameEvents.OnDecreaseIceBoxLockValue.ToString(), 1);
                        coin.JumpToHole(hole.pointToDropCoin.transform, () =>
                        {
                            coin.gameObject.SetActive(false);
                            EnqueueDrop(coin.GetOriginalColorType());
                        });
                        if (paths2.IndexOf(p) == paths2.Count - 1)
                        {
                            hole.ActivateBlenderShape(800);
                            hole.transform.DOScale(1.2f, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
                            {
                                hole.transform.DOScale(1f, 0.5f).SetEase(Ease.OutBack);
                            });
                            hole.DeactivateBlenderShape(1000);
                        }
                    });
                }
                yield return new WaitForSeconds(0.001f);
            }
            UnlockHiddenCoins();
        }


        private void EnqueueDrop(ColorType colorType)
        {
            if (!coinDropQueues[colorType].Contains(colorType))
                coinDropQueues[colorType].Enqueue(colorType);

            if (!dropInProgress[colorType])
                StartCoroutine(ProcessDropQueue(colorType));
        }

        private void MoveAlongTiles(Coin coin, IEnumerable<Tile> path, Action onComplete = null)
        {
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
                coin.smokeParticle.SetActive(true);

                yield return coin.transform.DOMove(movePos, Random.Range(0.04f, 0.08f))
                    .SetEase(Ease.Linear)
                    .OnComplete(() => coin.smokeParticle.SetActive(false))
                    .WaitForCompletion();
            }

            yield return new WaitForSeconds(Random.Range(0.1f, 0.2f));
            onComplete?.Invoke();
        }

        private IEnumerator ProcessDropQueue(ColorType colorType)
        {
            if (dropInProgress[colorType]) yield break;
            dropInProgress[colorType] = true;

            while (coinDropQueues[colorType].Count > 0)
            {
                coinDropQueues[colorType].Dequeue();
                yield return StartCoroutine(StartDropCoinToPig(colorType));
            }

            dropInProgress[colorType] = false;
        }

        private IEnumerator StartDropCoinToPig(ColorType type)
        {
            while (tempCoins.TryGetValue(type, out var coins) && coins > 0)
            {
                var pigRows = PigRowManager.Instance.GetAvailablePig(type);

                foreach (var pigRow in pigRows)
                {
                    var pigs = new List<Pig>(pigRow.pigs);
                    foreach (var pig in pigs)
                    {
                        if(tempCoins[type] <= 0) break;

                        if(pig.gameObject.activeSelf == false) continue;
                        if(pigRow.pigs.Contains(pig) == false) continue;
                        if (pig.colorType != type) break;
                        pig.isDropping = true;
                        pig.coinBag.gameObject.SetActive(true);
                        pig.isDropping = true;
                        while (pig.maxCoinCount > 0 && tempCoins[type] > 0)
                        {
                            pig.ActivateCoinEyes();
                            tempCoins[type]--;
                            pig.DropCoinToPig(type);
                            yield return new WaitForSeconds(0.075f);
                        }
                        pig.DeactivateCoinEyes();

                        if (pig.maxCoinCount <= 0)
                        {
                            pig.DropCoinToPig(type);
                        }

                        pig.isDropping = false;
                        pig.coinBag.DeactivateBlenderShape();
                    }
                }

                /*foreach (var pig in pigRows.Where(p => p.maxCoinCount > 0).TakeWhile(p => tempCoins[type] > 0))
                {
                    pig.positionToDropCoin.gameObject.SetActive(true);
                    pig.isDropping = true;

                    while (pig.maxCoinCount > 0 && tempCoins[type] > 0)
                    {
                        tempCoins[type]--;
                        pig.DropCoinToPig(type);
                        yield return new WaitForSeconds(0.075f);
                    }

                    if (pig.maxCoinCount <= 0)
                    {
                        pig.DropCoinToPig(type);
                    }

                    pig.isDropping = false;
                    pig.positionToDropCoin.gameObject.SetActive(false);
                }*/

                if (tempCoins[type] <= 0)
                {
                    break;
                }

                var tempSlots = TempSlotsManager.Instance.GetAvailableTempSlot(type);
                tempSlots = tempSlots
                    .OrderByDescending(s => s.coinCount)
                    .ThenBy(s => s.colorType == type ? 0 : 1)
                    .ToList();
                var isLose = true;
                foreach (var tempSlot in tempSlots.Where(s =>
                             s.coinCount < 32 && (s.colorType == type || s.colorType == ColorType.None))
                             .TakeWhile(s => tempCoins[type] > 0))
                {
                    tempSlot.coinBag.gameObject.SetActive(true);
                    isLose = false;
                    tempSlot.isDropping = true;
                    while (tempSlot.coinCount < 32 && tempCoins[type] > 0)
                    {
                        tempCoins[type]--;
                        tempSlot.DropCoinToSlot(type);
                        yield return new WaitForSeconds(0.075f);
                    }
                    tempSlot.isDropping = false;
                    tempSlot.coinBag.DeactivateBlenderShape();
                }
                if (isLose)
                {
                    UIManager.Instance.uiLose.gameObject.SetActive(true);
                    yield break;
                }

                yield return new WaitForSeconds(0.1f);
            }

            tempCoins.Remove(type);
        }

        private void JumpCoinToPigs()
        {
            foreach (var pigRow in PigRowManager.Instance.pigRows)
            {
                if (pigRow.pigs.Count == 0) continue;

                var pig = pigRow.pigs[0];
                if (pig.isDropping) continue;

                var slots = new List<TempSlot>(TempSlotsManager.Instance.tempSlots);
                slots = slots
                    .OrderBy(s => s.coinCount)
                    .ToList();

                foreach (var tempSlot in slots
                             .Where(s => s.colorType == pig.colorType && s.coinCount > 0 && s.coinCount % 4 == 0))
                {
                    var coinsToJump = tempSlot.GetCoins(pig.maxCoinCount, pig.colorType);
                    if (coinsToJump.Count > 0)
                        JumpCoinToPig(pig,coinsToJump);
                }
            }
        }

        public void CheckWin()
        {
            foreach (var pigRow in PigRowManager.Instance.pigRows)
            {
                if (pigRow.pigs.Count > 0) return;
            }


            UIManager.Instance.uiWin.gameObject.SetActive(true);
        }

        private void JumpCoinToPig(Pig pig,List<Coin> coins)
        {
            pig.maxCoinCount -= coins.Count;
            StartCoroutine(JumpCoinsSequentially(pig,coins));
        }

        private IEnumerator JumpCoinsSequentially(Pig pig,List<Coin> coins)
        {
            pig.isDropping = true;
            var pointToDrop = pig.positionToDropCoin.position - Vector3.up * 2 + Random.insideUnitSphere * 0.5f;
            foreach (var coin in coins)
            {
                coin.ResetCoin();
                coin.transform.DOMove(pointToDrop, 0.5f).SetDelay(0.1f).OnComplete(() =>
                {
                    coin.audioSource.Play();
                    coin.transform.DOMove(pig.endPoint.position, 0.2f)
                        .SetEase(Ease.InQuad)
                        .OnComplete(() =>
                        {
                            coin.transform.SetParent(null);
                            Destroy(coin.gameObject);
                            pig.UpdateCoinText();
                            pig.dropParticle.SetActive(true);
                        });
                });
                yield return new WaitForSeconds(0.01f);
            }
            if (pig.maxCoinCount <= 0)
            {
                /*var pigRow = pig.GetComponentInParent<PigRow>();
                if (pigRow != null)
                {
                    pigRow.pigs.Remove(pig);
                }*/
                yield return new WaitForSeconds(0.8f);
                pig.OnFull();
            }
            else
            {
                yield return new WaitForSeconds(1f);
            }
            pig.isDropping = false;
        }

        private void UnlockHiddenCoins()
        {
            var grid = LevelDesigner.Instance.grid;
            for (int i = 0; i < grid.rows.Count; i += 2)
            {
                for (int j = 0; j < grid.rows[i].tiles.Count; j+=2)
                {
                    if(!grid.rows[i].tiles[j].isHidden) continue;
                    if(grid.rows[i].tiles[j].childCoin == null) continue;
                    var top = new Vector2Int(i - 1, j);
                    var bottom = new Vector2Int(i + 2, j);
                    var left = new Vector2Int(i, j - 1);
                    var right = new Vector2Int(i, j + 2);
                    if ((CheckValidPosition(top) || CheckValidPosition(bottom) || CheckValidPosition(left) ||
                         CheckValidPosition(right)))
                    {
                        grid.rows[i].tiles[j].isHidden = false;
                        grid.rows[i].tiles[j].childCoin.SetHidden(false);
                        grid.rows[i+1].tiles[j].isHidden = false;
                        grid.rows[i+1].tiles[j].childCoin.SetHidden(false);
                        grid.rows[i].tiles[j + 1].isHidden = false;
                        grid.rows[i].tiles[j + 1].childCoin.SetHidden(false);
                        grid.rows[i + 1].tiles[j + 1].isHidden = false;
                        grid.rows[i + 1].tiles[j + 1].childCoin.SetHidden(false);
                    }
                }
            }
        }

        private bool CheckValidPosition(Vector2Int position)
        {
            if (position.x < 0 || position.y < 0) return false;
            if (position.x >= LevelDesigner.Instance.grid.rows.Count) return false;
            if (position.y >= LevelDesigner.Instance.grid.rows[0].tiles.Count) return false;
            return LevelDesigner.Instance.grid.rows[position.x].tiles[position.y].isEmptyAfterCoinMove;
        }

        public List<Tile> GetPoolSameColor(Tile startTile)
        {
            var result = new List<Tile>();
            var visited = new HashSet<Tile>();
            var queue = new Queue<Tile>();

            var targetColor = startTile.childCoin?.colorType ?? ColorType.None;

            queue.Enqueue(startTile);
            visited.Add(startTile);

            while (queue.Count > 0)
            {
                var currentTile = queue.Dequeue();
                var coin = currentTile.childCoin;

                if (coin != null && coin.colorType == targetColor)
                {
                    result.Add(currentTile);

                    foreach (var neighbor in currentTile.GetNeighbors())
                    {
                        if (!visited.Contains(neighbor))
                        {
                            var neighborCoin = neighbor.childCoin;
                            if (neighborCoin != null && neighborCoin.colorType == targetColor)
                            {
                                visited.Add(neighbor);
                                queue.Enqueue(neighbor);
                            }
                        }
                    }
                }
            }

            return result;
        }

    }
}
