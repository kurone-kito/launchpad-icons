import type { Component } from 'solid-js';

/**
 * The site logo.
 * @returns The component.
 */
export const Logo: Component = () => (
  <h1 class="flex items-end-safe text-base-content p-2 text-xl" role="banner">
    <a class="flex items-center gap-2 opacity-70 hover:opacity-95" href=".">
      <i class="vrc-icon-Rocket" />
      <span translate="no">VRC Icons</span>
    </a>
  </h1>
);
