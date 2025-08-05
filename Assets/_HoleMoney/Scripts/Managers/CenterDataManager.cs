using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.ScriptableObjects;
using Base.Common;
using Base.SO;
using NaughtyAttributes;
using Newtonsoft.Json;
using Tabtale.TTPlugins;
using UnityEngine;

namespace _HoleMoney.Scripts.Managers
{
    public class CenterDataManager : Singleton<CenterDataManager>
    {
        [Header("Data")]
        public GameData gameData;
        public MapData mapData;

        [Header("Current Level")]
        public LevelData currentLevelData;

        [Header("References So")]
        public MaterialsSo materialsSo;
        public LevelDesigner levelDesigner;
        public PrefabsSo prefabSo;
        public SkinsSo skinSo;
        public MapSo mapSo;

        protected override void Awake()
        {
            TTPCore.Setup();
            Load();
        }

        [Button]
        public void LoadLevel()
        {
            currentLevelData.Clear();
            var mapTextAsset = levelDesigner.mapLevel[gameData.currentLevel];

            var rawData = JsonConvert.DeserializeObject<Dictionary<string, Dictionary<string, string>>>(mapTextAsset.text);

            currentLevelData.coinPositions.Clear();
            currentLevelData.holePositions.Clear();
            foreach (var yEntry in rawData)
            {
                var y = int.Parse(yEntry.Key);
                foreach (var (key, value) in yEntry.Value)
                {
                    var x = int.Parse(key);

                    if (string.IsNullOrEmpty(value)) continue;

                    var parts = value.Split(',');
                    var type = parts.Length > 0 ? parts[0] : string.Empty;
                    var color = parts.Length > 1 ? parts[1] : string.Empty;
                    var typeLock = parts.Length > 2 ? parts[2] : string.Empty;
                    var typeLockValue = parts.Length > 3 ? int.Parse(parts[3]) : 0;
                    switch (type)
                    {
                        case "coin":
                        {
                            var coin = new CoinPosition
                            {
                                xPosition = x,
                                yPosition = y,
                                colorType = color,
                                typeLock = typeLock,
                                typeLockValue = typeLockValue
                            };
                            currentLevelData.coinPositions.Add(coin);
                            break;
                        }
                        case "hole":
                        {
                            var hole = new HolePosition
                            {
                                xPosition = x,
                                yPosition = y,
                                colorType = color,
                                typeLock = typeLock,
                                typeLockValue = typeLockValue
                            };
                            currentLevelData.holePositions.Add(hole);
                            break;
                        }
                        case "box":
                        {
                            var box = new ObstaclePosition
                            {
                                xPosition = x,
                                yPosition = y
                            };
                            currentLevelData.obstaclePositions.Add(box);
                            break;
                        }
                    }
                }
            }
            currentLevelData.yMapSize = rawData.Count > 0 ? rawData.Count : 10;
            currentLevelData.xMapSize = rawData.Count > 0 ? rawData["1"].Count : 10;

            var pigTextAsset = levelDesigner.pigLevel[gameData.currentLevel];
            var pigRows = JsonConvert.DeserializeObject<Dictionary<string, Dictionary<string, string>>>(pigTextAsset.text);
            currentLevelData.pigRows.Clear();
            foreach (var pigRow in pigRows)
            {
                if (pigRow.Value == null || pigRow.Value.Count == 0) continue;
                var pigRowData = new PigRowData();
                foreach (var pig in pigRow.Value)
                {
                    if (pig.Value == "0") continue;
                    if (string.IsNullOrEmpty(pig.Value)) continue;
                    var colorType = (ColorType)System.Enum.Parse(typeof(ColorType), pig.Value);
                    pigRowData.pigType.Add(colorType);
                }
                if (pigRowData.pigType.Count == 0) continue;
                pigRowData.pigType.Reverse();
                currentLevelData.pigRows.Add(pigRowData);
            }
        }

        public void Save()
        {
            SaveManager.SaveData(gameData, "GameData");
        }

        private void Load()
        {
            SaveManager.LoadData(gameData, "GameData");
            var maxLevel = levelDesigner.mapLevel.Count - 1;
            if(gameData.currentLevelText > maxLevel)
            {
                gameData.currentLevel = Random.Range(5, maxLevel);
            }
        }

        [Button]
        public void ResetData()
        {
            gameData.ResetData();
            Save();
        }

    }
}
