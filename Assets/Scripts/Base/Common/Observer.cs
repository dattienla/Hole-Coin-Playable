using System;
using System.Collections.Generic;
using UnityEngine;

namespace Base.Common
{
    public static class Observer
    {
        private static Dictionary<string, List<Action>> _listeners = new Dictionary<string, List<Action>>();
        private static Dictionary<string, List<Action<object>>> _listenersWithParam = new Dictionary<string, List<Action<object>>>();
        private static Dictionary<string,List<Func<object>>> _listenersWithReturn = new Dictionary<string, List<Func<object>>>();
        private static  Dictionary<string, List<Func<object, object>>> _listenersWithReturnParam =
            new Dictionary<string, List<Func<object, object>>>();


        public static void RegisterObserver(string key, Action action)
        {
            List<Action> actions;
            if (_listeners.TryGetValue(key, out var listener))
            {
                actions = listener;
            }
            else
            {
                actions = new List<Action>();
                _listeners.Add(key, actions);
            }

            actions.Add(action);
        }
        public static void RegisterObserver(string key, Action<object> action)
        {
            List<Action<object>> actions;
            if (_listenersWithParam.TryGetValue(key, out var listener))
            {
                actions = listener;
            }
            else
            {
                actions = new List<Action<object>>();
                _listenersWithParam.Add(key, actions);
            }
            actions.Add(action);
        }
        public static void RegisterObserver(string key, Func<object> action)
        {
            List<Func<object>> actions;
            if (_listenersWithReturn.TryGetValue(key, out var listener))
            {
                actions = listener;
            }
            else
            {
                actions = new List<Func<object>>();
                _listenersWithReturn.Add(key, actions);
            }
            actions.Add(action);
        }
        public static void RegisterObserver(string key, Func<object, object> action)
        {
            List<Func<object, object>> actions;
            if (_listenersWithReturnParam.TryGetValue(key, out var listener))
            {
                actions = listener;
            }
            else
            {
                actions = new List<Func<object, object>>();
                _listenersWithReturnParam.Add(key, actions);
            }
            actions.Add(action);
        }

        public static object NotifyObserversReturn(string key)
        {
            if (_listenersWithReturn.TryGetValue(key, out var listener))
            {
                foreach (var a in listener)
                {
                    try
                    {
                        return a?.Invoke();
                    }
                    catch (Exception e)
                    {
                        Debug.LogError(e);
                    }
                }
            }
            else
            {
                Debug.LogErrorFormat("listener {0} not exist", key);
            }
            return null;
        }

        public static object NotifyObserversReturn(string key, object param)
        {
            if (_listenersWithReturnParam.TryGetValue(key, out var listener))
            {
                foreach (var a in listener)
                {
                    try
                    {
                        return a?.Invoke(param);
                    }
                    catch (Exception e)
                    {
                        Debug.LogError(e);
                    }
                }
            }
            else
            {
                Debug.LogErrorFormat("listener {0} not exist", key);
            }
            return null;
        }

        public static void NotifyObservers(string key, object param)
        {
            if (_listenersWithParam.TryGetValue(key, out var listener))
            {
                foreach (var a in listener)
                {
                    try
                    {
                        a?.Invoke(param);
                    }
                    catch (Exception e)
                    {
                        Debug.LogError(key);
                    }
                }
            }
            else
            {
                //Debug.LogWarningFormat("listener {0} not exist", key);
            }
        }

        public static void NotifyObservers(string key)
        {
            if (_listeners.TryGetValue(key, value: out var listener))
            {
                foreach (var a in listener)
                {
                    try
                    {
                        a?.Invoke();
                    }
                    catch (Exception e)
                    {
                        Debug.LogError(e);
                    }
                }
            }
            else
            {
                Debug.LogErrorFormat("listener {0} not exist", key);
            }
        }

        public static void RemoveObserver(string key, Action<object> action)
        {
            if (_listenersWithParam.TryGetValue(key, out var listener))
            {
                listener.Remove(action);
            }
        }

        public static void RemoveObserver(string key, Action action)
        {
            if (_listeners.TryGetValue(key, out var listener))
            {
                listener.Remove(action);
            }
        }

        public static void RemoveObserver(string key, Func<object> action)
        {
            if (_listenersWithReturn.TryGetValue(key, out var listener))
            {
                listener.Remove(action);
            }
        }

        public static void RemoveObserver(string key, Func<object, object> action)
        {
            if (_listenersWithReturnParam.TryGetValue(key, out var listener))
            {
                listener.Remove(action);
            }
        }
    }
}
