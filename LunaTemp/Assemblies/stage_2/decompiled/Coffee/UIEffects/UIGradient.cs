using System;
using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[DisallowMultipleComponent]
	[AddComponentMenu("UI/UIEffects/UIGradient", 101)]
	public class UIGradient : BaseMeshEffect
	{
		public enum Direction
		{
			Horizontal,
			Vertical,
			Angle,
			Diagonal
		}

		public enum GradientStyle
		{
			Rect,
			Fit,
			Split
		}

		private static readonly Vector2[] s_SplitedCharacterPosition = new Vector2[4]
		{
			Vector2.up,
			Vector2.one,
			Vector2.right,
			Vector2.zero
		};

		[Tooltip("Gradient Direction.")]
		[SerializeField]
		private Direction m_Direction;

		[Tooltip("Color1: Top or Left.")]
		[SerializeField]
		private Color m_Color1 = Color.white;

		[Tooltip("Color2: Bottom or Right.")]
		[SerializeField]
		private Color m_Color2 = Color.white;

		[Tooltip("Color3: For diagonal.")]
		[SerializeField]
		private Color m_Color3 = Color.white;

		[Tooltip("Color4: For diagonal.")]
		[SerializeField]
		private Color m_Color4 = Color.white;

		[Tooltip("Gradient rotation.")]
		[SerializeField]
		[Range(-180f, 180f)]
		private float m_Rotation;

		[Tooltip("Gradient offset for Horizontal, Vertical or Angle.")]
		[SerializeField]
		[Range(-1f, 1f)]
		private float m_Offset1;

		[Tooltip("Gradient offset for Diagonal.")]
		[SerializeField]
		[Range(-1f, 1f)]
		private float m_Offset2;

		[Tooltip("Gradient style for Text.")]
		[SerializeField]
		private GradientStyle m_GradientStyle;

		[Tooltip("Color space to correct color.")]
		[SerializeField]
		private ColorSpace m_ColorSpace = ColorSpace.Uninitialized;

		[Tooltip("Ignore aspect ratio.")]
		[SerializeField]
		private bool m_IgnoreAspectRatio = true;

		public Direction direction
		{
			get
			{
				return m_Direction;
			}
			set
			{
				if (m_Direction != value)
				{
					m_Direction = value;
					SetVerticesDirty();
				}
			}
		}

		public Color color1
		{
			get
			{
				return m_Color1;
			}
			set
			{
				if (!(m_Color1 == value))
				{
					m_Color1 = value;
					SetVerticesDirty();
				}
			}
		}

		public Color color2
		{
			get
			{
				return m_Color2;
			}
			set
			{
				if (!(m_Color2 == value))
				{
					m_Color2 = value;
					SetVerticesDirty();
				}
			}
		}

		public Color color3
		{
			get
			{
				return m_Color3;
			}
			set
			{
				if (!(m_Color3 == value))
				{
					m_Color3 = value;
					SetVerticesDirty();
				}
			}
		}

		public Color color4
		{
			get
			{
				return m_Color4;
			}
			set
			{
				if (!(m_Color4 == value))
				{
					m_Color4 = value;
					SetVerticesDirty();
				}
			}
		}

		public float rotation
		{
			get
			{
				return (m_Direction == Direction.Horizontal) ? (-90f) : ((m_Direction == Direction.Vertical) ? 0f : m_Rotation);
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

		public float offset
		{
			get
			{
				return m_Offset1;
			}
			set
			{
				if (!Mathf.Approximately(m_Offset1, value))
				{
					m_Offset1 = value;
					SetVerticesDirty();
				}
			}
		}

		public Vector2 offset2
		{
			get
			{
				return new Vector2(m_Offset2, m_Offset1);
			}
			set
			{
				if (!Mathf.Approximately(m_Offset1, value.y) || !Mathf.Approximately(m_Offset2, value.x))
				{
					m_Offset1 = value.y;
					m_Offset2 = value.x;
					SetVerticesDirty();
				}
			}
		}

		public GradientStyle gradientStyle
		{
			get
			{
				return m_GradientStyle;
			}
			set
			{
				if (m_GradientStyle != value)
				{
					m_GradientStyle = value;
					SetVerticesDirty();
				}
			}
		}

		public ColorSpace colorSpace
		{
			get
			{
				return m_ColorSpace;
			}
			set
			{
				if (m_ColorSpace != value)
				{
					m_ColorSpace = value;
					SetVerticesDirty();
				}
			}
		}

		public bool ignoreAspectRatio
		{
			get
			{
				return m_IgnoreAspectRatio;
			}
			set
			{
				if (m_IgnoreAspectRatio != value)
				{
					m_IgnoreAspectRatio = value;
					SetVerticesDirty();
				}
			}
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (!base.isActiveAndEnabled)
			{
				return;
			}
			Rect rect = default(Rect);
			UIVertex vertex = default(UIVertex);
			switch (m_GradientStyle)
			{
			case GradientStyle.Rect:
				rect = graphic.rectTransform.rect;
				break;
			case GradientStyle.Split:
				rect.Set(0f, 0f, 1f, 1f);
				break;
			case GradientStyle.Fit:
			{
				float num3 = (rect.xMin = (rect.yMin = float.MaxValue));
				num3 = (rect.xMax = (rect.yMax = float.MinValue));
				for (int j = 0; j < vh.currentVertCount; j++)
				{
					vh.PopulateUIVertex(ref vertex, j);
					rect.xMin = Mathf.Min(rect.xMin, vertex.position.x);
					rect.yMin = Mathf.Min(rect.yMin, vertex.position.y);
					rect.xMax = Mathf.Max(rect.xMax, vertex.position.x);
					rect.yMax = Mathf.Max(rect.yMax, vertex.position.y);
				}
				break;
			}
			}
			float rad = rotation * (3.14159265f / 180f);
			Vector2 dir = new Vector2(Mathf.Cos(rad), Mathf.Sin(rad));
			if (!m_IgnoreAspectRatio && Direction.Angle <= m_Direction)
			{
				dir.x *= rect.height / rect.width;
				dir = dir.normalized;
			}
			Matrix2x3 localMatrix = new Matrix2x3(rect, dir.x, dir.y);
			for (int i = 0; i < vh.currentVertCount; i++)
			{
				vh.PopulateUIVertex(ref vertex, i);
				Vector2 normalizedPos = ((m_GradientStyle != GradientStyle.Split) ? (localMatrix * vertex.position + offset2) : (localMatrix * s_SplitedCharacterPosition[i % 4] + offset2));
				Color color = ((direction != Direction.Diagonal) ? Color.LerpUnclamped(m_Color2, m_Color1, normalizedPos.y) : Color.LerpUnclamped(Color.LerpUnclamped(m_Color1, m_Color2, normalizedPos.x), Color.LerpUnclamped(m_Color3, m_Color4, normalizedPos.x), normalizedPos.y));
				ref Color32 color2 = ref vertex.color;
				color2 *= ((m_ColorSpace == ColorSpace.Gamma) ? color.gamma : ((m_ColorSpace == ColorSpace.Linear) ? color.linear : color));
				vh.SetUIVertex(vertex, i);
			}
		}
	}
}
