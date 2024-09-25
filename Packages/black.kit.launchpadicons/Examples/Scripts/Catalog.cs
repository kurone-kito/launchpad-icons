using UdonSharp;
using UnityEngine;

namespace black.kit.launchpadicons.Examples
{
    /// <summary>The catalog for the icons.</summary>
    [UdonBehaviourSyncMode(BehaviourSyncMode.None)]
    public sealed class Catalog : UdonSharpBehaviour
    {
        /// <summary>The name of the container.</summary>
        public const string NAME_CONTAINER = nameof(container);

        /// <summary>The name of the containerGrid.</summary>
        public const string NAME_CONTAINER_GRID = nameof(containerGrid);

#pragma warning disable IDE0044
        /// <summary>The GameObject to be used as a container.</summary>
        [SerializeField, Tooltip("Specify the GameObject to be used as a container.")]
        private GameObject container;

        /// <summary>The GameObject to be used as a container for the grid.</summary>
        [SerializeField, Tooltip("Specify the GameObject to be used as a container for the grid.")]
        private GameObject containerGrid;

        /// <summary>The JSON file with the meta data of the icons.</summary>
        [SerializeField, Tooltip("Specify the JSON file with the meta data of the icons.")]
        private TextAsset iconsMeta;
#pragma warning restore IDE0044

        /// <summary>The container.</summary>
        public GameObject Container => container;

        /// <summary>The containerGrid.</summary>
        public GameObject ContainerGrid => containerGrid;

        /// <summary>The JSON file with the meta data of the icons.</summary>
        public TextAsset IconsMeta => iconsMeta;
    }
}
