using System;
using System.Collections.Generic;
using _HoleMoney.Scripts.Enums;
using UnityEngine;

namespace _HoleMoney.Scripts.ScriptableObjects
{
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
    public class MaterialsSo : ScriptableObject
    {
        public Material normalTileMaterial;
        public Material holeTileMaterial;
        public Material rainbowTileMaterial;
        public List<MainMaterials> mainMaterials = new List<MainMaterials>();
    }
}
