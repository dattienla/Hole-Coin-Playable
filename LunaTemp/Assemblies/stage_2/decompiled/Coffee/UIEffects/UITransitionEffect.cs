using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[AddComponentMenu("UI/UIEffects/UITransitionEffect", 5)]
	public class UITransitionEffect : BaseMaterialEffect
	{
		public enum EffectMode
		{
			Fade = 1,
			Cutoff,
			Dissolve
		}

		private const uint k_ShaderId = 40u;

		private static readonly int k_TransitionTexId = Shader.PropertyToID("_TransitionTex");

		private static readonly ParameterTexture s_ParamTex = new ParameterTexture(8, 128, "_ParamTex");

		private bool _lastKeepAspectRatio;

		private static Texture _defaultTransitionTexture;

		[Tooltip("Effect mode.")]
		[SerializeField]
		private EffectMode m_EffectMode = EffectMode.Cutoff;

		[Tooltip("Effect factor between 0(hidden) and 1(shown).")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_EffectFactor = 0.5f;

		[Tooltip("Transition texture (single channel texture).")]
		[SerializeField]
		private Texture m_TransitionTexture;

		[Header("Advanced Option")]
		[Tooltip("The area for effect.")]
		[SerializeField]
		private EffectArea m_EffectArea = EffectArea.RectTransform;

		[Tooltip("Keep effect aspect ratio.")]
		[SerializeField]
		private bool m_KeepAspectRatio;

		[Tooltip("Dissolve edge width.")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_DissolveWidth = 0.5f;

		[Tooltip("Dissolve edge softness.")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_DissolveSoftness = 0.5f;

		[Tooltip("Dissolve edge color.")]
		[SerializeField]
		[ColorUsage(false)]
		private Color m_DissolveColor = new Color(0f, 0.25f, 1f);

		[Tooltip("Disable the graphic's raycast target on hidden.")]
		[SerializeField]
		private bool m_PassRayOnHidden;

		[Header("Effect Player")]
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

		public Texture transitionTexture
		{
			get
			{
				return m_TransitionTexture ? m_TransitionTexture : defaultTransitionTexture;
			}
			set
			{
				if (!(m_TransitionTexture == value))
				{
					m_TransitionTexture = value;
					SetMaterialDirty();
				}
			}
		}

		private static Texture defaultTransitionTexture => _defaultTransitionTexture ? _defaultTransitionTexture : (_defaultTransitionTexture = Resources.Load<Texture>("Default-Transition"));

		public EffectMode effectMode
		{
			get
			{
				return m_EffectMode;
			}
			set
			{
				if (m_EffectMode != value)
				{
					m_EffectMode = value;
					SetMaterialDirty();
				}
			}
		}

		public bool keepAspectRatio
		{
			get
			{
				return m_KeepAspectRatio;
			}
			set
			{
				if (m_KeepAspectRatio != value)
				{
					m_KeepAspectRatio = value;
					SetVerticesDirty();
				}
			}
		}

		public override ParameterTexture paramTex => s_ParamTex;

		public float dissolveWidth
		{
			get
			{
				return m_DissolveWidth;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_DissolveWidth, value))
				{
					m_DissolveWidth = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float dissolveSoftness
		{
			get
			{
				return m_DissolveSoftness;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_DissolveSoftness, value))
				{
					m_DissolveSoftness = value;
					SetEffectParamsDirty();
				}
			}
		}

		public Color dissolveColor
		{
			get
			{
				return m_DissolveColor;
			}
			set
			{
				if (!(m_DissolveColor == value))
				{
					m_DissolveColor = value;
					SetEffectParamsDirty();
				}
			}
		}

		public bool passRayOnHidden
		{
			get
			{
				return m_PassRayOnHidden;
			}
			set
			{
				m_PassRayOnHidden = value;
			}
		}

		public EffectPlayer effectPlayer => m_Player ?? (m_Player = new EffectPlayer());

		public void Show(bool reset = true)
		{
			effectPlayer.loop = false;
			effectPlayer.Play(reset, delegate(float f)
			{
				effectFactor = f;
			});
		}

		public void Hide(bool reset = true)
		{
			effectPlayer.loop = false;
			effectPlayer.Play(reset, delegate(float f)
			{
				effectFactor = 1f - f;
			});
		}

		public override Hash128 GetMaterialHash(Material material)
		{
			if (!base.isActiveAndEnabled || !material || !material.shader)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			uint shaderVariantId = (uint)((int)m_EffectMode << 6);
			uint resourceId = (uint)transitionTexture.GetInstanceID();
			return new Hash128((uint)material.GetInstanceID(), 40 + shaderVariantId, resourceId, 0u);
		}

		public override void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			GraphicConnector connector = GraphicConnector.FindConnector(graphic);
			newMaterial.shader = Shader.Find($"Hidden/{newMaterial.shader.name} (UITransition)");
			SetShaderVariants(newMaterial, m_EffectMode);
			newMaterial.SetTexture(k_TransitionTexId, transitionTexture);
			paramTex.RegisterMaterial(newMaterial);
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (base.isActiveAndEnabled)
			{
				float normalizedIndex = paramTex.GetNormalizedIndex(this);
				Texture tex = transitionTexture;
				float aspectRatio = ((m_KeepAspectRatio && (bool)tex) ? ((float)tex.width / (float)tex.height) : (-1f));
				Rect rect = m_EffectArea.GetEffectArea(vh, base.rectTransform.rect, aspectRatio);
				UIVertex vertex = default(UIVertex);
				int count = vh.currentVertCount;
				for (int i = 0; i < count; i++)
				{
					vh.PopulateUIVertex(ref vertex, i);
					base.connector.GetPositionFactor(m_EffectArea, i, rect, vertex.position, out var x, out var y);
					vertex.uv0 = new Vector2(Packer.ToFloat(vertex.uv0.x, vertex.uv0.y), Packer.ToFloat(x, y, normalizedIndex));
					vh.SetUIVertex(vertex, i);
				}
			}
		}

		protected override void OnEnable()
		{
			base.OnEnable();
			effectPlayer.OnEnable();
			effectPlayer.loop = false;
		}

		protected override void OnDisable()
		{
			base.OnDisable();
			effectPlayer.OnDisable();
		}

		protected override void SetEffectParamsDirty()
		{
			paramTex.SetData(this, 0, m_EffectFactor);
			if (m_EffectMode == EffectMode.Dissolve)
			{
				paramTex.SetData(this, 1, m_DissolveWidth);
				paramTex.SetData(this, 2, m_DissolveSoftness);
				paramTex.SetData(this, 4, m_DissolveColor.r);
				paramTex.SetData(this, 5, m_DissolveColor.g);
				paramTex.SetData(this, 6, m_DissolveColor.b);
			}
			if (m_PassRayOnHidden)
			{
				base.graphic.raycastTarget = 0f < m_EffectFactor;
			}
		}

		protected override void SetVerticesDirty()
		{
			base.SetVerticesDirty();
			_lastKeepAspectRatio = m_KeepAspectRatio;
		}

		protected override void OnDidApplyAnimationProperties()
		{
			base.OnDidApplyAnimationProperties();
			if (_lastKeepAspectRatio != m_KeepAspectRatio)
			{
				SetVerticesDirty();
			}
		}
	}
}
