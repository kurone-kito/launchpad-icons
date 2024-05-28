import type { Component, JSX } from 'solid-js';
// TODO: add the import assertion
import { iconsToDo } from '../../constants.json';
import { FeatureItem } from '../atoms/FeatureItem.js';

export interface FeaturesProps {
  /** The icons length. */
  readonly iconsLength: JSX.Element;
}

/**
 * The feature item properties.
 * @param props The component properties.
 * @returns The component.
 */
export const Features: Component<FeaturesProps> = (props) => {
  const { iconsLength } = props;
  return (
    <section class="article-container">
      <h3 class="heading-root">Features</h3>
      <ul class="grid gap-x-4 gap-y-6 grid-cols-1 md:grid-cols-2">
        <FeatureItem heading={<>{iconsLength} icons</>}>
          ...and {iconsToDo}+ icons in the future!
        </FeatureItem>
        <FeatureItem heading="SVG Icons">
          All icons redrawn in SVG vector format.
        </FeatureItem>
        <FeatureItem heading="Raw SVG files">
          You can also use outside of VRChat.
        </FeatureItem>
        <FeatureItem heading="Free & OSS!">CC BY-NC 4.0 License.</FeatureItem>
      </ul>
    </section>
  );
};
