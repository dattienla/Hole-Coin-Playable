using System;
using System.Threading.Tasks;
using _HoleMoney.Scripts.Managers;
using _HoleMoney.Scripts.UI;
using DG.Tweening;
using UnityEngine;
using Random = UnityEngine.Random;

namespace Base.UI
{
    public class CollectEffect : MonoBehaviour
    {

        public async void CollectMoney(Transform start,Transform target, int amount = 20,Action onComplete = null)
        {
            for (var i = 0; i < amount; i++)
            {
                var randomPosition = start.position +  new Vector3(Random.Range(-5, 5), Random.Range(-5, 0));
                var money = Instantiate(CenterDataManager.Instance.prefabSo.coinFxPrefab,
                    start.position + new Vector3(0, 10, 0), Quaternion.identity, transform);
                money.transform.SetParent(transform);

                var ghost = money.GetComponent<GhostTrailUI>();

                ghost.StartTrail();

                money.transform.DOMove(randomPosition, 0.5f).OnComplete((() =>
                {
                    money.transform.DOMove(target.position, 0.5f).OnComplete((() =>
                    {
                        money.transform.localScale = Vector3.zero;
                        ghost.StopTrail();
                        Destroy(money,1f);
                        target.DOScale(1.2f, 0.1f).OnComplete((() =>
                        {
                            onComplete?.Invoke();
                            target.DOScale(1, 0.1f);
                        }));
                    }));
                    money.transform.DOScale(0.8f, 0.5f);
                }));
                await Task.Delay(50);
            }
        }


    }
}
