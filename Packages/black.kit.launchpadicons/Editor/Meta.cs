using System;

namespace black.kit.launchpadicons.Editor
{
    /// <summary>The meta data of the icons.</summary>
    [Serializable]
    public sealed class Meta
    {
        /// <summary>New icons names.</summary>
        public string[] newIcons;

        /// <summary>Preferred the white icons names.</summary>
        public string[] whiteIcons;

        /// <summary>
        /// Deconstruct the meta data.
        /// </summary>
        /// <param name="newIcons">New icons names.</param>
        /// <param name="whiteIcons">Preferred the white icons names.</param>
        public void Deconstruct(out string[] newIcons, out string[] whiteIcons)
        {
            newIcons = this.newIcons;
            whiteIcons = this.whiteIcons;
        }
    }
}
