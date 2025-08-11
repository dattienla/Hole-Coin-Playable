using System.Reflection;
using UnityEngine;

public class UIEffect_Demo_PropertyControl : MonoBehaviour
{
	[SerializeField]
	private string m_PropertyName;

	[SerializeField]
	private Object[] m_Objects;

	public void ChangeValue(int value)
	{
		Object[] objects = m_Objects;
		foreach (Object o in objects)
		{
			if ((bool)o)
			{
				PropertyInfo p = o.GetType().GetProperty(m_PropertyName);
				Debug.LogFormat("{0} {1} {2}", o.GetType(), m_PropertyName, p);
				if (!(p == null))
				{
					p.SetValue(o, value, new object[0]);
				}
			}
		}
	}
}
