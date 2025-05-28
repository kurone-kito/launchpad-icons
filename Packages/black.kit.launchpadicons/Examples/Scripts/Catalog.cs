using TMPro;
using UdonSharp;
using UnityEngine;

namespace black.kit.launchpadicons.Examples
{
    /// <summary>The catalog for the icons.</summary>
    [UdonBehaviourSyncMode(BehaviourSyncMode.None)]
    public sealed class Catalog : UdonSharpBehaviour
    {
#pragma warning disable IDE0044
        /// <summary>The GameObject to be used as a container.</summary>
        [SerializeField, Tooltip("Specify the GameObject to be used as a container.")]
        private GameObject container;

        /// <summary>The GameObject to be used as a container for the grid.</summary>
        [SerializeField, Tooltip("Specify the GameObject to be used as a container for the grid.")]
        private GameObject containerGrid;

        /// <summary>The Transform to be used as a container for the ContainerGrid.</summary>
        [SerializeField, Tooltip("Specify the Transform to be used as a gridContainer.")]
        private RectTransform gridContainer;

        /// <summary>The JSON file with the meta data of the icons.</summary>
        [SerializeField, Tooltip("Specify the JSON file with the meta data of the icons.")]
        private TextAsset iconsMeta;

        /// <summary>The JSON file of the manifest.</summary>
        [SerializeField, Tooltip("Specify the JSON file of the manifest.")]
        private TextAsset manifest;

        /// <summary>The version placeholder.</summary>
        [SerializeField, Tooltip("Specify the version placeholder.")]
        private TextMeshProUGUI version;
#pragma warning restore IDE0044

        /// <summary>The container.</summary>
        public GameObject Container => container;

        /// <summary>The containerGrid.</summary>
        public GameObject ContainerGrid => containerGrid;

        /// <summary>The container for the ContainerGrid.</summary>
        public RectTransform GridContainer => gridContainer;

        /// <summary>The JSON file with the meta data of the icons.</summary>
        public TextAsset IconsMeta => iconsMeta;

        /// <summary>The JSON file of the manifest.</summary>
        public TextAsset Manifest => manifest;

        /// <summary>The version placeholder.</summary>
        public TextMeshProUGUI Version => version;
    }
}
