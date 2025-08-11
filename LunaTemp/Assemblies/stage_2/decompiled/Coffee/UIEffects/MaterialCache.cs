using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	public class MaterialCache
	{
		private class MaterialEntry
		{
			public Material material;

			public int referenceCount;

			public void Release()
			{
				if ((bool)material)
				{
					UnityEngine.Object.DestroyImmediate(material, false);
				}
				material = null;
			}
		}

		private static Dictionary<Hash128, MaterialEntry> materialMap = new Dictionary<Hash128, MaterialEntry>();

		public static Material Register(Material baseMaterial, Hash128 hash, Action<Material, Graphic> onModifyMaterial, Graphic graphic)
		{
			if (hash.Equals(default(Hash128)))
			{
				return null;
			}
			if (!materialMap.TryGetValue(hash, out var entry))
			{
				entry = new MaterialEntry
				{
					material = new Material(baseMaterial)
					{
						hideFlags = HideFlags.HideAndDontSave
					}
				};
				onModifyMaterial(entry.material, graphic);
				materialMap.Add(hash, entry);
			}
			entry.referenceCount++;
			return entry.material;
		}

		public static void Unregister(Hash128 hash)
		{
			if (!hash.Equals(default(Hash128)) && materialMap.TryGetValue(hash, out var entry) && --entry.referenceCount <= 0)
			{
				entry.Release();
				materialMap.Remove(hash);
			}
		}
	}
}
