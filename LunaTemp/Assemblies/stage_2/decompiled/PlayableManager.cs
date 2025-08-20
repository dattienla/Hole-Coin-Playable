using DG.Tweening;
using Luna.Unity;
using UnityEngine;
using UnityEngine.UI;

public class PlayableManager : MonoBehaviour
{
	public Button exitButton;

	public Button closeButton;

	public Button exitButton2;

	public GameObject winGamePanel;

	public GameObject hand;

	public static PlayableManager Instance;

	private void Awake()
	{
		Instance = this;
		winGamePanel.SetActive(false);
		HandleScreenOrientation();
		LifeCycle.OnPause += PauseGameplay;
		LifeCycle.OnResume += ResumeGameplay;
		if (exitButton != null)
		{
			exitButton.onClick.AddListener(OnExitClicked);
		}
		if (exitButton2 != null)
		{
			exitButton2.onClick.AddListener(OnExitClicked);
		}
		if (closeButton != null)
		{
			closeButton.onClick.AddListener(OnCloseClicked);
		}
	}

	private void Start()
	{
		hand.SetActive(true);
	}

	private void OnCloseButtonDelay()
	{
		closeButton.gameObject.SetActive(true);
		CanvasGroup cg = closeButton.GetComponent<CanvasGroup>();
		cg.alpha = 0f;
		DOTween.To(() => cg.alpha, delegate(float x)
		{
			cg.alpha = x;
		}, 1f, 1f).SetEase(Ease.InOutQuad);
	}

	private void HandleScreenOrientation()
	{
		float screenRatio = (float)Screen.width / (float)Screen.height;
	}

	private void PauseGameplay()
	{
		Time.timeScale = 0f;
	}

	private void ResumeGameplay()
	{
		Time.timeScale = 1f;
	}

	private void OnExitClicked()
	{
		Playable.InstallFullGame();
		LifeCycle.GameEnded();
	}

	private void OnCloseClicked()
	{
		LifeCycle.GameEnded();
	}

	private void OnDestroy()
	{
		LifeCycle.OnPause -= PauseGameplay;
		LifeCycle.OnResume -= ResumeGameplay;
	}

	private void WinGameDelay()
	{
		AudioManager.Instance.audioSource.PlayOneShot(AudioManager.Instance.winClip);
		winGamePanel.SetActive(true);
		closeButton.gameObject.SetActive(false);
		RectTransform panelRT = winGamePanel.GetComponent<RectTransform>();
		Vector2 startPos = panelRT.anchoredPosition;
		panelRT.anchoredPosition = new Vector2(startPos.x, -Screen.height * 10);
		DOTween.To(() => panelRT.anchoredPosition.y, delegate(float y)
		{
			panelRT.anchoredPosition = new Vector2(startPos.x, y);
		}, 0f, 0.8f).OnComplete(delegate
		{
			exitButton.transform.DOScale(1.2f, 0.8f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
			Invoke("OnCloseButtonDelay", 5f);
		});
	}

	public void WinGame()
	{
		Invoke("WinGameDelay", 2.5f);
	}
}
