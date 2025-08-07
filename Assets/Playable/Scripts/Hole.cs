
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static Unity.VisualScripting.Dependencies.Sqlite.SQLite3;

public class Hole : MonoBehaviour
{
    public List<Tile> targetTile = new List<Tile>();
    private void Start()
    {
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            if (Physics.Raycast(ray, out var hit))
            {
                if (hit.collider.transform == transform)
                {
                    //transform.DOScale(2.3f, 0.1f)
                    // .OnComplete(() => transform.DOScale(2.5f, 0.05f));

                    MoveCoin();
                }
            }
        }
    }
    public Color GetColorHole()
    {
        Transform hole = transform.Find("coinColor");
        if (hole != null)
        {
            Renderer r = hole.GetComponent<Renderer>();
            if (r != null)
                return r.material.color;
        }
        return Color.clear;
    }
    public void MoveCoin()
    {
        foreach (var startTile in GetAllTilesInGrid())
        {
            List<Tile> path = TilePathfinder.Instance.FindShortestPath(startTile, targetTile[0]);
            if (path != null)
            {
                Destroy(startTile.childCoin);
            }
        }
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
