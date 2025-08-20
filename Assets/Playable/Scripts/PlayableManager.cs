using DG.Tweening;
using Luna.Unity;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.UIElements;

#if PLAYWORKS
using Luna.Unity;
#endif

public class PlayableManager : MonoBehaviour
{
    public UnityEngine.UI.Button exitButton;
    public UnityEngine.UI.Button closeButton;
    public UnityEngine.UI.Button exitButton2;
    public GameObject winGamePanel;
    public GameObject hand;
    public static PlayableManager Instance;


    void Awake()
    {
        Instance = this;
        winGamePanel.SetActive(false);

        // 1. Responsive layout
        HandleScreenOrientation();


        // 3. Đăng ký lifecycle events
        LifeCycle.OnPause += PauseGameplay;
        LifeCycle.OnResume += ResumeGameplay;


        if (exitButton != null)
            exitButton.onClick.AddListener(OnExitClicked);
        if (exitButton2 != null)
            exitButton2.onClick.AddListener(OnExitClicked);

        if (closeButton != null)
            closeButton.onClick.AddListener(OnCloseClicked);
    }
    private void Start()
    {
        StartCoroutine(ActiveHand());
    }
    IEnumerator ActiveHand()
    {
        yield return new WaitForSeconds(0.5f);
        hand.SetActive(true);
        hand.GetComponent<RectTransform>().anchoredPosition = new Vector2(-33, -Screen.height * 2f);
        CanvasGroup handCG = PlayableManager.Instance.hand.GetComponent<CanvasGroup>();
        handCG.alpha = 0f;
        DOTween.To(() => handCG.alpha, x => handCG.alpha = x, 1f, 0.5f)
               .SetEase(Ease.InOutQuad);
        RectTransform handRT = hand.GetComponent<RectTransform>();
        DOTween.To(() => handRT.anchoredPosition, x => handRT.anchoredPosition = x, new Vector2(210, -665), 0.5f)
               .SetEase(Ease.OutCubic);
    }
    private void OnCloseButtonDelay()
    {
        closeButton.gameObject.SetActive(true);
        CanvasGroup cg = closeButton.GetComponent<CanvasGroup>();
        cg.alpha = 0f;

        DOTween.To(() => cg.alpha, x => cg.alpha = x, 1f, 1f)
               .SetEase(Ease.InOutQuad);
    }

    void HandleScreenOrientation()
    {
        float screenRatio = (float)Screen.width / Screen.height;
    }

    void PauseGameplay()
    {
        Time.timeScale = 0f;
    }

    void ResumeGameplay()
    {
        Time.timeScale = 1f;
    }


    void OnExitClicked()
    {
        // Gọi CTA để mở store
        Playable.InstallFullGame();
        // Kết thúc playable
        LifeCycle.GameEnded();
    }
    void OnCloseClicked()
    {
        LifeCycle.GameEnded();
    }

    void OnDestroy()
    {
        // Hủy đăng ký event để tránh leak
        LifeCycle.OnPause -= PauseGameplay;
        LifeCycle.OnResume -= ResumeGameplay;
    }

    void WinGameDelay()
    {
        AudioManager.Instance.audioSource.PlayOneShot(AudioManager.Instance.winClip);
        winGamePanel.SetActive(true);
        closeButton.gameObject.SetActive(false);

        RectTransform panelRT = winGamePanel.GetComponent<RectTransform>();
        Vector2 startPos = panelRT.anchoredPosition;
        panelRT.anchoredPosition = new Vector2(startPos.x, -Screen.height * 10);

        // Tween y position thủ công
        DOTween.To(() => panelRT.anchoredPosition.y,
                   y => panelRT.anchoredPosition = new Vector2(startPos.x, y),
                   0, 0.8f)
               .OnComplete(() =>
               {
                   // Tween scale exitButton
                   exitButton.transform.DOScale(1.2f, 0.8f)
                               .SetLoops(-1, LoopType.Yoyo)
                               .SetEase(Ease.InOutSine);

                   Invoke(nameof(OnCloseButtonDelay), 5f);
               });
    }
    public void WinGame()
    {
        Invoke(nameof(WinGameDelay), 2.5f);
    }
}
