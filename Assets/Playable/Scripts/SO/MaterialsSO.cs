using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[Serializable]
public class MainMaterials
{
    public ColorType colorType;
    public Material material;
    public Material pitMaterial;
    public Material coinMaterial;
    public Material pigMaterial;
}

[CreateAssetMenu(fileName = "MaterialsSo", menuName = "So/Material", order = 0)]
public class MaterialsSO : ScriptableObject
{
    public List<MainMaterials> mainMaterials = new List<MainMaterials>();
}
