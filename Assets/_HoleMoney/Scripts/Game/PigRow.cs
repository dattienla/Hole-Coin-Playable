using System.Collections.Generic;
using System.Linq;
using _HoleMoney.Scripts.Enums;
using _HoleMoney.Scripts.Managers;
using Base.Common;
using Base.Internal;
using DG.Tweening;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class PigRow : MonoBehaviour
    {
        public ActiveOnly3DLayoutGroup layoutGroup;
        public List<Pig> pigs;

        public void Reset()
        {
            layoutGroup = GetComponent<ActiveOnly3DLayoutGroup>();
            pigs = GetComponentsInChildren<Pig>(true).ToList();
            pigs.Reverse();
            layoutGroup.visibleCount = pigs.Count;
            if(pigs.Count > 0)
            {
                pigs[0].coinCountText.gameObject.SetActive(true);
            }
        }

        public void RemovePig(Pig pig)
        {
            ObjectPooling.Instance.GetGameObject(CenterDataManager.Instance.prefabSo.confettiPrefab,
                    pig.transform.position + Vector3.up * 3 - Vector3.back * 2, Quaternion.Euler(-90, 0, 0))
                .SetActive(true);
            pig.transform.DOScale(0,0.75f).SetEase(Ease.InBack).OnComplete(() =>
            {
                if(pigs.Contains(pig))
                {
                    pigs.Remove(pig);
                    Destroy(pig.gameObject);
                    layoutGroup.visibleCount--;
                }
                if (pigs.Count == 0)
                {
                    GameManager.Instance.CheckWin();
                }
                else
                {
                    pigs[0].coinCountText.gameObject.SetActive(true);
                }
            });


            /*GameManager.Instance.JumpCoinToPigs(pigs[0].colorType);*/
        }
    }
}
