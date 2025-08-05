using System.Collections;
using UnityEngine;
using UnityEngine.UI;

namespace _HoleMoney.Scripts.UI
{
    public class GhostTrailUI : MonoBehaviour
    {
        public Image coinImage; // Gốc
        public GameObject ghostPrefab; // Prefab của ghost (Image mờ)
        public float spawnInterval = 0.05f;
        public float ghostLifetime = 0.3f;

        private bool isTrailing = false;

        public void StartTrail()
        {
            if (!isTrailing)
            {
                isTrailing = true;
                StartCoroutine(SpawnTrail());
            }
        }

        public void StopTrail()
        {
            isTrailing = false;
        }

        private IEnumerator SpawnTrail()
        {
            while (isTrailing)
            {
                SpawnGhost();
                yield return new WaitForSeconds(spawnInterval);
            }
        }

        private void SpawnGhost()
        {
            var ghost = Instantiate(ghostPrefab, coinImage.transform.parent);
            ghost.transform.SetAsFirstSibling(); // để phía sau coin

            var ghostImage = ghost.GetComponent<Image>();
            ghostImage.sprite = coinImage.sprite;
            ghostImage.rectTransform.position = coinImage.rectTransform.position;
            ghostImage.color = new Color(1f, 0.9f, 0.2f, 0.8f);

            StartCoroutine(FadeAndDestroy(ghostImage));
        }

        private IEnumerator FadeAndDestroy(Image img)
        {
            float time = 0f;
            var startColor = img.color;

            while (time < ghostLifetime)
            {
                time += Time.deltaTime;
                float t = time / ghostLifetime;
                img.color = new Color(startColor.r, startColor.g, startColor.b, Mathf.Lerp(startColor.a, 0f, t));
                yield return null;
            }

            Destroy(img.gameObject);
        }
    }
}
