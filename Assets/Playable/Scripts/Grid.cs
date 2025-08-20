using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;


public class Grid : MonoBehaviour
{
    public static Grid instance;
    public List<Row> rows = new List<Row>();

    private void Awake()
    {
        instance = this;
        for (int i = 0; i < transform.childCount; i++)
        {
            for (int j = 0; j < transform.GetChild(i).childCount; j++)
            {
                Tile tile = transform.GetChild(i).GetChild(j).GetComponent<Tile>();
                tile.gridPosition = new Vector2Int(i, j);
            }
        }
    }
    public List<Tile> GetTile2x2()
    {
        List<Tile> result = new List<Tile>();
        for (int i = 0; i < rows.Count; i++)
        {
            for (int j = 0; j < rows[i].tiles.Count; j++)
            {
                if (i % 2 == 0 && j % 2 == 0)
                {
                    result.Add(rows[i].tiles[j]);
                }
            }
        }

        return result;
    }

    public List<Tile> Get4Tile(Tile tile)
    {
        List<Tile> result = new List<Tile>();
        Row row = tile.transform.parent.GetComponent<Row>();
        int i = rows.IndexOf(row);
        int j = row.tiles.IndexOf(tile); // hoặc tile.colIndex

        // cụm 2x2 từ tile đại diện (i,j)
        result.Add(rows[i].tiles[j]);       // (i, j)
        result.Add(rows[i].tiles[j + 1]);   // (i, j+1)
        result.Add(rows[i + 1].tiles[j]);   // (i+1, j)
        result.Add(rows[i + 1].tiles[j + 1]); // (i+1, j+1)
        return result;
    }


    public void Reset()
    {
        rows = new List<Row>(GetComponentsInChildren<Row>(true));
        foreach (var row in rows)
        {
            row.Reset();
        }
    }

    public void ResetUnIncluded()
    {
        rows = new List<Row>(GetComponentsInChildren<Row>(false));
        foreach (var row in rows)
        {
            row.ResetUnIncluded();
            for (var x = 0; x < row.tiles.Count; x++)
            {
                if (row.tiles[x] != null)
                {
                    row.tiles[x].gridPosition = new Vector2Int(x, rows.IndexOf(row));
                }
            }
        }
    }
}

