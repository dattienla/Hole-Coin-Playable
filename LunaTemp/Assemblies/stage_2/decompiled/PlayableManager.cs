using DG.Tweening;
using Luna.Unity;
using UnityEngine;
using UnityEngine.UI;

public class PlayableManager : MonoBehaviour
{
	public Button exitButton;

	public GameObject winGamePanel;

	public static PlayableManager Instance;

	private void Awake()
	{
		Instance = this;
		HandleScreenOrientation();
		LifeCycle.OnPause += PauseGameplay;
		LifeCycle.OnResume += ResumeGameplay;
		if (exitButton != null)
		{
			exitButton.onClick.AddListener(OnExitClicked);
		}
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

	private void OnDestroy()
	{
		LifeCycle.OnPause -= PauseGameplay;
		LifeCycle.OnResume -= ResumeGameplay;
	}

	private void WinGameDelay()
	{
		winGamePanel.SetActive(true);
		winGamePanel.GetComponent<RectTransform>().anchoredPosition = new Vector2(winGamePanel.GetComponent<RectTransform>().anchoredPosition.x, -Screen.height);
		winGamePanel.GetComponent<RectTransform>().DOAnchorPosY(0f, 0.8f).OnComplete(delegate
		{
			exitButton.transform.DOScale(1.2f, 0.8f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InOutSine);
		});
	}

	public void WinGame()
	{
		Invoke("WinGameDelay", 2.5f);
	}
}
