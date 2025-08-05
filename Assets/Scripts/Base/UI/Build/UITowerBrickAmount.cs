using TMPro;
using UnityEngine;

namespace Base.UI.Build
{
    public class UITowerBrickAmount : MonoBehaviour
    {
        public TextMeshProUGUI amountText;

        public void SetAmount(int amount)
        {
            amountText.text = Common.Common.FormatNumber(amount);
        }
    }
}
