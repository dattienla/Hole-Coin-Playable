using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ResizeCamera : MonoBehaviour
{
    public Camera mainCamera;

    public float minCameraSize = 15;
    public float maxCameraSize = 23;

    public float minZ = -12;
    public float maxZ = -1;

    public int minHeight = 10;
    public int maxHeight = 32;

    public void Resize(int height)
    {
        var zChangePerUnit = (maxZ - minZ) / (maxHeight - minHeight);
        transform.position = new Vector3(transform.position.x, transform.position.y, minZ + zChangePerUnit * (height - minHeight));
        var sizeChangePerUnit = (maxCameraSize - minCameraSize) / (maxHeight - minHeight);
        mainCamera.orthographicSize = minCameraSize + sizeChangePerUnit * (height - minHeight);
    }
}
