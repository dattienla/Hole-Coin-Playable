using System;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.UI;

public class UIEffect_Demo_ColorControl : MonoBehaviour
{
	[Serializable]
	public class ColorEvent : UnityEvent<Color>
	{
	}

	[SerializeField]
	private Color m_Color;

	[SerializeField]
	private ColorEvent m_ColorEvent = new ColorEvent();

	private void Start()
	{
		Slider[] sliders = GetComponentsInChildren<Slider>();
		for (int i = 0; i < sliders.Length; i++)
		{
			int channel = i;
			if (channel == 0)
			{
				sliders[channel].value = m_Color.r;
			}
			else if (channel == 1)
			{
				sliders[channel].value = m_Color.g;
			}
			else if (channel == 2)
			{
				sliders[channel].value = m_Color.b;
			}
			else
			{
				sliders[channel].value = m_Color.a;
			}
			sliders[i].onValueChanged.AddListener(delegate(float value)
			{
				ChangeColor(channel, value);
			});
		}
	}

	private void ChangeColor(int channel, float value)
	{
		Color old = m_Color;
		switch (channel)
		{
		case 0:
			m_Color.r = value;
			break;
		case 1:
			m_Color.g = value;
			break;
		case 2:
			m_Color.b = value;
			break;
		default:
			m_Color.a = value;
			break;
		}
		if (old != m_Color)
		{
			m_ColorEvent.Invoke(m_Color);
		}
	}
}
