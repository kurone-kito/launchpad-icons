import type { Component } from 'solid-js';
import { FeatureDetail } from '../components/atoms/FeatureDetail.js';
import { Hero } from '../components/atoms/Hero.js';
import { WideAnchorButton } from '../components/atoms/WideAnchorButton.js';
import { Features } from '../components/molecules/Features.js';
import { TextAnchor } from '../components/molecules/TextAnchor.js';
import { IconsLength } from '../components/organisms/IconsLength.js';
// TODO: add the import assertion
import { base, iconsToDo } from '../constants.json';

/**
 * The index page.
 * @returns The component.
 */
const Index: Component = () => (
  <>
    <Hero />
    <Features iconsLength={<IconsLength />} />
    <FeatureDetail
      heading={
        <>
          <IconsLength /> SVG icons
        </>
      }
      image={`/${base}/images/illustrator.png`}
    >
      <p class="font-light leading-relaxed py-2">
        The Launchpad Icons provide <IconsLength />
        &nbsp;icons that look&nbsp;
        <strong class="font-bold">like VRChat icons</strong>, and we plan to
        have more than {iconsToDo} in the future.
      </p>
      <p class="font-light leading-relaxed py-2">
        All included icons have been redesigned in Adobe Illustrator and
        exported as <strong class="font-bold">SVG</strong>. Since they are in
        vector format, they can be displayed beautifully even when significantly
        enlarged.
      </p>
    </FeatureDetail>
    <FeatureDetail
      heading="Includes raw SVG files"
      image={`/${base}/images/svgfiles.png`}
    >
      <p class="font-light leading-relaxed py-2">
        Launchpad Icons don't contain any logic and provide&nbsp;
        <strong class="font-bold">raw SVG files</strong>. It means that they can
        be easily adapted for use in&nbsp;
        <strong class="font-bold">general Unity apps, not just VRChat</strong>.
      </p>
      <p class="font-light leading-relaxed py-2">
        Launchpad Icons bundles them only as a <em>unitypackage</em> to import
        via VRChat Creator Companion, but we plan to offer it as an NPM package
        for ease of use on the web.
      </p>
    </FeatureDetail>
    <FeatureDetail heading="Free & OSS" image={`/${base}/images/by-nc.svg`}>
      <p class="font-light leading-relaxed py-2">
        Launchpad Icons is provided <strong class="font-bold">FREE</strong> of
        charge under the&nbsp;
        <TextAnchor url="https://creativecommons.org/licenses/by-nc/4.0/">
          Creative Commons 4.0 International (
          <strong class="font-bold">BY-NC</strong>) license
        </TextAnchor>
        . You can use it without restriction for non-commercial purposes,
        provided the copyright notice is displayed.
      </p>
      <p class="font-light leading-relaxed py-2">
        We also release it as open-source software. Welcome your&nbsp;
        <TextAnchor url="https://github.com/kurone-kito/launchpad-icons">
          contributions
        </TextAnchor>
        &nbsp;to make it better!
      </p>
    </FeatureDetail>
    <section class="mx-auto p-12 md:p-20 lg:container">
      <WideAnchorButton url={`/${base}/docs`}>Getting started</WideAnchorButton>
    </section>
  </>
);

export default Index;
