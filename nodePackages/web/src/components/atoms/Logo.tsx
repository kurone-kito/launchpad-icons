import { Rocket } from '@kurone-kito/launchpad-icons-solid';
import type { Component } from 'solid-js';

/**
 * The site logo.
 * @returns The component.
 */
export const Logo: Component = () => (
  <h1 class="text-base-content p-2 text-xl" role="banner">
    <a class="flex items-center gap-2 opacity-70 hover:opacity-95" href=".">
      <Rocket class="[&_path]:fill-base-content h-5 w-5" />
      <span translate="no">VRC Icons</span>
    </a>
  </h1>
);
