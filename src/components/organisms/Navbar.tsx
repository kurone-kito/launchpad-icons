import { FaBrandsGithub, FaSolidGlobe } from 'solid-icons/fa';
import type { Component } from 'solid-js';
// TODO: add the import assertion
import { base, vccUrl, vpmUrl } from '../../constants.json';
import { HamburgerButton } from '../atoms/HamburgerButton.js';
import { Logo } from '../atoms/Logo.js';
import { NavMenuItem } from '../atoms/NavMenuItem.js';
import { X } from '../atoms/X.js';
import { NavIconItem } from '../molecules/NavIconMenu.js';
import { DarkButton } from './DarkButton.js';

/**
 * The navigation bar.
 * @returns The component.
 */
export const Navbar: Component = () => (
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-1 shadow-dark-mild dark:bg-neutral-700 lg:py-2"
    data-twe-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3 lg:gap-6">
      <Logo />
      <HamburgerButton target="NavbarCollapseMenu" />
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:basis-auto lg:!flex lg:mt-0"
        id="NavbarCollapseMenu"
        data-twe-collapse-item
      >
        <ul
          class="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
          data-twe-navbar-nav-ref
        >
          <NavMenuItem
            class="font-bold hidden lg:block"
            url={`${vccUrl}${encodeURIComponent(vpmUrl)}`}
          >
            Add to VCC
          </NavMenuItem>
          <NavMenuItem url={`/${base}/docs`}>Documents</NavMenuItem>
          <NavMenuItem url={`/${base}/explore`}>Icons</NavMenuItem>
          <NavMenuItem url={`/${base}/pricing`}>Pricing</NavMenuItem>
        </ul>
        <div class="flex justify-end">
          <ul
            class="list-style-none me-8 ms-auto flex flex-row ps-0 lg:me-0"
            data-twe-navbar-nav-ref
          >
            <li class="p-1 lg:p-2">
              <DarkButton />
            </li>
            <NavIconItem
              title="Example VRChat world"
              url="https://vrchat.com/home/launch?worldId=wrld_30b17c73-5085-4ed3-b5fc-2fb9bbff7ae0"
            >
              <FaSolidGlobe size={24} />
            </NavIconItem>
            <NavIconItem
              title="GitHub"
              url="https://github.com/kurone-kito/launchpad-icons"
            >
              <FaBrandsGithub size={24} />
            </NavIconItem>
            <NavIconItem title="X" url="https://x.com/kurone_kito">
              <span class="[&>svg]:h-6 [&>svg]:w-6">
                <X />
              </span>
            </NavIconItem>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);
