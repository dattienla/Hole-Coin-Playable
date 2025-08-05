using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using Base.Common;
using Base.Internal;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class PigRowManager : Singleton<PigRowManager>
    {
        public List<PigRow> pigRows;
        public ActiveOnly3DLayoutGroup layoutGroup;

        private void Reset()
        {
            pigRows = GetComponentsInChildren<PigRow>(true).ToList();
            pigRows.Reverse();
        }

        public void GetAllPigRows()
        {
            foreach (var pigRow in pigRows)
            {
                pigRow.Reset();
            }
        }

        public List<PigRow> GetAvailablePig(ColorType colorType)
        {
            return (from pigRow in pigRows
                where pigRow.gameObject.activeSelf && pigRow.pigs.Count > 0 && pigRow.pigs[0].colorType == colorType
                select pigRow).ToList();
        }



    }
}
