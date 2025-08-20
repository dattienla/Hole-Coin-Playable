using UnityEngine;

public class AudioManager : MonoBehaviour
{
	public static AudioManager Instance;

	public AudioSource audioSource;

	public AudioClip coinAndMoneyBagClip;

	public AudioClip attendClip;

	public AudioClip winClip;

	private void Awake()
	{
		Instance = this;
	}
}
