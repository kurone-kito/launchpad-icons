using System;

namespace black.kit.launchpadicons.Editor
{
    /// <summary>The manifest.</summary>
    [Serializable]
    public sealed class Manifest
    {
        /// <summary>Current version number.</summary>
        public string version;

        /// <summary>Deconstruct the meta data.</summary>
        /// <param name="version">Current version number.</param>
        public void Deconstruct(out string version)
        {
            version = this.version;
        }
    }
}
