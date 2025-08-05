using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.Internal;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class TempSlotsManager : Singleton<TempSlotsManager>
    {
        public ActiveOnly3DLayoutGroup layoutGroup;
        public List<TempSlot> tempSlots = new List<TempSlot>();

        private void Start()
        {
            var numberOfSlots = CenterDataManager.Instance.levelDesigner
                .rewardPerLevel[CenterDataManager.Instance.gameData.currentLevel].numberOfSLots;
            layoutGroup.visibleCount = numberOfSlots;
        }

        public IEnumerable<TempSlot> GetAvailableTempSlot(ColorType type)
        {
            var availableSlots = tempSlots.Where(tempSlot =>
                    tempSlot.gameObject.activeSelf && tempSlot.coinCount < 32 /*&& !tempSlot.isDropping*/ && (tempSlot.colorType == ColorType.None || tempSlot.colorType == type))
                .ToList();
            availableSlots.Sort((a, b) => b.coinCount.CompareTo(a.coinCount));
            return availableSlots;
        }
    }
}
