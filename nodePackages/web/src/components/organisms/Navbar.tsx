import { VRC } from '@kurone-kito/launchpad-icons-solid';
import { FaBrandsGithub } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { HamburgerButton } from '../atoms/HamburgerButton.js';
import { Booth } from '../atoms/icons/Booth.js';
import { X } from '../atoms/icons/X.js';
import { Logo } from '../atoms/Logo.js';
import { ChangeThemeIcon } from '../molecules/ChangeThemeIcon.js';
import { LanguageChanger } from '../molecules/LanguageChanger.js';
import { NavIconItem } from '../molecules/NavIconItem.js';
import { useTranslator } from '../../modules/createI18N.js';

/**
 * The navigation bar.
 * @returns The component.
 */
export const Navbar: Component = () => {
  const [expanded, setExpandState] = createSignal(false);
  const t = useTranslator();
  return (
    <header class="navbar bg-base-200 px-safe pt-safe flex-col items-stretch drop-shadow-xl lg:flex-row">
      <nav class="flex justify-between">
        <Logo />
        <HamburgerButton
          class="lg:hidden"
          onClick={(event) => setExpandState(event.currentTarget.checked)}
        />
      </nav>
      <nav
        class="flex grow-0 flex-col items-stretch lg:flex lg:grow lg:flex-row lg:justify-between"
        classList={{ hidden: !expanded() }}
      >
        <ul class="menu lg:menu-horizontal items-stretch pb-1 pt-4">
          <li>
            <a href="./docs">{t('docs')}</a>
          </li>
          <li>
            <a href="./explore">{t('explore')}</a>
          </li>
          <li>
            <a href="./pricing">{t('pricing')}</a>
          </li>
        </ul>
        <ul class="menu menu-horizontal justify-end self-end">
          <li>
            <LanguageChanger />
          </li>
          <li>
            <ChangeThemeIcon
              labelToDark={t('toDarkTheme')}
              labelToLight={t('toLightTheme')}
              toggleTooltip={t('toggleTheme')}
            />
          </li>
          <NavIconItem
            href="https://vrchat.com/home/launch?worldId=wrld_30b17c73-5085-4ed3-b5fc-2fb9bbff7ae0"
            tooltip={t('sampleWorld')}
          >
            <VRC class="h-6 w-6" />
          </NavIconItem>
          <NavIconItem
            tooltip="Booth"
            href="https://kurone-kito.booth.pm/items/5616180"
          >
            <Booth class="h-6 w-6" />
          </NavIconItem>
          <NavIconItem
            href="https://github.com/kurone-kito/launchpad-icons"
            tooltip="GitHub"
          >
            <FaBrandsGithub class="fill-base-content h-6 w-6" />
          </NavIconItem>
          <NavIconItem
            rel="author"
            tooltip="X"
            href="https://x.com/kurone_kito"
          >
            <X class="h-6 w-6" />
          </NavIconItem>
        </ul>
      </nav>
    </header>
  );
};
