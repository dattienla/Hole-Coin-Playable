using DG.Tweening;
using Luna.Unity;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.UIElements;
using static UnityEngine.Rendering.DebugUI;

#if PLAYWORKS
using Luna.Unity;
#endif

public class PlayableManager : MonoBehaviour
{
    public UnityEngine.UI.Button exitButton;
    public GameObject winGamePanel;
    public GameObject hand;
    public static PlayableManager Instance;


    void Awake()
    {
        Instance = this;
        // 1. Responsive layout
        HandleScreenOrientation();


        // 3. Đăng ký lifecycle events
        LifeCycle.OnPause += PauseGameplay;
        LifeCycle.OnResume += ResumeGameplay;


        if (exitButton != null)
            exitButton.onClick.AddListener(OnExitClicked);
    }
    private void Start()
    {
        hand.SetActive(true);
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

    void OnDestroy()
    {
        // Hủy đăng ký event để tránh leak
        LifeCycle.OnPause -= PauseGameplay;
        LifeCycle.OnResume -= ResumeGameplay;
    }
    void WinGameDelay()
    {
        winGamePanel.SetActive(true);
        winGamePanel.GetComponent<RectTransform>().anchoredPosition = new Vector2(winGamePanel.GetComponent<RectTransform>().anchoredPosition.x, -Screen.height);
        winGamePanel.GetComponent<RectTransform>().DOAnchorPosY(0, 0.8f).OnComplete(() =>
        {
            exitButton.transform.DOScale(1.2f, 0.8f)
                        .SetLoops(-1, LoopType.Yoyo)
                        .SetEase(Ease.InOutSine);
        });
    }
    public void WinGame()
    {
        Invoke(nameof(WinGameDelay), 2.5f);
    }
}
