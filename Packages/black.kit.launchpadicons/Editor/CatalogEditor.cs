using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using black.kit.launchpadicons.Examples;

namespace black.kit.launchpadicons.Editor
{
    [CustomEditor(typeof(Catalog))]
    public sealed class CatalogEditor : UnityEditor.Editor
    {
        private const string ICONS_PATH = "Packages/black.kit.launchpadicons/Runtime";

        private const int ICONS_GROUP_CAPACITY = 64;

        private static readonly Color bgNew = new(.467f, 1f, .733f, .39f);

        private static readonly Color bgWhite = new(1f, 1f, 1f, .39f);

        private static readonly Color iconBlack = new(0f, 0f, 0f, .8f);

        private static readonly Color iconWhite = new(1f, 1f, 1f, .8f);

        private static (string guid, string name) GuidToName(string guid) =>
        (
            guid,
            name: Path.GetFileNameWithoutExtension(
                AssetDatabase.GUIDToAssetPath(guid))
        );

        private static (string guid, string name)[] FindIcons() =>
            AssetDatabase.FindAssets(
                "t:Texture2D", new[] { ICONS_PATH })
                .Select(GuidToName)
                .OrderBy(x => x.name)
                .ToArray();

        private static IEnumerable<(string guid, string name)>[] ToGroups(
            (string guid, string name)[] icons)
        {
            var groupsLength = (icons.Length + ICONS_GROUP_CAPACITY - 1) / ICONS_GROUP_CAPACITY;
            var iconsByGroups = icons.Length / groupsLength;
            return icons.Select((x, i) => (x, i))
                    .GroupBy(x => x.i / iconsByGroups)
                    .Select(x => x.Select(y => y.x))
                    .ToArray();
        }

        private static float GetWidth(
            RectTransform groupRect,
            int groupsLength,
            HorizontalOrVerticalLayoutGroup layoutGroup)
        {
            var padding = layoutGroup.padding.horizontal;
            var spacing = layoutGroup.spacing * (groupsLength - 1);
            return groupRect.sizeDelta.x * groupsLength + padding + spacing;
        }

        private static void RemoveAllChildren(Transform parent)
        {
            foreach (Transform child in parent)
            {
                DestroyImmediate(child.gameObject);
            }
        }

        private Vector2 GetCatalogRect(int groupsLength)
        {
            var containerGroup = TypedTarget.ContainerGrid;
            var groupRect = containerGroup.GetComponent<RectTransform>();
            var layoutGroup = TypedTarget.GetComponent<HorizontalOrVerticalLayoutGroup>();
            var width = GetWidth(groupRect, groupsLength, layoutGroup);
            var height = groupRect.sizeDelta.y + layoutGroup.padding.vertical;
            return new Vector2(width, height);
        }

        private static void InstantiateIcon(
            GameObject iContainer,
            string guid,
            string name,
            bool isNew,
            bool isWhite)
        {
            iContainer.name = name;
            var cb = iContainer.GetComponent<Container>();
            cb.Label.text = name;
            var path = AssetDatabase.GUIDToAssetPath(guid);
            var sprite = AssetDatabase.LoadAssetAtPath<Sprite>(path);
            cb.Icon.sprite = sprite;
            cb.Background.color = isNew ? bgNew : bgWhite;
            cb.Icon.color = isWhite ? iconWhite : iconBlack;
        }

        public override void OnInspectorGUI()
        {
            if (GUILayout.Button("Cleanup the catalog"))
            {
                RemoveAllChildren();
            }
            if (GUILayout.Button("Update the catalog"))
            {
                var iconsByGroups = ToGroups(FindIcons());
                RemoveAllChildren();
                var catalogRect = TypedTarget.GetComponent<RectTransform>();
                catalogRect.sizeDelta = GetCatalogRect(iconsByGroups.Length);
                var (newIcons, whiteIcons) = JsonUtility.FromJson<Meta>(TypedTarget.IconsMeta.text);
                Debug.Log($"newIcons: {newIcons.Length}");
                foreach (var icons in iconsByGroups)
                {
                    var containerGroup = TypedTarget.ContainerGrid;
                    var container = TypedTarget.Container;
                    var iGroup = Instantiate(containerGroup, catalogRect);
                    foreach (var (guid, name) in icons)
                    {
                        var isNew = newIcons.Contains(name);
                        var isWhite = whiteIcons.Contains(name);
                        var iContainer = Instantiate(container, iGroup.transform);
                        InstantiateIcon(iContainer, guid, name, isNew, isWhite);
                    }
                }
            }
            EditorGUILayout.Space();
            base.OnInspectorGUI();
        }

        /// <summary>The target of the inspector.</summary>
        private Catalog TypedTarget => target as Catalog;

        private void RemoveAllChildren()
        {
            var catalogRect = TypedTarget.GetComponent<RectTransform>();
            // ! XXX: 一度では完全に消えないので二度消す
            RemoveAllChildren(catalogRect);
            RemoveAllChildren(catalogRect);

        }
    }
}
