import { FaBrandsGithub, FaBrandsYoutube, FaSolidHouse } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { X } from '../atoms/X.js';
import { NavIconItem } from '../molecules/NavIconMenu.js';

/**
 * The site footer.
 * @returns The component.
 */
export const Footer: Component = () => (
  <footer class="bg-zinc-50 flex font-extralight gap-3 items-center justify-center p-6 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75">
    <p class="font-thin tracking-wide" translate="no">
      © 2024 Kuroné Kito
    </p>
    <address>
      <ul class="flex items-center">
        <NavIconItem
          title="@kuronekito"
          top
          url="https://youtube.com/@kuronekito"
        >
          <FaBrandsYoutube size={18} />
        </NavIconItem>
        <NavIconItem title="@kurone_kito" top url="https://x.com/kurone_kito">
          <span class="[&>svg]:h-4 [&>svg]:w-4">
            <X />
          </span>
        </NavIconItem>
        <NavIconItem
          title="@kurone-kito"
          top
          url="https://github.com/kurone-kito"
        >
          <FaBrandsGithub size={18} />
        </NavIconItem>
        <NavIconItem title="Home page" top url="https://kit.black/">
          <FaSolidHouse size={18} />
        </NavIconItem>
      </ul>
    </address>
  </footer>
);
