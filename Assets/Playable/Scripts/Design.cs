using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
public class Design : MonoBehaviour
{
    // Start is called before the first frame update
    public Coin coinPrefab;
    public MaterialsSO materialsSo;
    void Start()
    {
        //for (int i = 0; i < 4; i++)
        //{
        //    for (int j = 0; j < 3; j++)
        //    {
        //        Tile tile = Grid.instance.rows[i].tiles[j];
        //        GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //        tile.childCoin = obj;
        //        Coin coin = obj.GetComponent<Coin>();
        //        var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Orange);
        //        if (mat != null && coin.meshRenderer != null)
        //        {
        //            coin.colorType = ColorType.Orange;
        //            coin.meshRenderer.material = mat.coinMaterial;
        //        }

        //    }
        //    for (int j = 3; j < 8; j++)
        //    {
        //        Tile tile = Grid.instance.rows[i].tiles[j];
        //        GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //        tile.childCoin = obj;
        //        Coin coin = obj.GetComponent<Coin>();
        //        var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Green);
        //        if (mat != null && coin.meshRenderer != null)
        //        {
        //            coin.colorType = ColorType.Green;
        //            coin.meshRenderer.material = mat.coinMaterial;
        //        }
        //    }
        //}

        //for (int i = 4; i < 8; i++)
        //{
        //    for (int j = 0; j < 3; j++)
        //    {
        //        Tile tile = Grid.instance.rows[i].tiles[j];
        //        GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //        tile.childCoin = obj;
        //        Coin coin = obj.GetComponent<Coin>();
        //        var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Green);
        //        if (mat != null && coin.meshRenderer != null)
        //        {
        //            coin.colorType = ColorType.Green;
        //            coin.meshRenderer.material = mat.coinMaterial;
        //        }

        //    }
        //    for (int j = 3; j < 8; j++)
        //    {
        //        Tile tile = Grid.instance.rows[i].tiles[j];
        //        GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //        tile.childCoin = obj;
        //        Coin coin = obj.GetComponent<Coin>();
        //        var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Orange);
        //        if (mat != null && coin.meshRenderer != null)
        //        {
        //            coin.colorType = ColorType.Orange;
        //            coin.meshRenderer.material = mat.coinMaterial;
        //        }
        //    }
        //}


        for (int i = 0; i < 8; i++)
        {
            for (int j = 0; j < 8; j++)
            {
                if (j >= i) // nửa tam giác trên (bao gồm đường chéo chính)
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Green);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Green;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
                else
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Orange);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Orange;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
            }

        }


    }

}
