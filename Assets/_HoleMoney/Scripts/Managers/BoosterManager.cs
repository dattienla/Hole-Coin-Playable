using System.Collections;
using System.Collections.Generic;
using _HoleMoney.Scripts.Game;
using Base.Common;
using DG.Tweening;
using UnityEngine;

namespace _HoleMoney.Scripts.Managers
{
    public class BoosterManager : Singleton<BoosterManager>
    {
        public BagBooster bag;
        public bool isUsingHoleBooster = false;
        public bool isUsingBagBooster = false;

        public Hole tempHole;

        private void Update()
        {
            if (isUsingBagBooster)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                    if (Physics.Raycast(ray, out var hit, 100f))
                    {
                        if (hit.collider.CompareTag("Tile"))
                        {
                            var tile = hit.collider.GetComponent<Tile>();
                            if (tile != null && tile.childCoin != null)
                            {
                                StartCoroutine(UseBag(tile));
                            }
                        }
                    }

                }
            }
        }

        public void AddSlot()
        {
            TempSlotsManager.Instance.layoutGroup.visibleCount++;
            UIManager.Instance.uiBoosters.addSlotBooster.SetCanUse(false);
            UIManager.Instance.uiBoosters.DecrementAddSlotAmount(1);
        }

        public IEnumerator UseBag(Tile tile)
        {
            GameManager.Instance.canClickHole = false;
            UIManager.Instance.uiBoosters.CancelBag();
            UIManager.Instance.uiBoosters.DecrementBagAmount(1);
            bag.DeactivateBlenderShape(true);
            var bagPosition = new Vector3(tile.transform.position.x - 2, bag.transform.position.y,
                tile.transform.position.z);

            var coins = new List<Coin>();

            // Di chuyển bag và chờ hoàn tất
            yield return bag.transform.DOMove(bagPosition, 0.4f).WaitForCompletion();

            bag.ActivateBlenderShape();

            // Sau khi bag đến vị trí, bắt đầu hút coin
            var tiles = GameManager.Instance.GetPoolSameColor(tile);
            foreach (var ti in tiles)
            {
                bag.SuckCoin(ti.childCoin);
                coins.Add(ti.childCoin);
                ti.childCoin.transform.SetParent(bag.transform);
                ti.childCoin = null;
                ti.isEmpty = true;
                yield return new WaitForSeconds(0.05f);
            }

            yield return new WaitForSeconds(0.6f);
            bag.DeactivateBlenderShape(true);
            bag.transform.GetChild(0).gameObject.SetActive(false);

            var dropPosition = new Vector3(-2f, bag.transform.position.y,
                -32f);
            yield return bag.transform.DOMove(dropPosition, 0.8f).SetDelay(0.3f).WaitForCompletion();

            bag.ActivateBlenderShape();

            var pigRows = PigRowManager.Instance.pigRows;
            foreach (var pigRow in pigRows)
            {
                var pigs = new List<Pig>(pigRow.pigs);
                foreach (var pig in pigs)
                {
                    if(coins.Count == 0) break;
                    if(pig.gameObject.activeSelf == false) continue;
                    if(pigRow.pigs.Contains(pig) == false) continue;
                    if (pig.colorType != coins[0].colorType) continue;
                    pig.isDropping = true;
                    while (pig.maxCoinCount > 0 && coins.Count > 0)
                    {
                        pig.ActivateCoinEyes();
                        var coin = coins[0];
                        coins.RemoveAt(0);
                        var startPosition = coin.transform.position;
                        var midPosition = bag.point1.position;
                        var endPosition = pig.endPoint.position;
                        pig.maxCoinCount--;
                        coin.transform.DOPath(new Vector3[] { midPosition, endPosition }, 0.35f, PathType.CatmullRom)
                            .SetEase(Ease.InOutQuad)
                            .OnComplete(() =>
                            {
                                pig.transform.DOScale(1.1f, 0.1f).SetEase(Ease.InOutQuad).OnComplete(() =>
                                {
                                    pig.transform.DOScale(1f, 0.1f).SetEase(Ease.InOutQuad);
                                });
                                coin.transform.SetParent(pig.transform);
                                Destroy(coin.gameObject);
                                pig.UpdateCoinText();
                                if(pig.maxCoinCount <= 0)
                                {
                                    pig.OnFull();
                                }
                            });

                        yield return new WaitForSeconds(0.075f);
                    }
                    pig.DeactivateCoinEyes();

                    pig.isDropping = false;
                }
            }
            GameManager.Instance.canClickHole = true;
            yield return new WaitForSeconds(1f);
            bag.ResetPosition();


        }


    }
}
