using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[DisallowMultipleComponent]
	[AddComponentMenu("UI/UIEffects/UIFlip", 102)]
	public class UIFlip : BaseMeshEffect
	{
		[Tooltip("Flip horizontally.")]
		[SerializeField]
		private bool m_Horizontal = false;

		[Tooltip("Flip vertically.")]
		[SerializeField]
		private bool m_Veritical = false;

		public bool horizontal
		{
			get
			{
				return m_Horizontal;
			}
			set
			{
				if (m_Horizontal != value)
				{
					m_Horizontal = value;
					SetEffectParamsDirty();
				}
			}
		}

		public bool vertical
		{
			get
			{
				return m_Veritical;
			}
			set
			{
				if (m_Veritical != value)
				{
					m_Veritical = value;
					SetEffectParamsDirty();
				}
			}
		}

		public override void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
			if (base.isActiveAndEnabled)
			{
				UIVertex vt = default(UIVertex);
				for (int i = 0; i < vh.currentVertCount; i++)
				{
					vh.PopulateUIVertex(ref vt, i);
					Vector3 pos = vt.position;
					vt.position = new Vector3(m_Horizontal ? (0f - pos.x) : pos.x, m_Veritical ? (0f - pos.y) : pos.y);
					vh.SetUIVertex(vt, i);
				}
			}
		}
	}
}
