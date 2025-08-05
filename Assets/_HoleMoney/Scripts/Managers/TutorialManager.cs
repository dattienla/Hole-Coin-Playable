using System.Collections.Generic;
using _HoleMoney.Scripts.Game;
using Base.Common;
using UnityEngine;
using UnityEngine.UI;

namespace _HoleMoney.Scripts.Managers
{
    public class TutorialManager : Singleton<TutorialManager>
    {
        public Camera uiCamera;
        public Image hand;
        public GameObject tutorialPanel1;
        public GameObject tutorialPanel2;

        public List<Hole> holes;

        public bool IsTutorialActive
        {
            get => PlayerPrefs.GetInt("IsTutorialActive", 1) == 1;
            private set
            {
                PlayerPrefs.SetInt("IsTutorialActive", value ? 1 : 0);
                PlayerPrefs.Save();
            }
        }


        public void StartTutorial()
        {
            if(holes.Count == 0)
            {
                EndTutorial();
                return;
            }
            var hole1Position = holes[0].transform.position;
            if(holes.Count > 1)
            {
                tutorialPanel1.SetActive(true);
                tutorialPanel2.SetActive(false);
            }
            else
            {
                tutorialPanel1.SetActive(false);
                tutorialPanel2.SetActive(true);
            }

            var screenPos = Camera.main.WorldToScreenPoint(hole1Position);
            hand.transform.position = screenPos;


            hand.gameObject.SetActive(true);
        }

        private void EndTutorial()
        {
            IsTutorialActive = false;
            PlayerPrefs.SetInt("IsTutorialActive", 0);
            PlayerPrefs.Save();
            hand.gameObject.SetActive(false);
            tutorialPanel1.SetActive(false);
            tutorialPanel2.SetActive(false);
        }
    }
}
