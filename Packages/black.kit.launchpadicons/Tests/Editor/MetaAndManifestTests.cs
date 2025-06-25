using NUnit.Framework;
using black.kit.launchpadicons.Editor;

namespace black.kit.launchpadicons.Tests
{
    public class MetaAndManifestTests
    {
        [Test]
        public void Manifest_Deconstruct_ReturnsVersion()
        {
            var manifest = new Manifest { version = "1.2.3" };
            manifest.Deconstruct(out string version);
            Assert.AreEqual("1.2.3", version);
        }

        [Test]
        public void Meta_Deconstruct_ReturnsArrays()
        {
            var meta = new Meta
            {
                newIcons = new[] { "a", "b" },
                coloredIcons = new[] { "c" }
            };
            meta.Deconstruct(out string[] newIcons, out string[] coloredIcons);
            Assert.AreEqual(new[] { "a", "b" }, newIcons);
            Assert.AreEqual(new[] { "c" }, coloredIcons);
        }
    }
}
