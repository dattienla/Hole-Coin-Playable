using UnityEngine;

namespace Coffee.UIEffects
{
	public struct Matrix2x3
	{
		public float m00;

		public float m01;

		public float m02;

		public float m10;

		public float m11;

		public float m12;

		public Matrix2x3(Rect rect, float cos, float sin)
		{
			float dx = (0f - rect.xMin) / rect.width - 0.5f;
			float dy = (0f - rect.yMin) / rect.height - 0.5f;
			m00 = cos / rect.width;
			m01 = (0f - sin) / rect.height;
			m02 = dx * cos - dy * sin + 0.5f;
			m10 = sin / rect.width;
			m11 = cos / rect.height;
			m12 = dx * sin + dy * cos + 0.5f;
		}

		public static Vector2 operator *(Matrix2x3 m, Vector2 v)
		{
			return new Vector2(m.m00 * v.x + m.m01 * v.y + m.m02, m.m10 * v.x + m.m11 * v.y + m.m12);
		}
	}
}
