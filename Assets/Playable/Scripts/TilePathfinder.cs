using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TilePathfinder : MonoBehaviour
{
    public static TilePathfinder Instance;
    List<Tile> allTiles = new List<Tile>();
    private void Awake()
    {
        Instance = this;
    }
    private void Start()
    {
        allTiles = GamePlay.Instance.GetAllTilesInGrid();
    }
    public List<Tile> FindShortestPath(Tile start, Tile target, Hole hole)
    {
        if (start == target) return new List<Tile> { start };
        Queue<Tile> queue = new Queue<Tile>();
        Dictionary<Tile, Tile> cameFrom = new Dictionary<Tile, Tile>();
        HashSet<Tile> visited = new HashSet<Tile>();
        queue.Enqueue(start);
        cameFrom[start] = null;
        visited.Add(start);

        ColorType startColorType = start.GetColorTile();
        ColorType holeType = hole.colorType;
        if (startColorType == holeType)
        {
            while (queue.Count > 0)
            {
                Tile current = queue.Dequeue();

                if (current == target)
                {
                    return ReconstructPath(cameFrom, target);
                }

                foreach (Tile neighbor in current.GetNeighbors())
                {
                    if (!allTiles.Contains(neighbor))
                    {
                        if (!hole.tilesInHole.Contains(neighbor)) continue;
                    }
                    if (visited.Contains(neighbor)) continue;

                    bool isPassable =
                        neighbor.isEmpty ||
                        (!neighbor.isEmpty && neighbor.GetColorTile() == startColorType);
                    if (!isPassable) continue;

                    queue.Enqueue(neighbor);
                    visited.Add(neighbor);
                    cameFrom[neighbor] = current;
                }
            }
        }
        // Không tìm được đường đi hợp lệ
        return null;
    }

    private List<Tile> ReconstructPath(Dictionary<Tile, Tile> cameFrom, Tile end)
    {
        List<Tile> path = new List<Tile>();
        Tile current = end;

        while (current != null)
        {
            path.Add(current);
            current = cameFrom[current];
        }

        path.Reverse();
        return path;
    }
}
