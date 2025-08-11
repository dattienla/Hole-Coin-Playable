using UnityEngine;

namespace ToonyColorsPro.Runtime
{
	public class TCP2_GetVertexWavesPosition : MonoBehaviour
	{
		public Transform WaterPlane;

		[Space]
		[Tooltip("Will make the object stick to the water plane")]
		public bool followWaterHeight = true;

		public float heightOffset = 0f;

		[Space]
		[Tooltip("Will align the object to the wave normal based on its position")]
		public bool followWaterNormal;

		[Tooltip("Determine the object's up axis (when following wave normal)")]
		public Vector3 upAxis = new Vector3(0f, 1f, 0f);

		[Tooltip("Rotation of the object once it's been affected by the water normal")]
		public Vector3 postRotation = new Vector3(0f, 0f, 0f);

		[Header("Water Shader Configuration")]
		[Space]
		public int sineCount = 1;

		[Space]
		public float WavesSpeed = 2f;

		public float WavesHeight = 0.1f;

		public float WavesFrequency = 1f;

		[Space]
		public bool useCustomTime;

		public bool customSineValues;

		[HideInInspector]
		public Vector4 sinOffsets1 = new Vector4(1f, 2.2f, 0.6f, 1.3f);

		[HideInInspector]
		public Vector4 phaseOffsets1 = new Vector4(1f, 1.3f, 2.2f, 0.4f);

		[HideInInspector]
		public Vector4 sinOffsets2 = new Vector4(0.6f, 1.3f, 3.1f, 2.4f);

		[HideInInspector]
		public Vector4 phaseOffsets2 = new Vector4(2.2f, 0.4f, 3.3f, 2.9f);

		[HideInInspector]
		public Vector4 sinOffsets3 = new Vector4(1.4f, 1.8f, 4.2f, 3.6f);

		[HideInInspector]
		public Vector4 phaseOffsets3 = new Vector4(0.2f, 2.6f, 0.7f, 3.1f);

		[HideInInspector]
		public Vector4 sinOffsets4 = new Vector4(1.1f, 2.8f, 1.7f, 4.3f);

		[HideInInspector]
		public Vector4 phaseOffsets4 = new Vector4(0.5f, 4.8f, 3.1f, 2.3f);

		private static readonly int _Time = Shader.PropertyToID("_Time");

		private static int LastFrameTimeSampling;

		private static float ShaderTime = 0f;

		private void LateUpdate()
		{
			float time;
			if (useCustomTime)
			{
				time = Time.time;
			}
			else
			{
				if (LastFrameTimeSampling < Time.frameCount)
				{
					ShaderTime = Shader.GetGlobalVector("_Time").y;
					LastFrameTimeSampling = Time.frameCount;
				}
				time = ShaderTime;
			}
			if (followWaterHeight)
			{
				Vector3 worldPosition = GetPositionOnWater_SG2(time, base.transform.position);
				base.transform.position = worldPosition;
			}
			if (followWaterNormal)
			{
				base.transform.rotation = Quaternion.FromToRotation(upAxis, GetNormalOnWater_SG2(time, base.transform.position));
				base.transform.Rotate(postRotation, Space.Self);
			}
		}

		private Vector4 CalculateSinePosition(float v1, float v2, Vector4 sinOffsets, Vector4 phaseOffsets, ref float phase)
		{
			return new Vector4(Mathf.Sin(v1 * sinOffsets.x + phase * phaseOffsets.x), Mathf.Sin(v1 * sinOffsets.y + phase * phaseOffsets.y), Mathf.Sin(v2 * sinOffsets.z + phase * phaseOffsets.z), Mathf.Sin(v2 * sinOffsets.w + phase * phaseOffsets.w));
		}

		private Vector4 CalculateSineNormal(float v1, float v2, Vector4 sinOffsets, Vector4 phaseOffsets, ref float phase)
		{
			return new Vector4(Mathf.Cos(v1 * sinOffsets.x + phase * phaseOffsets.x) * sinOffsets.x, Mathf.Cos(v1 * sinOffsets.y + phase * phaseOffsets.y) * sinOffsets.y, Mathf.Cos(v2 * sinOffsets.z + phase * phaseOffsets.z) * sinOffsets.z, Mathf.Cos(v2 * sinOffsets.w + phase * phaseOffsets.w) * sinOffsets.w);
		}

		public Vector3 GetPositionOnWater_SG2(float time, Vector3 worldPosition)
		{
			float phase = time * WavesSpeed;
			float x = worldPosition.x * WavesFrequency;
			float z = worldPosition.z * WavesFrequency;
			float height = WavesHeight * WaterPlane.transform.lossyScale.y;
			float waveFactorX = 0f;
			float waveFactorZ = 0f;
			switch (sineCount)
			{
			case 2:
			{
				Vector4 sinWaves = CalculateSinePosition(x, z, sinOffsets1, phaseOffsets1, ref phase);
				waveFactorX = (sinWaves.x + sinWaves.y) * height / 2f;
				waveFactorZ = (sinWaves.z + sinWaves.w) * height / 2f;
				break;
			}
			case 4:
			{
				Vector4 sinWavesX = CalculateSinePosition(x, x, sinOffsets1, phaseOffsets1, ref phase);
				Vector4 sinWavesZ = CalculateSinePosition(z, z, sinOffsets2, phaseOffsets2, ref phase);
				waveFactorX = (sinWavesX.x + sinWavesX.y + sinWavesX.z + sinWavesX.w) * height / 4f;
				waveFactorZ = (sinWavesZ.x + sinWavesZ.y + sinWavesZ.z + sinWavesZ.w) * height / 4f;
				break;
			}
			case 8:
			{
				Vector4 sinWavesX2 = CalculateSinePosition(x, x, sinOffsets1, phaseOffsets1, ref phase);
				Vector4 sinWavesZ2 = CalculateSinePosition(z, z, sinOffsets2, phaseOffsets2, ref phase);
				Vector4 sinWavesX3 = CalculateSinePosition(x, x, sinOffsets3, phaseOffsets3, ref phase);
				Vector4 sinWavesZ3 = CalculateSinePosition(z, z, sinOffsets4, phaseOffsets4, ref phase);
				waveFactorX = (sinWavesX2.x + sinWavesX2.y + sinWavesX2.z + sinWavesX2.w + sinWavesX3.x + sinWavesX3.y + sinWavesX3.z + sinWavesX3.w) * height / 8f;
				waveFactorZ = (sinWavesZ2.x + sinWavesZ2.y + sinWavesZ2.z + sinWavesZ2.w + sinWavesZ3.x + sinWavesZ3.y + sinWavesZ3.z + sinWavesZ3.w) * height / 8f;
				break;
			}
			case 1:
				waveFactorX = Mathf.Sin(x + phase) * height;
				waveFactorZ = Mathf.Sin(z + phase) * height;
				break;
			}
			worldPosition.y = waveFactorX + waveFactorZ + WaterPlane.transform.position.y + heightOffset;
			return worldPosition;
		}

		public Vector3 GetNormalOnWater_SG2(float time, Vector3 worldPosition)
		{
			float phase = time * WavesSpeed;
			float x = worldPosition.x * WavesFrequency;
			float z = worldPosition.z * WavesFrequency;
			float height = WavesHeight * WaterPlane.transform.lossyScale.y;
			float waveNormalX = 0f;
			float waveNormalZ = 0f;
			switch (sineCount)
			{
			case 2:
			{
				Vector4 sinWaves = CalculateSineNormal(x, z, sinOffsets1, phaseOffsets1, ref phase);
				waveNormalX = (sinWaves.x + sinWaves.y) * (0f - height) / 2f;
				waveNormalZ = (sinWaves.z + sinWaves.w) * (0f - height) / 2f;
				break;
			}
			case 4:
			{
				Vector4 sinWavesX = CalculateSineNormal(x, x, sinOffsets1, phaseOffsets1, ref phase);
				Vector4 sinWavesZ = CalculateSineNormal(z, z, sinOffsets2, phaseOffsets2, ref phase);
				waveNormalX = (sinWavesX.x + sinWavesX.y + sinWavesX.z + sinWavesX.w) * (0f - height) / 4f;
				waveNormalZ = (sinWavesZ.x + sinWavesZ.y + sinWavesZ.z + sinWavesZ.w) * (0f - height) / 4f;
				break;
			}
			case 8:
			{
				Vector4 sinWavesX2 = CalculateSineNormal(x, x, sinOffsets1, phaseOffsets1, ref phase);
				Vector4 sinWavesZ2 = CalculateSineNormal(z, z, sinOffsets2, phaseOffsets2, ref phase);
				Vector4 sinWavesX3 = CalculateSineNormal(x, x, sinOffsets3, phaseOffsets3, ref phase);
				Vector4 sinWavesZ3 = CalculateSineNormal(z, z, sinOffsets4, phaseOffsets4, ref phase);
				waveNormalX = (sinWavesX2.x + sinWavesX2.y + sinWavesX2.z + sinWavesX2.w + sinWavesX3.x + sinWavesX3.y + sinWavesX3.z + sinWavesX3.w) * (0f - height) / 8f;
				waveNormalZ = (sinWavesZ2.x + sinWavesZ2.y + sinWavesZ2.z + sinWavesZ2.w + sinWavesZ3.x + sinWavesZ3.y + sinWavesZ3.z + sinWavesZ3.w) * (0f - height) / 8f;
				break;
			}
			case 1:
				waveNormalX = Mathf.Cos(x + phase) * (0f - height);
				waveNormalZ = Mathf.Cos(z + phase) * (0f - height);
				break;
			}
			return new Vector3(waveNormalX, 1f, waveNormalZ).normalized;
		}
	}
}
