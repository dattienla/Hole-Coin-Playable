using _HoleMoney.Scripts.Game;
using _HoleMoney.Scripts.Managers;
using DotweenAnimations;
using UnityEngine;

namespace _HoleMoney.Scripts.UI
{
    public class UIBoosters : MonoBehaviour
    {
        public GameObject main;

        public MoveAnimation holePanel;
        public MoveAnimation bagPanel;

        public UIBoosterBase addSlotBooster;
        public UIBoosterBase holeBooster;
        public UIBoosterBase bagBooster;

        public UIBuyBooster buyAddSlotBooster;
        public UIBuyBooster buyHoleBooster;
        public UIBuyBooster buyBagBooster;

        private void Start()
        {
            addSlotBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster);
            holeBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfHoleBooster);
            bagBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfBagBooster);
        }

        public void IncrementAddSlotAmount(int amount)
        {
            CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster += amount;
            addSlotBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster);
        }

        public void IncrementHoleAmount(int amount)
        {
            CenterDataManager.Instance.gameData.currentAmountOfHoleBooster += amount;
            holeBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfHoleBooster);
        }

        public void IncrementBagAmount(int amount)
        {
            CenterDataManager.Instance.gameData.currentAmountOfBagBooster += amount;
            bagBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfBagBooster);
        }

        public void DecrementAddSlotAmount(int amount)
        {
            if (CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster <= 0)
            {
                Debug.LogWarning("Not enough hammer boosters to decrement.");
                return;
            }

            CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster -= amount;
            CenterDataManager.Instance.Save();
            addSlotBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster);
        }

        public void DecrementHoleAmount(int amount)
        {
            if (CenterDataManager.Instance.gameData.currentAmountOfHoleBooster <= 0)
            {
                Debug.LogWarning("Not enough freeze boosters to decrement.");
                return;
            }

            CenterDataManager.Instance.gameData.currentAmountOfHoleBooster -= amount;
            CenterDataManager.Instance.Save();
            holeBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfHoleBooster);
        }
        public void DecrementBagAmount(int amount)
        {

            if (CenterDataManager.Instance.gameData.currentAmountOfBagBooster <= 0)
            {
                Debug.LogWarning("Not enough magic boosters to decrement.");
                return;
            }

            CenterDataManager.Instance.gameData.currentAmountOfBagBooster -= amount;
            CenterDataManager.Instance.Save();
            bagBooster.SetAmount(CenterDataManager.Instance.gameData.currentAmountOfBagBooster);
        }

        public void UseHole()
        {
            if(CenterDataManager.Instance.gameData.currentAmountOfHoleBooster <= 0)
            {
                holeBooster.buyPanel.SetActive(true);
                /*UIManager.Instance.uiBoosters.buyMagicBooster.gameObject.SetActive(true);*/
                return;
            }
            main.SetActive(false);
            BoosterManager.Instance.isUsingHoleBooster = true;
            holeBooster.DeactivateHandTut();
            holePanel.Move();
        }

        public void CancelHole()
        {
            BoosterManager.Instance.isUsingHoleBooster = false;
            GameManager.Instance.SetOriginalTypeOfAllCoin();
            if (BoosterManager.Instance.tempHole != null)
            {
                BoosterManager.Instance.tempHole.colorType = BoosterManager.Instance.tempHole.originalColorType;
            }
            holePanel.MoveBack();
            main.SetActive(true);
        }

        public void UseBag()
        {
            if(CenterDataManager.Instance.gameData.currentAmountOfBagBooster <= 0)
            {
                bagBooster.buyPanel.SetActive(true);
                /*UIManager.Instance.uiBoosters.buyHammerBooster.gameObject.SetActive(true);*/
                return;
            }
            main.SetActive(false);
            BoosterManager.Instance.isUsingBagBooster = true;
            bagBooster.DeactivateHandTut();
            bagPanel.Move();
        }

        public void CancelBag()
        {
            BoosterManager.Instance.isUsingBagBooster = false;
            bagPanel.MoveBack();
            main.SetActive(true);
        }
        public void UseAddSlot()
        {
            if(CenterDataManager.Instance.gameData.currentAmountOfAddSlotBooster <= 0)
            {
                addSlotBooster.buyPanel.SetActive(true);
                /*UIManager.Instance.uiBoosters.buyFreezeBooster.gameObject.SetActive(true);*/
                return;
            }
            addSlotBooster.DeactivateHandTut();
            BoosterManager.Instance.AddSlot();
        }
    }
}
