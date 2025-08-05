using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

namespace Base.Common
{
    public static class Common
    {
       public static string FormatNumber(int number)
       {
            if (number < 1000)
            {
                return number.ToString();
            }
            if (number < 1000000)
            {
                return (number / 1000).ToString() + ',' + (number % 1000)/100 + "K";
            }
            if (number < 1000000000)
            {
                return (number / 1000000).ToString() + ',' + (number % 1000000)/100000 + "M";
            }
            return (number / 1000000000).ToString() + ',' + (number % 1000000000)/100000000 + "B";
        }

       public static void ChangeLayer(Transform obj, string layerName)
       {
           var targetLayer = LayerMask.NameToLayer(layerName);
           var transforms = obj.GetComponentsInChildren<Transform>(true);
           foreach (var t in transforms)
           {
               t.gameObject.layer = targetLayer;
           }
       }

       public static List<int> GetUniqueRandomNumbers(int min, int max, int count)
       {
           var uniqueNumbers = new HashSet<int>();
           while (uniqueNumbers.Count < count)
           {
               var randomNumber = Random.Range(min, max + 1);
               uniqueNumbers.Add(randomNumber);
           }
           return new List<int>(uniqueNumbers);
       }

    }
}
