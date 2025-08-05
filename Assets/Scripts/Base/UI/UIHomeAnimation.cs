using Base.Common;
using DG.Tweening;
using DotweenAnimations;
using UnityEngine;

namespace Base.UI
{
    public class UIHomeAnimation : Singleton<UIHomeAnimation>
    {
        public MoveAnimation navigationAnimation;
        public MoveAnimation topBarAnimation;
        public MoveAnimation playButtonAnimation;

        public MoveAnimation backButtonAnimation;
        public MoveAnimation pickMapAnimation;

        public MoveAnimation rightButtonAnimation;

        public ScaleAnimation backgroundAnimation;

        private bool isHidden;

        private void Start()
        {
            Hide();
        }


        private void Update()
        {
            if (Input.GetKeyDown(KeyCode.A))
            {
                Show();
            }
            if (Input.GetKeyDown(KeyCode.B))
            {
                Hide();
            }
        }

        public void Show()
        {
            if (!isHidden) return;
            isHidden = false;
            navigationAnimation.Move();
            topBarAnimation.Move();
            playButtonAnimation.Move();
            rightButtonAnimation.Move();
            backButtonAnimation.MoveBack();
            pickMapAnimation.MoveBack();
            backgroundAnimation.ScaleUp();
            Camera.main.transform.DOMoveZ(2, 0.3f);
        }

        public void Hide()
        {
            if (isHidden) return;
            isHidden = true;
            navigationAnimation.MoveBack();
            topBarAnimation.MoveBack();
            playButtonAnimation.MoveBack();
            rightButtonAnimation.MoveBack();
            backButtonAnimation.Move();
            pickMapAnimation.Move();
            backgroundAnimation.ScaleOrigin();
            Camera.main.transform.DOMoveZ(0, 0.3f);
        }

    }
}
