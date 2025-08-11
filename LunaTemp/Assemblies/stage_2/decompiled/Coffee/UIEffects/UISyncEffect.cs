using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[ExecuteInEditMode]
	public class UISyncEffect : BaseMaterialEffect
	{
		[Tooltip("The target effect to synchronize.")]
		[SerializeField]
		private BaseMeshEffect m_TargetEffect;

		public BaseMeshEffect targetEffect
		{
			get
			{
				return (m_TargetEffect != this) ? m_TargetEffect : null;
			}
			set
			{
				if (!(m_TargetEffect == value))
				{
					m_TargetEffect = value;
					SetVerticesDirty();
					SetMaterialDirty();
					SetEffectParamsDirty();
				}
			}
		}

		protected override void OnEnable()
		{
			if ((bool)targetEffect)
			{
				targetEffect.syncEffects.Add(this);
			}
			base.OnEnable();
		}

		protected override void OnDisable()
		{
			if ((bool)targetEffect)
			{
				targetEffect.syncEffects.Remove(this);
			}
			base.OnDisable();
		}

		public override Hash128 GetMaterialHash(Material baseMaterial)
		{
			if (!base.isActiveAndEnabled)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			BaseMaterialEffect matEffect = targetEffect as BaseMaterialEffect;
			if (!matEffect || !matEffect.isActiveAndEnabled)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			return matEffect.GetMaterialHash(baseMaterial);
		}

		public override void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			if (base.isActiveAndEnabled)
			{
				BaseMaterialEffect matEffect = targetEffect as BaseMaterialEffect;
				if ((bool)matEffect && matEffect.isActiveAndEnabled)
				{
					matEffect.ModifyMaterial(newMaterial, graphic);
				}
			}
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (base.isActiveAndEnabled && (bool)targetEffect && targetEffect.isActiveAndEnabled)
			{
				targetEffect.ModifyMesh(vh, graphic);
			}
		}
	}
}
