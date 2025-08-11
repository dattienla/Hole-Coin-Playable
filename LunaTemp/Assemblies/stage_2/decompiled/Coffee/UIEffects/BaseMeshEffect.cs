using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	[RequireComponent(typeof(Graphic))]
	[RequireComponent(typeof(RectTransform))]
	[ExecuteInEditMode]
	public abstract class BaseMeshEffect : UIBehaviour, IMeshModifier
	{
		private RectTransform _rectTransform;

		private Graphic _graphic;

		private GraphicConnector _connector;

		internal readonly List<UISyncEffect> syncEffects = new List<UISyncEffect>(0);

		protected GraphicConnector connector => _connector ?? (_connector = GraphicConnector.FindConnector(graphic));

		public Graphic graphic => _graphic ? _graphic : (_graphic = GetComponent<Graphic>());

		protected RectTransform rectTransform => _rectTransform ? _rectTransform : (_rectTransform = GetComponent<RectTransform>());

		public virtual void ModifyMesh(Mesh mesh)
		{
		}

		public virtual void ModifyMesh(VertexHelper vh)
		{
			ModifyMesh(vh, graphic);
		}

		public virtual void ModifyMesh(VertexHelper vh, Graphic graphic)
		{
		}

		protected virtual void SetVerticesDirty()
		{
			connector.SetVerticesDirty(graphic);
			foreach (UISyncEffect effect in syncEffects)
			{
				effect.SetVerticesDirty();
			}
		}

		protected override void OnEnable()
		{
			connector.OnEnable(graphic);
			SetVerticesDirty();
		}

		protected override void OnDisable()
		{
			connector.OnDisable(graphic);
			SetVerticesDirty();
		}

		protected virtual void SetEffectParamsDirty()
		{
			if (base.isActiveAndEnabled)
			{
				SetVerticesDirty();
			}
		}

		protected override void OnDidApplyAnimationProperties()
		{
			if (base.isActiveAndEnabled)
			{
				SetEffectParamsDirty();
			}
		}
	}
}
