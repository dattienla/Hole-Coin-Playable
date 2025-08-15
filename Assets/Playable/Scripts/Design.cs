using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using UnityEngine.Rendering.UI;
public class Design : MonoBehaviour
{
    // Start is called before the first frame update
    public Coin coinPrefab;
    public MaterialsSO materialsSo;
    void Start()
    {
        //Tile tile = Grid.instance.rows[i].tiles[j];
        //GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //tile.childCoin = obj;
        //Coin coin = obj.GetComponent<Coin>();
        //var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Green);
        //if (mat != null && coin.meshRenderer != null)
        //{
        //    coin.colorType = ColorType.Green;
        //    coin.meshRenderer.material = mat.coinMaterial;
        //}
        for (int i = 0; i < 4; i++)
        {
            for (int j = 0; j < 8; j++)
            {
                if (j < 4)
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Yellow);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Yellow;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
                else
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Blue;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
            }
        }
        for (int i = 4; i < 8; i++)
        {
            for (int j = 0; j < 8; j++)
            {
                Tile tile = Grid.instance.rows[i].tiles[j];
                GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                tile.childCoin = obj;
                Coin coin = obj.GetComponent<Coin>();
                var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
                if (mat != null && coin.meshRenderer != null)
                {
                    coin.colorType = ColorType.Blue;
                    coin.meshRenderer.material = mat.coinMaterial;
                }

            }
        }
        for (int i = 8; i < 12; i++)
        {
            for (int j = 4; j < 8; j++)
            {
                Tile tile = Grid.instance.rows[i].tiles[j];
                GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                tile.childCoin = obj;
                Coin coin = obj.GetComponent<Coin>();
                var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Yellow);
                if (mat != null && coin.meshRenderer != null)
                {
                    coin.colorType = ColorType.Yellow;
                    coin.meshRenderer.material = mat.coinMaterial;
                }
            }
        }
        for (int i = 12; i < 16; i++)
        {
            for (int j = 0; j < 8; j++)
            {
                if (j < 4)
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Yellow);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Yellow;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
                else
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Blue;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
            }
        }
        for (int i = 16; i < 20; i++)
        {
            for (int j = 0; j < 4; j++)
            {
                Tile tile = Grid.instance.rows[i].tiles[j];
                GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                tile.childCoin = obj;
                Coin coin = obj.GetComponent<Coin>();
                var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Yellow);
                if (mat != null && coin.meshRenderer != null)
                {
                    coin.colorType = ColorType.Yellow;
                    coin.meshRenderer.material = mat.coinMaterial;
                }

            }
        }

    }

}
