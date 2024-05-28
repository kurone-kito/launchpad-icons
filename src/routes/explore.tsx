import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { IconItem } from '../components/atoms/IconItem.js';
import { IconsLength } from '../components/organisms/IconsLength.js';
import { useIcons } from '../modules/useIcons.js';

/**
 * The explore page.
 * @returns The component.
 */
const Explore: Component = () => {
  const icons = useIcons();
  return (
    <>
      <article class="article-container">
        <h2 class="heading-root">Icons explorer</h2>
        <p class="text-lg font-light py-4 dark:text-neutral-300">
          The Launchpad Icons provide&nbsp;
          <strong class="font-bold">
            <IconsLength /> icons
          </strong>
          . The&nbsp;
          <marker class="border-2 border-primary-500 rounded-md p-0.5 dark:border-primary-400">
            highlighted
          </marker>
          &nbsp;icons are those added in the latest version.
        </p>
        <div class="py-4 gap-x-2 gap-y-2 lg:gap-x-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9">
          <For each={icons()} fallback={<div>Loading...</div>}>
            {(name) => <IconItem name={name} />}
          </For>
        </div>
      </article>
    </>
  );
};

export default Explore;
