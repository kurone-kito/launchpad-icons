import type { Component } from 'solid-js';
// TODO: add the import assertion
import { base } from '../../constants.json';

/**
 * The site logo.
 * @returns The component.
 */
export const Logo: Component = () => (
  <h1>
    <a class="flex items-center opacity-70 hover:opacity-95" href={`/${base}`}>
      <img
        alt="Rocket"
        class="invert dark:invert-0"
        src={`/${base}/icons/Rocket.svg`}
        height="40"
        width="40"
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
