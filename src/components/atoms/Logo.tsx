import type { Component } from 'solid-js';

/**
 * The site logo.
 * @returns The component.
 */
export const Logo: Component = () => (
  <h1 class="p-2">
    <a
      class="flex gap-2 items-center opacity-70 text-xl hover:opacity-95"
      href="."
    >
      <img
        alt="Rocket"
        class="invert m-1 dark:invert-0"
        src="icons/Rocket.svg"
        height="24"
        width="24"
      />
      <span
        class="hidden font-thin text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:inline"
        translate="no"
      >
        Launchpad Icons
      </span>
    </a>
  </h1>
);
