using System;
using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using NaughtyAttributes;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class LevelDesigner : Singleton<LevelDesigner>
    {
        public Grid grid;

        public readonly Dictionary<ColorType, List<Tile>> TileContainer = new Dictionary<ColorType, List<Tile>>();

        [Header("Grid Settings")]
        [Range(0, 20)] public int columnSize = 5;
        [Range(0, 32)] public int rowSize = 5;
        [Button]
        public void InitializeGrid()
        {
            grid.Reset();
            columnSize = CenterDataManager.Instance.currentLevelData.xMapSize;
            rowSize = CenterDataManager.Instance.currentLevelData.yMapSize;
            ResizeCamera.Instance.Resize(rowSize);
            for (var i = 0; i < grid.rows.Count; i++)
            {
                if (i < rowSize)
                {
                    grid.rows[i].gameObject.SetActive(true);
                    for (var j = 0; j < grid.rows[i].tiles.Count; j++)
                    {
                        var a = (grid.rows[i].tiles.Count - columnSize) / 2;
                        if (j < a || j >= grid.rows[i].tiles.Count - a)
                        {
                            grid.rows[i].tiles[j].gameObject.SetActive(false);
                        }
                        else
                        {
                            grid.rows[i].tiles[j].gameObject.SetActive(true);
                        }
                    }
                }
                else
                {
                    grid.rows[i].gameObject.SetActive(false);
                }
            }
            grid.ResetUnIncluded();
        }

        [Button]
        public void InitializeHoles()
        {
            foreach (var t in grid.rows)
            {
                for (var j = 0; j < grid.rows[0].tiles.Count; j++)
                {
                    var tile = t.tiles[j];
                    tile.SetNormalMaterial();
                }
            }
            var tiles = new List<Tile>();
            var tiles2 = new List<Tile>();
            foreach (var holePosition in CenterDataManager.Instance.currentLevelData.holePositions)
            {
                var x = holePosition.xPosition - 1;
                var y = holePosition.yPosition - 1;
                tiles.Clear();

                for (var i = 0; i < grid.rows.Count; i++)
                {
                    for (var j = 0; j < grid.rows[0].tiles.Count; j++)
                    {
                        if (j >= x && j < x + 4 && i >= y && i < y + 4)
                        {
                            var tile = grid.rows[i].tiles[j];

                            if (j == x || j == x + 3 || i == y || i == y + 3)
                            {
                                tiles.Add(tile);
                                tile.isEmpty = false;
                            }
                            if (j > x && j < x + 3 && i > y && i < y + 3)
                            {
                                tiles2.Add(tile);
                            }
                            tile.SetHoleMaterial();
                        }
                    }
                }
                var position1 = grid.rows[y].tiles[x];
                var position2 = grid.rows[y + 3].tiles[x + 3];

                var midle = (position1.transform.position + position2.transform.position) / 2;
                var hole = Instantiate(CenterDataManager.Instance.prefabSo.holePrefab, midle, Quaternion.identity);
                var holeComponent = hole.GetComponent<Hole>();
                var colorType = (ColorType)Enum.Parse(typeof(ColorType), holePosition.colorType);
                holeComponent.SetHoleMaterial(colorType);
                holeComponent.lockTiles.AddRange(tiles);
                holeComponent.targetTiles.AddRange(tiles2);

                if (TutorialManager.Instance.IsTutorialActive)
                {
                    TutorialManager.Instance.holes.Add(holeComponent);
                }
            }

            if (TutorialManager.Instance.IsTutorialActive)
            {
                TutorialManager.Instance.StartTutorial();
            }
        }

        [Button]
        public void InitCoins()
        {
            TileContainer.Add(ColorType.Rainbow, new List<Tile>());

            foreach (var coinPosition in CenterDataManager.Instance.currentLevelData.coinPositions)
            {
                var x = coinPosition.xPosition - 1;
                var y = coinPosition.yPosition - 1;
                var position1 = grid.rows[y].tiles[x];
                var coin = Instantiate(CenterDataManager.Instance.prefabSo.coinPrefab, position1.transform.position, Quaternion.identity, position1.transform);
                coin.transform.localPosition = new Vector3(0, -0.1f, 0.5f);
                coin.transform.localRotation = Quaternion.Euler(60, 0, 0);
                var colorType = (ColorType)Enum.Parse(typeof(ColorType), coinPosition.colorType);
                var coinComponent = coin.GetComponent<Coin>();
                coinComponent.animator.transform.localRotation = Quaternion.Euler(0, -20, 0);
                coinComponent.SetCoinMaterial(colorType);
                coinComponent.SetOriginalColorType(colorType);
                grid.rows[y].tiles[x].childCoin = coinComponent;
                if (!TileContainer.ContainsKey(colorType))
                {
                    TileContainer[colorType] = new List<Tile>();
                }


                if (x % 2 == 0 && y % 2 == 0)
                {
                    TileContainer[colorType].Add(grid.rows[y].tiles[x]);
                    TileContainer[ColorType.Rainbow].Add(grid.rows[y].tiles[x]);
                }
                grid.rows[y].tiles[x].isEmpty = false;

                if (coinPosition.typeLock == "Frozen")
                {
                    var position2 = grid.rows[y + 1].tiles[x + 1];
                    var midle = (position1.transform.position + position2.transform.position) / 2;
                    var iceBox = Instantiate(CenterDataManager.Instance.prefabSo.iceBoxPrefab, midle, Quaternion.identity, position1.transform);
                    var iceBoxComponent = iceBox.GetComponent<IceBox>();
                    grid.rows[y].tiles[x].childIceBox = iceBoxComponent;
                    grid.rows[y + 1].tiles[x + 1].childIceBox = iceBoxComponent;
                    grid.rows[y].tiles[x + 1].childIceBox = iceBoxComponent;
                    grid.rows[y + 1].tiles[x].childIceBox = iceBoxComponent;
                    iceBoxComponent.SetMaxLockValue(coinPosition.typeLockValue);
                }
                if (coinPosition.typeLock == "Hidden")
                {
                    grid.rows[y].tiles[x].isHidden = true;
                    coinComponent.SetHidden(true);
                }
            }

        }

        [Button]
        public void InitPigs()
        {
            var index = 0;
            PigRowManager.Instance.layoutGroup.visibleCount = CenterDataManager.Instance.currentLevelData.pigRows.Count;
            foreach (var pigRowData in CenterDataManager.Instance.currentLevelData.pigRows)
            {
                foreach (var colorType in pigRowData.pigType)
                {
                    var pig = Instantiate(CenterDataManager.Instance.prefabSo.pigPrefab, PigRowManager.Instance.pigRows[index].transform);
                    pig.transform.localRotation = Quaternion.Euler(0, 0, 180);
                    var pigComponent = pig.GetComponent<Pig>();
                    pigComponent.SetPigMaterial(colorType);
                }
                PigRowManager.Instance.pigRows[index].layoutGroup.visibleCount = pigRowData.pigType.Count;
                index++;
            }
        }

        [Button]
        public void InitObstacles()
        {
            foreach (var obstaclePosition in CenterDataManager.Instance.currentLevelData.obstaclePositions)
            {
                var x = obstaclePosition.xPosition - 1;
                var y = obstaclePosition.yPosition - 1;
                var position1 = grid.rows[y].tiles[x];
                var position2 = grid.rows[y + 1].tiles[x + 1];
                var midle = (position1.transform.position + position2.transform.position) / 2;
                var box = Instantiate(CenterDataManager.Instance.prefabSo.boxPrefab, midle, Quaternion.identity,
                    position1.transform);
                box.transform.localRotation = Quaternion.Euler(0, 0, 0);

                grid.rows[y].tiles[x].isEmpty = false;
                grid.rows[y + 1].tiles[x + 1].isEmpty = false;
                grid.rows[y].tiles[x + 1].isEmpty = false;
                grid.rows[y + 1].tiles[x].isEmpty = false;
            }
        }

        public bool IsInsideGrid(Vector2Int pos)
        {
            return pos.x >= 0 && pos.y >= 0 &&
       pos.x < grid.rows[0].tiles.Count &&
       pos.y < grid.rows.Count;
        }
    }
}
