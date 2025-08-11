using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[ExecuteInEditMode]
	[RequireComponent(typeof(Graphic))]
	[DisallowMultipleComponent]
	[AddComponentMenu("UI/UIEffects/UIEffect", 1)]
	public class UIEffect : BaseMaterialEffect, IMaterialModifier
	{
		private enum BlurEx
		{
			None,
			Ex
		}

		private const uint k_ShaderId = 16u;

		private static readonly ParameterTexture s_ParamTex = new ParameterTexture(4, 1024, "_ParamTex");

		[FormerlySerializedAs("m_ToneLevel")]
		[Tooltip("Effect factor between 0(no effect) and 1(complete effect).")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_EffectFactor = 1f;

		[Tooltip("Color effect factor between 0(no effect) and 1(complete effect).")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_ColorFactor = 1f;

		[FormerlySerializedAs("m_Blur")]
		[Tooltip("How far is the blurring from the graphic.")]
		[SerializeField]
		[Range(0f, 1f)]
		private float m_BlurFactor = 1f;

		[FormerlySerializedAs("m_ToneMode")]
		[Tooltip("Effect mode")]
		[SerializeField]
		private EffectMode m_EffectMode = EffectMode.None;

		[Tooltip("Color effect mode")]
		[SerializeField]
		private ColorMode m_ColorMode = ColorMode.Multiply;

		[Tooltip("Blur effect mode")]
		[SerializeField]
		private BlurMode m_BlurMode = BlurMode.None;

		[Tooltip("Advanced blurring remove common artifacts in the blur effect for uGUI.")]
		[SerializeField]
		private bool m_AdvancedBlur = false;

		public AdditionalCanvasShaderChannels uvMaskChannel => base.connector.extraChannel;

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

		public float colorFactor
		{
			get
			{
				return m_ColorFactor;
			}
			set
			{
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_ColorFactor, value))
				{
					m_ColorFactor = value;
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
				value = Mathf.Clamp(value, 0f, 1f);
				if (!Mathf.Approximately(m_BlurFactor, value))
				{
					m_BlurFactor = value;
					SetEffectParamsDirty();
				}
			}
		}

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

		public ColorMode colorMode
		{
			get
			{
				return m_ColorMode;
			}
			set
			{
				if (m_ColorMode != value)
				{
					m_ColorMode = value;
					SetMaterialDirty();
				}
			}
		}

		public BlurMode blurMode
		{
			get
			{
				return m_BlurMode;
			}
			set
			{
				if (m_BlurMode != value)
				{
					m_BlurMode = value;
					SetMaterialDirty();
				}
			}
		}

		public override ParameterTexture paramTex => s_ParamTex;

		public bool advancedBlur
		{
			get
			{
				return m_AdvancedBlur;
			}
			set
			{
				if (m_AdvancedBlur != value)
				{
					m_AdvancedBlur = value;
					SetVerticesDirty();
					SetMaterialDirty();
				}
			}
		}

		public override Hash128 GetMaterialHash(Material material)
		{
			if (!base.isActiveAndEnabled || !material || !material.shader)
			{
				return BaseMaterialEffect.k_InvalidHash;
			}
			uint shaderVariantId = (uint)(((int)m_EffectMode << 6) + ((int)m_ColorMode << 9) + ((int)m_BlurMode << 11) + ((m_AdvancedBlur ? 1 : 0) << 13));
			return new Hash128((uint)material.GetInstanceID(), 16 + shaderVariantId, 0u, 0u);
		}

		public override void ModifyMaterial(Material newMaterial, Graphic graphic)
		{
			GraphicConnector connector = GraphicConnector.FindConnector(graphic);
			newMaterial.shader = Shader.Find($"Hidden/{newMaterial.shader.name} (UIEffect)");
			SetShaderVariants(newMaterial, m_EffectMode, m_ColorMode, m_BlurMode, m_AdvancedBlur ? BlurEx.Ex : BlurEx.None);
			paramTex.RegisterMaterial(newMaterial);
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (!base.isActiveAndEnabled)
			{
				return;
			}
			float normalizedIndex = paramTex.GetNormalizedIndex(this);
			if (m_BlurMode != 0 && advancedBlur)
			{
				vh.GetUIVertexStream(BaseMaterialEffect.s_TempVerts);
				vh.Clear();
				int count2 = BaseMaterialEffect.s_TempVerts.Count;
				int bundleSize = (base.connector.IsText(graphic) ? 6 : count2);
				Rect posBounds = default(Rect);
				Rect uvBounds = default(Rect);
				Vector3 size = default(Vector3);
				Vector3 tPos = default(Vector3);
				Vector3 tUV = default(Vector3);
				float expand = (float)blurMode * 6f * 2f;
				for (int j = 0; j < count2; j += bundleSize)
				{
					GetBounds(BaseMaterialEffect.s_TempVerts, j, bundleSize, ref posBounds, ref uvBounds, true);
					Vector2 uvMask = new Vector2(Packer.ToFloat(uvBounds.xMin, uvBounds.yMin), Packer.ToFloat(uvBounds.xMax, uvBounds.yMax));
					for (int k = 0; k < bundleSize; k += 6)
					{
						Vector3 cornerPos1 = BaseMaterialEffect.s_TempVerts[j + k + 1].position;
						Vector3 cornerPos2 = BaseMaterialEffect.s_TempVerts[j + k + 4].position;
						bool hasOuterEdge = bundleSize == 6 || !posBounds.Contains(cornerPos1) || !posBounds.Contains(cornerPos2);
						if (hasOuterEdge)
						{
							Vector3 cornerUv1 = BaseMaterialEffect.s_TempVerts[j + k + 1].uv0;
							Vector3 cornerUv2 = BaseMaterialEffect.s_TempVerts[j + k + 4].uv0;
							Vector3 centerPos = (cornerPos1 + cornerPos2) / 2f;
							Vector3 centerUV = (cornerUv1 + cornerUv2) / 2f;
							size = cornerPos1 - cornerPos2;
							size.x = 1f + expand / Mathf.Abs(size.x);
							size.y = 1f + expand / Mathf.Abs(size.y);
							size.z = 1f + expand / Mathf.Abs(size.z);
							tPos = centerPos - Vector3.Scale(size, centerPos);
							tUV = centerUV - Vector3.Scale(size, centerUV);
						}
						for (int l = 0; l < 6; l++)
						{
							UIVertex vt2 = BaseMaterialEffect.s_TempVerts[j + k + l];
							Vector3 pos = vt2.position;
							Vector2 uv = vt2.uv0;
							if (hasOuterEdge && (pos.x < posBounds.xMin || posBounds.xMax < pos.x))
							{
								pos.x = pos.x * size.x + tPos.x;
								uv.x = uv.x * size.x + tUV.x;
							}
							if (hasOuterEdge && (pos.y < posBounds.yMin || posBounds.yMax < pos.y))
							{
								pos.y = pos.y * size.y + tPos.y;
								uv.y = uv.y * size.y + tUV.y;
							}
							vt2.uv0 = new Vector2(Packer.ToFloat((uv.x + 0.5f) / 2f, (uv.y + 0.5f) / 2f), normalizedIndex);
							vt2.position = pos;
							base.connector.SetExtraChannel(ref vt2, uvMask);
							BaseMaterialEffect.s_TempVerts[j + k + l] = vt2;
						}
					}
				}
				vh.AddUIVertexTriangleStream(BaseMaterialEffect.s_TempVerts);
				BaseMaterialEffect.s_TempVerts.Clear();
			}
			else
			{
				int count = vh.currentVertCount;
				UIVertex vt = default(UIVertex);
				for (int i = 0; i < count; i++)
				{
					vh.PopulateUIVertex(ref vt, i);
					Vector2 uv0 = vt.uv0;
					vt.uv0 = new Vector2(Packer.ToFloat((uv0.x + 0.5f) / 2f, (uv0.y + 0.5f) / 2f), normalizedIndex);
					vh.SetUIVertex(vt, i);
				}
			}
		}

		protected override void SetEffectParamsDirty()
		{
			paramTex.SetData(this, 0, m_EffectFactor);
			paramTex.SetData(this, 1, m_ColorFactor);
			paramTex.SetData(this, 2, m_BlurFactor);
		}

		private static void GetBounds(List<UIVertex> verts, int start, int count, ref Rect posBounds, ref Rect uvBounds, bool global)
		{
			Vector2 minPos = new Vector2(float.MaxValue, float.MaxValue);
			Vector2 maxPos = new Vector2(float.MinValue, float.MinValue);
			Vector2 minUV = new Vector2(float.MaxValue, float.MaxValue);
			Vector2 maxUV = new Vector2(float.MinValue, float.MinValue);
			for (int i = start; i < start + count; i++)
			{
				UIVertex vt = verts[i];
				Vector2 uv = vt.uv0;
				Vector3 pos = vt.position;
				if (minPos.x >= pos.x && minPos.y >= pos.y)
				{
					minPos = pos;
				}
				else if (maxPos.x <= pos.x && maxPos.y <= pos.y)
				{
					maxPos = pos;
				}
				if (minUV.x >= uv.x && minUV.y >= uv.y)
				{
					minUV = uv;
				}
				else if (maxUV.x <= uv.x && maxUV.y <= uv.y)
				{
					maxUV = uv;
				}
			}
			posBounds.Set(minPos.x + 0.001f, minPos.y + 0.001f, maxPos.x - minPos.x - 0.002f, maxPos.y - minPos.y - 0.002f);
			uvBounds.Set(minUV.x, minUV.y, maxUV.x - minUV.x, maxUV.y - minUV.y);
		}
	}
}
