using System.Linq;
using UnityEngine;

public class Design : MonoBehaviour
{
	public Coin coinPrefab;

	public MaterialsSO materialsSo;

	private void Start()
	{
		for (int i = 0; i < 4; i++)
		{
			for (int j2 = 0; j2 < 8; j2++)
			{
				if (j2 < 4)
				{
					Tile tile2 = Grid.instance.rows[i].tiles[j2];
					Coin coin2 = (tile2.childCoin = Object.Instantiate(coinPrefab.gameObject, tile2.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat2 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Yellow);
					if (mat2 != null && coin2.meshRenderer != null)
					{
						coin2.colorType = ColorType.Yellow;
						coin2.meshRenderer.material = mat2.coinMaterial;
					}
				}
				else
				{
					Tile tile = Grid.instance.rows[i].tiles[j2];
					Coin coin = (tile.childCoin = Object.Instantiate(coinPrefab.gameObject, tile.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Blue);
					if (mat != null && coin.meshRenderer != null)
					{
						coin.colorType = ColorType.Blue;
						coin.meshRenderer.material = mat.coinMaterial;
					}
				}
			}
		}
		for (int j = 4; j < 8; j++)
		{
			for (int j4 = 0; j4 < 8; j4++)
			{
				Tile tile4 = Grid.instance.rows[j].tiles[j4];
				Coin coin4 = (tile4.childCoin = Object.Instantiate(coinPrefab.gameObject, tile4.gameObject.transform)).GetComponent<Coin>();
				MainMaterials mat3 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Blue);
				if (mat3 != null && coin4.meshRenderer != null)
				{
					coin4.colorType = ColorType.Blue;
					coin4.meshRenderer.material = mat3.coinMaterial;
				}
			}
		}
		for (int k = 8; k < 12; k++)
		{
			for (int j5 = 4; j5 < 8; j5++)
			{
				Tile tile6 = Grid.instance.rows[k].tiles[j5];
				Coin coin5 = (tile6.childCoin = Object.Instantiate(coinPrefab.gameObject, tile6.gameObject.transform)).GetComponent<Coin>();
				MainMaterials mat5 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Yellow);
				if (mat5 != null && coin5.meshRenderer != null)
				{
					coin5.colorType = ColorType.Yellow;
					coin5.meshRenderer.material = mat5.coinMaterial;
				}
			}
		}
		for (int l = 12; l < 16; l++)
		{
			for (int j3 = 0; j3 < 8; j3++)
			{
				if (j3 < 4)
				{
					Tile tile5 = Grid.instance.rows[l].tiles[j3];
					Coin coin6 = (tile5.childCoin = Object.Instantiate(coinPrefab.gameObject, tile5.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat6 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Yellow);
					if (mat6 != null && coin6.meshRenderer != null)
					{
						coin6.colorType = ColorType.Yellow;
						coin6.meshRenderer.material = mat6.coinMaterial;
					}
				}
				else
				{
					Tile tile7 = Grid.instance.rows[l].tiles[j3];
					Coin coin7 = (tile7.childCoin = Object.Instantiate(coinPrefab.gameObject, tile7.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat7 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Blue);
					if (mat7 != null && coin7.meshRenderer != null)
					{
						coin7.colorType = ColorType.Blue;
						coin7.meshRenderer.material = mat7.coinMaterial;
					}
				}
			}
		}
		for (int m = 16; m < 20; m++)
		{
			for (int n = 0; n < 4; n++)
			{
				Tile tile3 = Grid.instance.rows[m].tiles[n];
				Coin coin3 = (tile3.childCoin = Object.Instantiate(coinPrefab.gameObject, tile3.gameObject.transform)).GetComponent<Coin>();
				MainMaterials mat4 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Yellow);
				if (mat4 != null && coin3.meshRenderer != null)
				{
					coin3.colorType = ColorType.Yellow;
					coin3.meshRenderer.material = mat4.coinMaterial;
				}
			}
		}
	}
}
