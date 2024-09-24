using TMPro;
using UdonSharp;
using UnityEngine;
using UnityEngine.UI;

namespace black.kit.launchpadicons.Examples
{
    /// <summary>The container for an icon.</summary>
    [UdonBehaviourSyncMode(BehaviourSyncMode.None)]
    public sealed class Container : UdonSharpBehaviour
    {
#pragma warning disable IDE0044
        /// <summary>
        /// The background placeholder to be used as a container.
        /// </summary>
        [SerializeField, Tooltip("Specify the background placeholder to be used as a container.")]
        private Image background;

        /// <summary>
        /// The icon placeholder to be used as a container.
        /// </summary>
        [SerializeField, Tooltip("Specify the icon placeholder to be used as a container.")]
        private Image icon;

        /// <summary>
        /// The label placeholder to be used as a container.
        /// </summary>
        [SerializeField, Tooltip("Specify the label placeholder to be used as a container.")]
        private TextMeshProUGUI label;
#pragma warning restore IDE0044

        /// <summary>The background of the container.</summary>
        public Image Background => background;

        /// <summary>The icon of the container.</summary>
        public Image Icon => icon;

        /// <summary>The label of the container.</summary>
        public TextMeshProUGUI Label => label;
    }
}
