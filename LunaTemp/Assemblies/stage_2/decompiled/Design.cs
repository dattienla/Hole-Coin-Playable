using System.Linq;
using UnityEngine;

public class Design : MonoBehaviour
{
	public Coin coinPrefab;

	public MaterialsSO materialsSo;

	private void Start()
	{
		for (int i = 0; i < 8; i++)
		{
			for (int j = 0; j < 8; j++)
			{
				if (j >= i)
				{
					Tile tile2 = Grid.instance.rows[i].tiles[j];
					Coin coin2 = (tile2.childCoin = Object.Instantiate(coinPrefab.gameObject, tile2.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat2 = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Green);
					if (mat2 != null && coin2.meshRenderer != null)
					{
						coin2.colorType = ColorType.Green;
						coin2.meshRenderer.material = mat2.coinMaterial;
					}
				}
				else
				{
					Tile tile = Grid.instance.rows[i].tiles[j];
					Coin coin = (tile.childCoin = Object.Instantiate(coinPrefab.gameObject, tile.gameObject.transform)).GetComponent<Coin>();
					MainMaterials mat = materialsSo.mainMaterials.FirstOrDefault((MainMaterials t) => t.colorType == ColorType.Orange);
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
