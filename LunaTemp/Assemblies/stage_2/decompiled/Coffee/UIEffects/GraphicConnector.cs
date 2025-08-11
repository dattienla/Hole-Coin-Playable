using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	public class GraphicConnector
	{
		private static readonly List<GraphicConnector> s_Connectors = new List<GraphicConnector>();

		private static readonly Dictionary<Type, GraphicConnector> s_ConnectorMap = new Dictionary<Type, GraphicConnector>();

		private static readonly GraphicConnector s_EmptyConnector = new GraphicConnector();

		protected virtual int priority => -1;

		public virtual AdditionalCanvasShaderChannels extraChannel => AdditionalCanvasShaderChannels.TexCoord1;

		[RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
		private static void Init()
		{
			AddConnector(new GraphicConnector());
		}

		protected static void AddConnector(GraphicConnector connector)
		{
			s_Connectors.Add(connector);
			s_Connectors.Sort((GraphicConnector x, GraphicConnector y) => y.priority - x.priority);
		}

		public static GraphicConnector FindConnector(Graphic graphic)
		{
			if (!graphic)
			{
				return s_EmptyConnector;
			}
			Type type = graphic.GetType();
			GraphicConnector connector = null;
			if (s_ConnectorMap.TryGetValue(type, out connector))
			{
				return connector;
			}
			foreach (GraphicConnector c in s_Connectors)
			{
				if (!c.IsValid(graphic))
				{
					continue;
				}
				s_ConnectorMap.Add(type, c);
				return c;
			}
			return s_EmptyConnector;
		}

		protected virtual bool IsValid(Graphic graphic)
		{
			return true;
		}

		public virtual Shader FindShader(string shaderName)
		{
			return Shader.Find("Hidden/" + shaderName);
		}

		public virtual void OnEnable(Graphic graphic)
		{
		}

		public virtual void OnDisable(Graphic graphic)
		{
		}

		public virtual void SetVerticesDirty(Graphic graphic)
		{
			if ((bool)graphic)
			{
				graphic.SetVerticesDirty();
			}
		}

		public virtual void SetMaterialDirty(Graphic graphic)
		{
			if ((bool)graphic)
			{
				graphic.SetMaterialDirty();
			}
		}

		public virtual void GetPositionFactor(EffectArea area, int index, Rect rect, Vector2 position, out float x, out float y)
		{
			if (area == EffectArea.Fit)
			{
				x = Mathf.Clamp01((position.x - rect.xMin) / rect.width);
				y = Mathf.Clamp01((position.y - rect.yMin) / rect.height);
			}
			else
			{
				x = Mathf.Clamp01(position.x / rect.width + 0.5f);
				y = Mathf.Clamp01(position.y / rect.height + 0.5f);
			}
		}

		public virtual bool IsText(Graphic graphic)
		{
			return (bool)graphic && graphic is Text;
		}

		public virtual void SetExtraChannel(ref UIVertex vertex, Vector2 value)
		{
			vertex.uv1 = value;
		}

		public virtual void GetNormalizedFactor(EffectArea area, int index, Matrix2x3 matrix, Vector2 position, out Vector2 normalizedPos)
		{
			normalizedPos = matrix * position;
		}
	}
}
