using UnityEngine;

namespace NaughtyAttributes.Test
{
	public class SortingLayerTest : MonoBehaviour
	{
		[SortingLayer]
		public int layerNumber0;

		[SortingLayer]
		public string layerName0;

		public SortingLayerNest1 nest1;

		[Button(null, EButtonEnableMode.Always)]
		public void DebugLog()
		{
			Debug.LogFormat("{0} = {1}", "layerNumber0", layerNumber0);
			Debug.LogFormat("{0} = {1}", "layerName0", layerName0);
			Debug.LogFormat("LayerToName({0}) = {1}", layerNumber0, GetSortingLayerName(layerNumber0));
			Debug.LogFormat("NameToLayer({0}) = {1}", layerName0, SortingLayer.NameToID(layerName0));
			string GetSortingLayerName(int id)
			{
				SortingLayer[] layers = SortingLayer.layers;
				for (int i = 0; i < layers.Length; i++)
				{
					SortingLayer layer = layers[i];
					if (layer.id == id)
					{
						return layer.name;
					}
				}
				return "Unknown";
			}
		}
	}
}
