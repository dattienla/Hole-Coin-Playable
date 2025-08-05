using UnityEngine;

namespace Base.UI.Build
{
    public class SetHeight : MonoBehaviour
    {

        private void Start()
        {
            var renderer = GetComponent<Renderer>();
            MaterialPropertyBlock block = new MaterialPropertyBlock();
            renderer.GetPropertyBlock(block);
            float meshHeight = renderer.bounds.size.y + 0.1f;
            block.SetFloat("_MeshHeight", meshHeight);
            renderer.SetPropertyBlock(block);
        }
    }
}
