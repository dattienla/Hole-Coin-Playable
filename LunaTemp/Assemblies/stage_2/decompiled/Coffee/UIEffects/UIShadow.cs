using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[RequireComponent(typeof(Graphic))]
	[AddComponentMenu("UI/UIEffects/UIShadow", 100)]
	public class UIShadow : BaseMeshEffect, IParameterTexture
	{
		private static readonly List<UIShadow> tmpShadows = new List<UIShadow>();

		private static readonly List<UIVertex> s_Verts = new List<UIVertex>(4096);

		private int _graphicVertexCount;

		private UIEffect _uiEffect;

		[Tooltip("How far is the blurring shadow from the graphic.")]
		[FormerlySerializedAs("m_Blur")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_BlurFactor = 1f;

		[Tooltip("Shadow effect style.")]
		[SerializeField]
		private ShadowStyle m_Style = ShadowStyle.Shadow;

		[SerializeField]
		private Color m_EffectColor = new Color(0f, 0f, 0f, 0.5f);

		[SerializeField]
		private Vector2 m_EffectDistance = new Vector2(1f, -1f);

		[SerializeField]
		private bool m_UseGraphicAlpha = true;

		private const float kMaxEffectDistance = 600f;

		public Color effectColor
		{
			get
			{
				return m_EffectColor;
			}
			set
			{
				if (!(m_EffectColor == value))
				{
					m_EffectColor = value;
					SetVerticesDirty();
				}
			}
		}

		public Vector2 effectDistance
		{
			get
			{
				return m_EffectDistance;
			}
			set
			{
				if (value.x > 600f)
				{
					value.x = 600f;
				}
				if (value.x < -600f)
				{
					value.x = -600f;
				}
				if (value.y > 600f)
				{
					value.y = 600f;
				}
				if (value.y < -600f)
				{
					value.y = -600f;
				}
				if (!(m_EffectDistance == value))
				{
					m_EffectDistance = value;
					SetEffectParamsDirty();
				}
			}
		}

		public bool useGraphicAlpha
		{
			get
			{
				return m_UseGraphicAlpha;
			}
			set
			{
				if (m_UseGraphicAlpha != value)
				{
					m_UseGraphicAlpha = value;
					SetEffectParamsDirty();
				}
			}
		}

		public float blurFactor
		{
			get
			{
				return m_BlurFactor;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 2f);
				if (!Mathf.Approximately(m_BlurFactor, value))
				{
					m_BlurFactor = value;
					SetEffectParamsDirty();
				}
			}
		}

		public ShadowStyle style
		{
			get
			{
				return m_Style;
			}
			set
			{
				if (m_Style != value)
				{
					m_Style = value;
					SetEffectParamsDirty();
				}
			}
		}

		public int parameterIndex { get; set; }

		public ParameterTexture paramTex { get; private set; }

		protected override void OnEnable()
		{
			base.OnEnable();
			_uiEffect = GetComponent<UIEffect>();
			if ((bool)_uiEffect)
			{
				paramTex = _uiEffect.paramTex;
				paramTex.Register(this);
			}
		}

		protected override void OnDisable()
		{
			base.OnDisable();
			_uiEffect = null;
			if (paramTex != null)
			{
				paramTex.Unregister(this);
				paramTex = null;
			}
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (!base.isActiveAndEnabled || vh.currentVertCount <= 0 || m_Style == ShadowStyle.None)
			{
				return;
			}
			vh.GetUIVertexStream(s_Verts);
			GetComponents(tmpShadows);
			foreach (UIShadow s in tmpShadows)
			{
				if (!s.isActiveAndEnabled)
				{
					continue;
				}
				if (!(s == this))
				{
					break;
				}
				foreach (UIShadow s2 in tmpShadows)
				{
					s2._graphicVertexCount = s_Verts.Count;
				}
				break;
			}
			tmpShadows.Clear();
			_uiEffect = (_uiEffect ? _uiEffect : GetComponent<UIEffect>());
			int start = s_Verts.Count - _graphicVertexCount;
			int end = s_Verts.Count;
			if (paramTex != null && (bool)_uiEffect && _uiEffect.isActiveAndEnabled)
			{
				paramTex.SetData(this, 0, _uiEffect.effectFactor);
				paramTex.SetData(this, 1, byte.MaxValue);
				paramTex.SetData(this, 2, m_BlurFactor);
			}
			ApplyShadow(s_Verts, effectColor, ref start, ref end, effectDistance, style, useGraphicAlpha);
			vh.Clear();
			vh.AddUIVertexTriangleStream(s_Verts);
			s_Verts.Clear();
		}

		private void ApplyShadow(List<UIVertex> verts, Color color, ref int start, ref int end, Vector2 distance, ShadowStyle style, bool alpha)
		{
			if (style != 0 && !(color.a <= 0f))
			{
				float x = distance.x;
				float y = distance.y;
				ApplyShadowZeroAlloc(verts, color, ref start, ref end, x, y, alpha);
				switch (style)
				{
				case ShadowStyle.Shadow3:
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, x, 0f, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f, y, alpha);
					break;
				case ShadowStyle.Outline:
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, x, 0f - y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f - x, y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f - x, 0f - y, alpha);
					break;
				case ShadowStyle.Outline8:
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, x, 0f - y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f - x, y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f - x, 0f - y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f - x, 0f, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f, 0f - y, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, x, 0f, alpha);
					ApplyShadowZeroAlloc(verts, color, ref start, ref end, 0f, y, alpha);
					break;
				}
			}
		}

		private void ApplyShadowZeroAlloc(List<UIVertex> verts, Color color, ref int start, ref int end, float x, float y, bool alpha)
		{
			int count = end - start;
			int neededCapacity = verts.Count + count;
			if (verts.Capacity < neededCapacity)
			{
				verts.Capacity *= 2;
			}
			float normalizedIndex = ((paramTex != null && (bool)_uiEffect && _uiEffect.isActiveAndEnabled) ? paramTex.GetNormalizedIndex(this) : (-1f));
			UIVertex vt = default(UIVertex);
			for (int k = 0; k < count; k++)
			{
				verts.Add(vt);
			}
			int j = verts.Count - 1;
			while (count <= j)
			{
				verts[j] = verts[j - count];
				j--;
			}
			for (int i = 0; i < count; i++)
			{
				vt = verts[i + start + count];
				Vector3 v = vt.position;
				vt.position.Set(v.x + x, v.y + y, v.z);
				Color vertColor = effectColor;
				vertColor.a = (alpha ? (color.a * (float)(int)vt.color.a / 255f) : color.a);
				vt.color = vertColor;
				if (0f <= normalizedIndex)
				{
					vt.uv0 = new Vector2(vt.uv0.x, normalizedIndex);
				}
				verts[i] = vt;
			}
			start = end;
			end = verts.Count;
		}
	}
}
