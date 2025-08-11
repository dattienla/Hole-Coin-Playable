using System;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[AddComponentMenu("UI/UIEffects/UIShiny", 2)]
	public class UIShiny : BaseMaterialEffect
	{
		private const uint k_ShaderId = 8u;

		private static readonly ParameterTexture s_ParamTex = new ParameterTexture(8, 128, "_ParamTex");

		private float _lastRotation;

		private EffectArea _lastEffectArea;

		[Tooltip("Location for shiny effect.")]
		[FormerlySerializedAs("m_Location")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_EffectFactor = 0.5f;

		[Tooltip("Width for shiny effect.")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_Width = 0.25f;

		[Tooltip("Rotation for shiny effect.")]
		[SerializeField]
		[Range(-180f, 180f)]
		private float m_Rotation = 135f;

		[Tooltip("Softness for shiny effect.")]
		[SerializeField]
		[Range(0.01f, 1f)]
		private float m_Softness = 1f;

		[Tooltip("Brightness for shiny effect.")]
		[FormerlySerializedAs("m_Alpha")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_Brightness = 1f;

		[Tooltip("Gloss factor for shiny effect.")]
		[FormerlySerializedAs("m_Highlight")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_Gloss = 1f;

		[Header("Advanced Option")]
		[Tooltip("The area for effect.")]
		[SerializeField]
		protected EffectArea m_EffectArea;

		[SerializeField]
		private EffectPlayer m_Player;

		public float effectFactor
		{
			get
			{
				return m_EffectFactor;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_EffectFactor, value))
				{
					m_EffectFactor = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float width
		{
			get
			{
				return m_Width;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_Width, value))
				{
					m_Width = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float softness
		{
			get
			{
				return m_Softness;
			}
			set
			{
				value = Mathf.Clamp(value, 0.01f, 1f);
				if (!Mathf.Approximately(m_Softness, value))
				{
					m_Softness = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float brightness
		{
			get
			{
				return m_Brightness;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_Brightness, value))
				{
					m_Brightness = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float gloss
		{
			get
			{
				return m_Gloss;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_Gloss, value))
				{
					m_Gloss = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float rotation
		{
			get
			{
				return m_Rotation;
			}
			set
			{
				if (!Mathf.Approximately(m_Rotation, value))
				{
					m_Rotation = value;
					SetVerticesDirty();
				}
			}
		}

		public EffectArea effectArea
		{
			get
			{
				return m_EffectArea;
			}
			set
			{
				if (m_EffectArea != value)
				{
					m_EffectArea = value;
					SetVerticesDirty();
				}
			}
		}

		public override ParameterTexture paramTex => s_ParamTex;

		public EffectPlayer effectPlayer => m_Player ?? (m_Player = new EffectPlayer());

		protected override void OnEnable()
		{
			base.OnEnable();
			effectPlayer.OnEnable(delegate(float f)
			{
				effectFactor = f;
			});
		}

		protected override void OnDisable()
		{
			base.OnDisable();
			effectPlayer.OnDisable();
		}

		public override Hash128 GetMaterialHash(Material material)
		{
			if (!base.isActiveAndEnabled || !material || !material.shader)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			return new Hash128((uint)material.GetInstanceID(), 8u, 0u, 0u);
		}

		public override void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			GraphicConnector connector = GraphicConnector.FindConnector(graphic);
			newMaterial.shader = Shader.Find($"Hidden/{newMaterial.shader.name} (UIShiny)");
			paramTex.RegisterMaterial(newMaterial);
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (base.isActiveAndEnabled)
			{
				float normalizedIndex = paramTex.GetNormalizedIndex(this);
				Rect rect = m_EffectArea.GetEffectArea(vh, base.rectTransform.rect);
				float rad = m_Rotation * (3.14159265f / 180f);
				Vector2 dir = new Vector2(Mathf.Cos(rad), Mathf.Sin(rad));
				dir.x *= rect.height / rect.width;
				dir = dir.normalized;
				UIVertex vertex = default(UIVertex);
				Matrix2x3 localMatrix = new Matrix2x3(rect, dir.x, dir.y);
				for (int i = 0; i < vh.currentVertCount; i++)
				{
					vh.PopulateUIVertex(ref vertex, i);
					base.connector.GetNormalizedFactor(m_EffectArea, i, localMatrix, vertex.position, out var normalizedPos);
					vertex.uv0 = new Vector2(Packer.ToFloat(vertex.uv0.x, vertex.uv0.y), Packer.ToFloat(normalizedPos.y, normalizedIndex));
					vh.SetUIVertex(vertex, i);
				}
			}
		}

		public void Play(bool reset = true)
		{
			effectPlayer.Play(reset);
		}

		public void Stop(bool reset = true)
		{
			effectPlayer.Stop(reset);
		}

		protected override void SetEffectParamsDirty()
		{
			paramTex.SetData(this, 0, m_EffectFactor);
			paramTex.SetData(this, 1, m_Width);
			paramTex.SetData(this, 2, m_Softness);
			paramTex.SetData(this, 3, m_Brightness);
			paramTex.SetData(this, 4, m_Gloss);
		}

		protected override void SetVerticesDirty()
		{
			base.SetVerticesDirty();
			_lastRotation = m_Rotation;
			_lastEffectArea = m_EffectArea;
		}

		protected override void OnDidApplyAnimationProperties()
		{
			base.OnDidApplyAnimationProperties();
			if (!Mathf.Approximately(_lastRotation, m_Rotation) || _lastEffectArea != m_EffectArea)
			{
				SetVerticesDirty();
			}
		}
	}
}
