using System.Collections.Generic;
using UnityEngine;

namespace Base.SO
{
    [System.Serializable]
    public class Skin
    {
        public int id;
        public Sprite skinSprite;
    }

    [CreateAssetMenu(fileName = "Skins", menuName = "Skins", order = 7)]
    public class SkinsSo : ScriptableObject
    {
        public List<Skin> skins;
    }
}
