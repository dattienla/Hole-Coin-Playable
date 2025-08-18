using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEditor.PlayerSettings;

public class PigRow : MonoBehaviour
{
    public List<Pig> pigs = new List<Pig>();


    public void RemovePig(Pig pig)
    {
        int index = pigs.IndexOf(pig);
        if (pigs.Count > 1)
        {
            GamePlay.Instance.pigQNexts.Add(pigs[index + 1]);
        }
        GamePlay.Instance.pigQs.Add(pig);
        pigs.Remove(pig);
    }

}
