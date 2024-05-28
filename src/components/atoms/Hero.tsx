import type { Component } from 'solid-js';
// TODO: add the import assertion
import { base, vccUrl, vpmUrl } from '../../constants.json';

/**
 * The site hero.
 * @returns The component.
 */
export const Hero: Component = () => (
  <section class="bg-zinc-50 px-6 py-20 text-center dark:bg-neutral-700">
    <h2 class="mb-6 text-3xl font-light md:text-5xl">
      VRChat like icons
      <br />
      are now in <span class="font-black">SVG</span>.
    </h2>
    <p class="font-thin text-lg">LaunchPad Icons for your VRChat project</p>
    <p class="flex gap-2 justify-center py-2">
      <a
        class="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary/50 hover:text-black focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:text-white dark:focus:bg-primary/50"
        data-twe-ripple-init
        data-twe-ripple-color="primary"
        href={`/${base}/docs`}
      >
        Learn more
      </a>
      <a
        class="hidden rounded border-2 border-neutral-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-500 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 lg:inline-block"
        data-twe-ripple-init
        data-twe-ripple-color="success"
        href={`${vccUrl}${encodeURIComponent(vpmUrl)}`}
      >
        Add to VCC
      </a>
    </p>
  </section>
);
