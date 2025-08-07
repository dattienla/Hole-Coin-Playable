using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class CoinManager : MonoBehaviour
{
    void Start()
    {
        Debug.Log(GetAllTilesInGrid().Count);
    }
    List<Tile> GetAllTilesInGrid()
    {
        List<Tile> result = new List<Tile>();
        foreach (var row in Grid.instance.rows)
        {
            foreach (Tile tile in row.tiles)
            {
                result.Add(tile);
            }
        }
        return result;
    }
}
