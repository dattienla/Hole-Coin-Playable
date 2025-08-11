using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[AddComponentMenu("UI/UIEffects/UIHsvModifier", 4)]
	public class UIHsvModifier : BaseMaterialEffect
	{
		private const uint k_ShaderId = 48u;

		private static readonly ParameterTexture s_ParamTex = new ParameterTexture(7, 128, "_ParamTex");

		[Header("Target")]
		[Tooltip("Target color to affect hsv shift.")]
		[SerializeField]
		[ColorUsage(false)]
		private Color m_TargetColor = Color.red;

		[Tooltip("Color range to affect hsv shift [0 ~ 1].")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_Range = 0.1f;

		[Header("Adjustment")]
		[Tooltip("Hue shift [-0.5 ~ 0.5].")]
		[SerializeField]
		[Range(-0.5f, 0.5f)]
		private float m_Hue;

		[Tooltip("Saturation shift [-0.5 ~ 0.5].")]
		[SerializeField]
		[Range(-0.5f, 0.5f)]
		private float m_Saturation;

		[Tooltip("Value shift [-0.5 ~ 0.5].")]
		[SerializeField]
		[Range(-0.5f, 0.5f)]
		private float m_Value;

		public Color targetColor
		{
			get
			{
				return m_TargetColor;
			}
			set
			{
				if (!(m_TargetColor == value))
				{
					m_TargetColor = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float range
		{
			get
			{
				return m_Range;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_Range, value))
				{
					m_Range = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float saturation
		{
			get
			{
				return m_Saturation;
			}
			set
			{
				value = Mathf.Clamp(value, -0.5f, 0.5f);
				if (!Mathf.Approximately(m_Saturation, value))
				{
					m_Saturation = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float value
		{
			get
			{
				return m_Value;
			}
			set
			{
				value = Mathf.Clamp(value, -0.5f, 0.5f);
				if (!Mathf.Approximately(m_Value, value))
				{
					m_Value = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float hue
		{
			get
			{
				return m_Hue;
			}
			set
			{
				value = Mathf.Clamp(value, -0.5f, 0.5f);
				if (!Mathf.Approximately(m_Hue, value))
				{
					m_Hue = value;
					SetEffectParamsDirty();
				}
			}
		}

		public override ParameterTexture paramTex => s_ParamTex;

		public override Hash128 GetMaterialHash(Material material)
		{
			if (!base.isActiveAndEnabled || !material || !material.shader)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			return new Hash128((uint)material.GetInstanceID(), 48u, 0u, 0u);
		}

		public override void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			GraphicConnector connector = GraphicConnector.FindConnector(graphic);
			newMaterial.shader = Shader.Find($"Hidden/{newMaterial.shader.name} (UIHsvModifier)");
			paramTex.RegisterMaterial(newMaterial);
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (base.isActiveAndEnabled)
			{
				float normalizedIndex = paramTex.GetNormalizedIndex(this);
				UIVertex vertex = default(UIVertex);
				int count = vh.currentVertCount;
				for (int i = 0; i < count; i++)
				{
					vh.PopulateUIVertex(ref vertex, i);
					vertex.uv0 = new Vector2(Packer.ToFloat(vertex.uv0.x, vertex.uv0.y), normalizedIndex);
					vh.SetUIVertex(vertex, i);
				}
			}
		}

		protected override void SetEffectParamsDirty()
		{
			Color.RGBToHSV(m_TargetColor, out var h, out var s, out var v);
			paramTex.SetData(this, 0, h);
			paramTex.SetData(this, 1, s);
			paramTex.SetData(this, 2, v);
			paramTex.SetData(this, 3, m_Range);
			paramTex.SetData(this, 4, m_Hue + 0.5f);
			paramTex.SetData(this, 5, m_Saturation + 0.5f);
			paramTex.SetData(this, 6, m_Value + 0.5f);
		}
	}
}
