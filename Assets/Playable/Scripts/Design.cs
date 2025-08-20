using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using UnityEngine.Rendering.UI;
using DG.Tweening;
public class Design : MonoBehaviour
{
    // Start is called before the first frame update
    public Coin coinPrefab;
    public MaterialsSO materialsSo;
    public GameObject pigs;
    public GameObject holes;
    public GameObject map;
    public Vector3 spawnPosition;
    void Start()
    {
        //for (int i = 4; i < 10; i++)
        //{
        //    Tile tile = Grid.instance.rows[0].tiles[5];
        //    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //    tile.childCoin = obj;
        //    obj.SetActive(false);
        //    Coin coin = obj.GetComponent<Coin>();
        //    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
        //    if (mat != null && coin.meshRenderer != null)
        //    {
        //        coin.colorType = ColorType.Blue;
        //        coin.meshRenderer.material = mat.coinMaterial;
        //    }
        //    break;
        //}
        //for (int i = 4; i < 10; i++)
        //{
        //    Tile tile = Grid.instance.rows[1].tiles[5];
        //    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //    tile.childCoin = obj;
        //    obj.SetActive(false);
        //    Coin coin = obj.GetComponent<Coin>();
        //    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
        //    if (mat != null && coin.meshRenderer != null)
        //    {
        //        coin.colorType = ColorType.Blue;
        //        coin.meshRenderer.material = mat.coinMaterial;
        //    }
        //    break;
        //}
        //for (int i = 4; i < 10; i++)
        //{
        //    Tile tile = Grid.instance.rows[1].tiles[4];
        //    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //    tile.childCoin = obj;
        //    obj.SetActive(false);
        //    Coin coin = obj.GetComponent<Coin>();
        //    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
        //    if (mat != null && coin.meshRenderer != null)
        //    {
        //        coin.colorType = ColorType.Blue;
        //        coin.meshRenderer.material = mat.coinMaterial;
        //    }
        //    break;
        //}
        //for (int i = 4; i < 10; i++)
        //{
        //    Tile tile = Grid.instance.rows[0].tiles[4];
        //    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
        //    tile.childCoin = obj;
        //    obj.SetActive(false);
        //    Coin coin = obj.GetComponent<Coin>();
        //    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
        //    if (mat != null && coin.meshRenderer != null)
        //    {
        //        coin.colorType = ColorType.Blue;
        //        coin.meshRenderer.material = mat.coinMaterial;
        //    }
        //    break;
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
                    obj.SetActive(false);
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
                    obj.SetActive(false);
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
                obj.SetActive(false);
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
                obj.SetActive(false);
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
                    obj.SetActive(false);
                    Coin coin = obj.GetComponent<Coin>();
                    var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Blue);
                    if (mat != null && coin.meshRenderer != null)
                    {
                        coin.colorType = ColorType.Blue;
                        coin.meshRenderer.material = mat.coinMaterial;
                    }
                }
                else
                {
                    Tile tile = Grid.instance.rows[i].tiles[j];
                    GameObject obj = Instantiate(coinPrefab.gameObject, tile.gameObject.transform);
                    tile.childCoin = obj;
                    obj.SetActive(false);
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
                obj.SetActive(false);
                Coin coin = obj.GetComponent<Coin>();
                var mat = materialsSo.mainMaterials.FirstOrDefault(t => t.colorType == ColorType.Yellow);
                if (mat != null && coin.meshRenderer != null)
                {
                    coin.colorType = ColorType.Yellow;
                    coin.meshRenderer.material = mat.coinMaterial;
                }

            }
        }

        map.transform.position = new Vector3(0, 0, 100);
        pigs.transform.position = new Vector3(0, 0, 100);
        holes.transform.position = new Vector3(0, 0, 100);
        map.transform.DOMoveZ(0f, 0.8f).SetEase(Ease.InOutQuad);
        pigs.transform.DOMoveZ(0f, 0.6f).SetEase(Ease.InOutQuad);
        holes.transform.DOMoveZ(0f, 0.8f).SetEase(Ease.InOutQuad);
        StartCoroutine(CallMoveCoin());


    }
    IEnumerator CallMoveCoin()
    {
        yield return new WaitForSeconds(0.8f);
        MoveCoin();
    }
    private void MoveCoin()
    {
        Coin[] allCoins = Resources.FindObjectsOfTypeAll<Coin>();

        foreach (Coin c in allCoins)
        {
            c.gameObject.SetActive(true);
            c.transform.localPosition = spawnPosition;
            c.transform.DOLocalMove(new Vector3(0, -0.1f, 0.5f), 0.5f).SetEase(Ease.InOutQuad);
        }
    }
}
