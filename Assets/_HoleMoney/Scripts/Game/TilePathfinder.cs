using System.Collections.Generic;
using UnityEngine;

namespace _HoleMoney.Scripts.Game
{
    public class TilePathfinder
    {
        private readonly Grid _grid;

        private static readonly Vector2Int[] Directions = {
            Vector2Int.up,
            Vector2Int.down,
            Vector2Int.left,
            Vector2Int.right
        };

        public TilePathfinder(Grid grid)
        {
            this._grid = grid;
        }

        public List<Tile> FindShortestPath(Tile start, Tile target,Hole hole)
        {
            if (start == target)
                return new List<Tile> { start };

            var queue = new Queue<Tile>();
            var cameFrom = new Dictionary<Tile, Tile>();
            var visited = new HashSet<Tile>();

            queue.Enqueue(start);
            cameFrom[start] = null;
            visited.Add(start);

            const int maxSteps = 1000;
            int steps = 0;

            while (queue.Count > 0 && steps < maxSteps)
            {
                steps++;
                Tile current = queue.Dequeue();

                if (current == target)
                    return ReconstructPath(cameFrom, target);

                foreach (var dir in Directions)
                {
                    Vector2Int pos = current.gridPosition + dir;
                    if (!IsValid(pos)) continue;

                    Tile neighbor = _grid.rows[pos.y].tiles[pos.x];

                    if (visited.Contains(neighbor)) continue;

                    bool canPass =
                        neighbor.isEmpty || hole.lockTiles.Contains(neighbor) ||
                        (neighbor.childCoin != null && start.childCoin != null && !neighbor.isHidden &&
                         neighbor.childCoin.colorType == start.childCoin.colorType);

                    if (!canPass) continue;

                    visited.Add(neighbor);
                    cameFrom[neighbor] = current;
                    queue.Enqueue(neighbor);
                }
            }

            // Không tìm được đường
            return null;
        }

        private List<Tile> ReconstructPath(Dictionary<Tile, Tile> cameFrom, Tile end)
        {
            var pathStack = new Stack<Tile>();
            Tile current = end;

            while (current != null)
            {
                pathStack.Push(current);
                current = cameFrom[current];
            }

            return new List<Tile>(pathStack);
        }

        private bool IsValid(Vector2Int pos)
        {
            return pos.y >= 0 && pos.y < _grid.rows.Count &&
                   pos.x >= 0 && pos.x < _grid.rows[pos.y].tiles.Count;
        }
    }
}
