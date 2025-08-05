using System.IO;
using UnityEngine;

namespace Base.Common
{
    public static class SaveManager
    {
        public static void SaveData(ScriptableObject data, string textName)
        {
            var json = JsonUtility.ToJson(data);
            File.WriteAllText(Application.persistentDataPath + Path.DirectorySeparatorChar + textName + ".txt", json);
        }

        public static void LoadData(ScriptableObject data, string textName)
        {
            if (File.Exists(Application.persistentDataPath + Path.DirectorySeparatorChar + textName + ".txt"))
            {
                var json = File.ReadAllText(Application.persistentDataPath + Path.DirectorySeparatorChar + textName + ".txt");
                JsonUtility.FromJsonOverwrite(json, data);
            }
            else
            {
                var json = JsonUtility.ToJson(data);
                File.WriteAllText(Application.persistentDataPath + Path.DirectorySeparatorChar + textName + ".txt", json);
            }
        }
    }

}
