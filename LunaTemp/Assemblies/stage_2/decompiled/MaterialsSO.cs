using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "MaterialsSo", menuName = "So/Material", order = 0)]
public class MaterialsSO : ScriptableObject
{
	public List<MainMaterials> mainMaterials = new List<MainMaterials>();
}
