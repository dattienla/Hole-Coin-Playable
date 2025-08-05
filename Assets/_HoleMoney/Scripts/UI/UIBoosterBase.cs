using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using DG.Tweening;
using TMPro;
using UnityEngine;

namespace _HoleMoney.Scripts.UI
{
    public class UIBoosterBase : MonoBehaviour
    {
        public BoosterType boosterType;
        public int levelToUnlock = 1;
        public int costPerUse = 0;

        public GameObject unlockPanel;
        public GameObject buyPanel;
        public GameObject handTut;
        public RectTransform icon;
        public GameObject unlocked;
        public GameObject locked;

        public GameObject canUse;
        public GameObject cannotUse;

        public TextMeshProUGUI amountText;
        public TextMeshProUGUI plusText;

        public TextMeshProUGUI levelToUnlockText;

        public GameObject tutorialPanel;

        private void Start()
        {
            var level = CenterDataManager.Instance.gameData.currentLevelText;
            SetUnlocked(level >= levelToUnlock);
            levelToUnlockText.text = "Lvl " + levelToUnlock;
            unlockPanel.SetActive(level == levelToUnlock);
            if(level == levelToUnlock)
            {
                if (boosterType == BoosterType.ExtraSlot)
                {
                    UIManager.Instance.uiBoosters.IncrementAddSlotAmount(5 - CenterDataManager.Instance.gameData
                        .currentAmountOfAddSlotBooster);
                }
                else if (boosterType == BoosterType.RainbowHole)
                {
                    UIManager.Instance.uiBoosters.IncrementHoleAmount(5 - CenterDataManager.Instance.gameData
                        .currentAmountOfHoleBooster);
                }
                else if (boosterType == BoosterType.CoinBag)
                {
                    UIManager.Instance.uiBoosters.IncrementBagAmount(5 - CenterDataManager.Instance.gameData
                        .currentAmountOfBagBooster);
                }
            }
        }

        private void SetUnlocked(bool isUnlocked)
        {
            unlocked.SetActive(isUnlocked);
            locked.SetActive(!isUnlocked);
        }

        public void SetCanUse(bool canUseBooster)
        {
            canUse.SetActive(canUseBooster);
            cannotUse.SetActive(!canUseBooster);
        }

        public void SetAmount(int amount)
        {
            if (amount <= 0)
            {
                amountText.gameObject.SetActive(false);
                plusText.gameObject.SetActive(true);
                return;
            }

            amountText.gameObject.SetActive(true);
            plusText.gameObject.SetActive(false);

            amountText.text = amount.ToString();

        }

        public void OnClaim()
        {
            icon.SetParent(unlockPanel.transform.parent);
            unlockPanel.gameObject.SetActive(false);
            icon.DOMove(icon.transform.position + new Vector3(0,50,0), 0.1f).SetEase(Ease.Linear).SetDelay(0.1f).OnComplete(() =>
            {
                icon.DOMove(transform.position, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
                {

                });

                icon.DOScale(Vector3.one * 0.3f, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
                {
                    icon.gameObject.SetActive(false);
                    transform.DOScale(Vector3.one * 1.2f, 0.2f).SetEase(Ease.Linear).OnComplete(() =>
                    {
                        transform.DOScale(Vector3.one, 0.2f).SetEase(Ease.Linear).OnComplete(() =>
                        {
                            handTut.SetActive(true);
                            tutorialPanel.SetActive(true);
                        });
                    });
                });
            });
        }

        public void OnBuy()
        {
            if(CenterDataManager.Instance.gameData.totalCoins < costPerUse * 3)
            {
                return;
            }
            CenterDataManager.Instance.gameData.totalCoins -= costPerUse * 3;
            switch (boosterType)
            {
                case BoosterType.ExtraSlot:
                    UIManager.Instance.uiBoosters.IncrementAddSlotAmount(3);
                    break;
                case BoosterType.RainbowHole:
                    UIManager.Instance.uiBoosters.IncrementHoleAmount(3);
                    break;
                case BoosterType.CoinBag:
                    UIManager.Instance.uiBoosters.IncrementBagAmount(3);
                    break;
                default:
                    Debug.LogWarning("Unknown booster type: " + boosterType);
                    break;
            }

            buyPanel.SetActive(false);

            CenterDataManager.Instance.Save();

        }

        public void DeactivateHandTut()
        {
            handTut.SetActive(false);
            tutorialPanel.SetActive(false);
        }

    }
}
