using _HoleMoney.Scripts.UI;
using Base.Common;
using UnityEngine;

namespace _HoleMoney.Scripts.Managers
{
    public class UIManager : Singleton<UIManager>
    {
        public Canvas uiCanvas;
        public UITop uiTop;
        public UIWin uiWin;
        public UILose uiLose;
        public UIBoosters uiBoosters;
    }
}
