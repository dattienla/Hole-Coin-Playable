using UnityEngine;

public class ResizeCamera : MonoBehaviour
{
	public Camera mainCamera;

	public float minCameraSize = 15f;

	public float maxCameraSize = 23f;

	public float minZ = -12f;

	public float maxZ = -1f;

	public int minHeight = 10;

	public int maxHeight = 32;

	public void Resize(int height)
	{
		float zChangePerUnit = (maxZ - minZ) / (float)(maxHeight - minHeight);
		base.transform.position = new Vector3(base.transform.position.x, base.transform.position.y, minZ + zChangePerUnit * (float)(height - minHeight));
		float sizeChangePerUnit = (maxCameraSize - minCameraSize) / (float)(maxHeight - minHeight);
		mainCamera.orthographicSize = minCameraSize + sizeChangePerUnit * (float)(height - minHeight);
	}
}
