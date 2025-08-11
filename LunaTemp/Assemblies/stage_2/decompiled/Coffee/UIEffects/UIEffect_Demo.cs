using UnityEngine;
using UnityEngine.UI;

namespace Coffee.UIEffects
{
	public class UIEffect_Demo : MonoBehaviour
	{
		private void Start()
		{
			GetComponentInChildren<RectMask2D>().enabled = true;
		}

		public void SetTimeScale(float scale)
		{
			Time.timeScale = scale;
		}

		public void Open(Animator anim)
		{
			anim.gameObject.SetActive(true);
			anim.SetTrigger("Open");
		}

		public void Close(Animator anim)
		{
			anim.SetTrigger("Close");
		}

		public void Capture(Animator anim)
		{
			anim.SetTrigger("Capture");
		}

		public void SetCanvasOverlay(bool isOverlay)
		{
			GetComponent<Canvas>().renderMode = ((!isOverlay) ? RenderMode.ScreenSpaceCamera : RenderMode.ScreenSpaceOverlay);
		}

		public void SetRenderMode(int mode)
		{
			Canvas canvas = GetComponent<Canvas>();
			Camera cam = canvas.worldCamera;
			Vector3 pos = new Vector3(0f, 0f, -25f);
			Vector3 rot = new Vector3(0f, 0f, 0f);
			if (mode == 2)
			{
				SetRenderMode(1);
				canvas.renderMode = RenderMode.WorldSpace;
				pos.x = 45f;
				rot.y = -20f;
			}
			else
			{
				canvas.renderMode = (RenderMode)mode;
			}
			cam.transform.SetPositionAndRotation(pos, Quaternion.Euler(rot));
		}
	}
}
