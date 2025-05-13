import { createDateNow } from '@solid-primitives/date';
import { FaBrandsGithub, FaBrandsYoutube } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { useTranslator } from '../../modules/createI18N.js';
import { X } from '../atoms/icons/X.js';
import { NavIconItem } from '../molecules/NavIconItem.js';

const [now] = createDateNow();

/**
 * The site footer.
 * @returns The component.
 */
export const Footer: Component = () => {
  const t = useTranslator();
  return (
    <footer class="bg-base-300 text-base-content px-safe pb-safe-or-6 flex items-center justify-center gap-1 pt-6 text-center font-extralight sm:gap-3">
      <p class="font-thin tracking-wide" translate="no">
        © {now().getFullYear()} {t('author')}
      </p>
      <address class="not-italic">
        <ul class="menu menu-horizontal" role="navigation">
          <NavIconItem
            href="https://youtube.com/@kuronekito"
            tooltip="@kuronekito"
            top
          >
            <FaBrandsYoutube class="fill-base-content h-[1.125rem] w-[1.125rem]" />
          </NavIconItem>
          <NavIconItem
            href="https://x.com/kurone_kito"
            rel="author"
            tooltip="@kurone_kito"
            top
          >
            <X class="h-4 w-4" />
          </NavIconItem>
          <NavIconItem
            href="https://github.com/kurone-kito"
            tooltip="@kurone-kito"
            top
          >
            <FaBrandsGithub class="fill-base-content h-[1.125rem] w-[1.125rem]" />
          </NavIconItem>
          <NavIconItem href="https://kit.black/" tooltip="Home page" top>
            <i class="vrc-icon-Home" />
          </NavIconItem>
        </ul>
      </address>
    </footer>
  );
};
