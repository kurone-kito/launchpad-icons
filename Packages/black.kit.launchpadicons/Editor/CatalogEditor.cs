using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using black.kit.launchpadicons.Examples;

namespace black.kit.launchpadicons.Editor
{
    /// <summary>The editor extension for the catalog.</summary>
    [CustomEditor(typeof(Catalog))]
    public sealed class CatalogEditor : UnityEditor.Editor
    {
        /// <summary>The path to the icons.</summary>
        private const string ICONS_PATH = "Packages/black.kit.launchpadicons/Runtime";

        /// <summary>The capacity of the icons group.</summary>
        private const int ICONS_GROUP_CAPACITY = 81;

        /// <summary>The background color for the new icons.</summary>
        private static readonly Color bgNew = new(.467f, 1f, .733f, .39f);

        /// <summary>The background color for the white icons.</summary>
        private static readonly Color bgWhite = new(1f, 1f, 1f, .39f);

        /// <summary>The icon color for the black icons.</summary>
        private static readonly Color iconBlack = new(0f, 0f, 0f, .8f);

        /// <summary>The icon color for the white icons.</summary>
        private static readonly Color iconWhite = new(1f, 1f, 1f, .8f);

        /// <summary>Get the name of the icon by the GUID.</summary>
        /// <param name="guid">The GUID of the icon.</param>
        /// <returns>The name of the icon.</returns>
        private static (string guid, string name) GuidToName(string guid) =>
        (
            guid,
            name: Path.GetFileNameWithoutExtension(
                AssetDatabase.GUIDToAssetPath(guid))
        );

        /// <summary>Find the icons in the catalog.</summary>
        /// <returns>The array of the GUIDs and names of the icons.</returns>
        private static (string guid, string name)[] FindIcons() =>
            AssetDatabase.FindAssets(
                "t:Texture2D", new[] { ICONS_PATH })
                .Select(GuidToName)
                .OrderBy(x => x.name)
                .ToArray();

        /// <summary>Get the groups of the icons.</summary>
        /// <param name="icons">
        /// The array of the GUIDs and names of the icons.
        /// </param>
        /// <returns>The groups of the icons.</returns>
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

        /// <summary>Get the width of the group.</summary>
        /// <param name="groupRect">The rect of the group.</param>
        /// <param name="groupsLength">The length of the groups.</param>
        /// <param name="layoutGroup">The layout group.</param>
        /// <returns>The width of the group.</returns>
        private static float GetWidth(
            RectTransform groupRect,
            int groupsLength,
            HorizontalOrVerticalLayoutGroup layoutGroup)
        {
            var padding = layoutGroup.padding.horizontal;
            var spacing = layoutGroup.spacing * (groupsLength - 1);
            return groupRect.sizeDelta.x * groupsLength + padding + spacing;
        }

        /// <summary>Remove all children of the parent.</summary>
        /// <param name="parent">The parent of the children.</param>
        private static void RemoveAllChildren(Transform parent)
        {
            Array.ForEach(
                parent.Cast<Transform>().ToArray(),
                x => DestroyImmediate(x.gameObject));
        }

        /// <summary>Get the rect of the catalog.</summary>
        /// <param name="groupsLength">The length of the groups.</param>
        /// <returns>The rect of the catalog.</returns>
        private Vector2 GetCatalogRect(int groupsLength)
        {
            var containerGroup = TypedTarget.ContainerGrid;
            var groupRect = containerGroup.GetComponent<RectTransform>();
            var layoutGroup = TypedTarget.GetComponent<HorizontalOrVerticalLayoutGroup>();
            var width = GetWidth(groupRect, groupsLength, layoutGroup);
            var height = groupRect.sizeDelta.y + layoutGroup.padding.vertical;
            return new Vector2(width, height);
        }

        /// <summary>
        /// Instantiate the icon in the container.
        /// </summary>
        /// <param name="iContainer">The container of the icon.</param>
        /// <param name="guid">The GUID of the icon.</param>
        /// <param name="name">The name of the icon.</param>
        /// <param name="isNew">The flag of the new icon.</param>
        /// <param name="isWhite">The flag of the white icon.</param>
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

        /// <summary>The inspector GUI of the catalog.</summary>
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
                var (newIcons, coloredIcons) = JsonUtility.FromJson<Meta>(
                    TypedTarget.IconsMeta.text);
                Debug.Log($"newIcons: {newIcons.Length}");
                foreach (var icons in iconsByGroups)
                {
                    var containerGroup = TypedTarget.ContainerGrid;
                    var container = TypedTarget.Container;
                    var iGroup = Instantiate(containerGroup, catalogRect);
                    foreach (var (guid, name) in icons)
                    {
                        var isNew = newIcons.Contains(name);
                        var isWhite = coloredIcons.Contains(name);
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

        /// <summary>Remove all children of the catalog.</summary>
        private void RemoveAllChildren()
        {
            var catalogRect = TypedTarget.GetComponent<RectTransform>();
            RemoveAllChildren(catalogRect);
        }
    }
}
