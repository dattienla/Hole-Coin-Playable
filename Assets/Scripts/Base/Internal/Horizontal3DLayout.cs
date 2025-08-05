using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEditor;
using UnityEngine;

namespace Base.Internal
{
    [ExecuteAlways]
    public class ActiveOnly3DLayoutGroup : MonoBehaviour
    {
        public enum Alignment
        {
            Left,
            Center,
            Right
        }

        public enum Axis
        {
            X,
            Y,
            Z
        }

        [Header("Layout Settings")] public Axis layoutAxis = Axis.X;
        public Alignment alignment = Alignment.Left;
        public float spacing = 1f;
        public bool autoUpdate = true;

        [Header("Visible Control")] [Range(1,6)] public int visibleCount = 4;

        private int _lastVisibleCount = -1;
        private int _lastChildCount = -1;

        void Update()
        {
            if (!autoUpdate) return;

            if (_lastVisibleCount != visibleCount || _lastChildCount != transform.childCount)
            {
                ApplyVisibility();
                UpdateLayout();
            }
        }

        void OnValidate()
        {
#if UNITY_EDITOR
            // Trì hoãn việc thay đổi hierarchy để tránh lỗi
            EditorApplication.delayCall += () =>
            {
                // Nếu object đã bị xóa thì bỏ qua
                if (this == null || gameObject == null) return;

                ApplyVisibility();
                UpdateLayout();
            };
#else
    ApplyVisibility();
    UpdateLayout();
#endif
        }

        void ApplyVisibility()
        {
            int childCount = transform.childCount;

            for (int i = 0; i < childCount; i++)
            {
                Transform child = transform.GetChild(i);
                if (child == null) continue;
                child.gameObject.SetActive(i < visibleCount);
            }

            _lastVisibleCount = visibleCount;
            _lastChildCount = childCount;
        }

        void UpdateLayout()
        {
            // Chỉ layout các object đang bật
            List<Transform> activeChildren = new();

            foreach (Transform child in transform)
                if (child.gameObject.activeSelf)
                    activeChildren.Add(child);

            float totalLength = spacing * (activeChildren.Count - 1);

            for (int i = 0; i < activeChildren.Count; i++)
            {
                float offset = i * spacing;
                switch (alignment)
                {
                    case Alignment.Center:
                        offset -= totalLength / 2f;
                        break;
                    case Alignment.Right:
                        offset -= totalLength;
                        break;
                }

                Vector3 pos = Vector3.zero;
                switch (layoutAxis)
                {
                    case Axis.X:
                        pos = new Vector3(offset, 0, 0);
                        break;
                    case Axis.Y:
                        pos = new Vector3(0, offset, 0);
                        break;
                    case Axis.Z:
                        pos = new Vector3(0, 0, offset);
                        break;
                }

                var i1 = i;
                activeChildren[i].DOLocalMove(pos, 0.5f).SetEase(Ease.OutQuad).OnComplete(() =>
                {
                    activeChildren[i1].localPosition = pos;
                });
            }
        }
    }


}
