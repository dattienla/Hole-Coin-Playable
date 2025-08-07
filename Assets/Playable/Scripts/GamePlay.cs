using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GamePlay : MonoBehaviour
{
    public Tile startTile;
    public Tile targetTile;

    private void Start()
    {
        List<Tile> path = TilePathfinder.Instance.FindShortestPath(startTile, targetTile);

    }
    public void MoveCoin()
    {

    }
}
