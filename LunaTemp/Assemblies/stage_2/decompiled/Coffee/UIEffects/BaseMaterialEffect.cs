using System.Collections.Generic;
using System.Linq;
using System.Text;
using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[DisallowMultipleComponent]
	public abstract class BaseMaterialEffect : BaseMeshEffect, IParameterTexture, IMaterialModifier
	{
		protected static readonly Hash128 k_InvalidHash = default(Hash128);

		protected static readonly List<UIVertex> s_TempVerts = new List<UIVertex>();

		private static readonly StringBuilder s_StringBuilder = new StringBuilder();

		private Hash128 _effectMaterialHash;

		public int parameterIndex { get; set; }

		public virtual ParameterTexture paramTex => null;

		public void SetMaterialDirty()
		{
			base.connector.SetMaterialDirty(base.graphic);
			foreach (UISyncEffect effect in syncEffects)
			{
				effect.SetMaterialDirty();
			}
		}

		public virtual Hash128 GetMaterialHash(Material baseMaterial)
		{
			return k_InvalidHash;
		}

		public Material GetModifiedMaterial(Material baseMaterial)
		{
			return GetModifiedMaterial(baseMaterial, base.graphic);
		}

		public virtual Material GetModifiedMaterial(Material baseMaterial, Graphic graphic)
		{
			if (!base.isActiveAndEnabled)
			{
				return baseMaterial;
			}
			Hash128 oldHash = _effectMaterialHash;
			_effectMaterialHash = GetMaterialHash(baseMaterial);
			Material modifiedMaterial = baseMaterial;
			if (!_effectMaterialHash.Equals(default(Hash128)))
			{
				modifiedMaterial = MaterialCache.Register(baseMaterial, _effectMaterialHash, ModifyMaterial, graphic);
			}
			MaterialCache.Unregister(oldHash);
			return modifiedMaterial;
		}

		public virtual void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			if (base.isActiveAndEnabled && paramTex != null)
			{
				paramTex.RegisterMaterial(newMaterial);
			}
		}

		protected void SetShaderVariants(Material newMaterial, params object[] variants)
		{
			string[] keywords = (newMaterial.shaderKeywords = (from x in variants
				where 0 < (int)x
				select x.ToString().ToUpper()).Concat(newMaterial.shaderKeywords).Distinct().ToArray());
			s_StringBuilder.Length = 0;
			string[] array2 = keywords;
			foreach (string keyword in array2)
			{
				s_StringBuilder.Append("-");
				s_StringBuilder.Append(keyword);
			}
			newMaterial.name = s_StringBuilder.ToString();
		}

		protected override void OnEnable()
		{
			base.OnEnable();
			if (paramTex != null)
			{
				paramTex.Register(this);
			}
			SetMaterialDirty();
			SetEffectParamsDirty();
		}

		protected override void OnDisable()
		{
			base.OnDisable();
			SetMaterialDirty();
			if (paramTex != null)
			{
				paramTex.Unregister(this);
			}
			MaterialCache.Unregister(_effectMaterialHash);
			_effectMaterialHash = k_InvalidHash;
		}
	}
}
