import * as icons from '@kurone-kito/launchpad-icons-solid';
import type { Component } from 'solid-js';
import { For, onMount } from 'solid-js';
import { themeChange } from 'theme-change';
import { IconItem } from '../../components/atoms/IconItem.js';
import { Head } from '../../components/organisms/Head.js';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate.js';
import Constants from '../../constants.yml';
import { useTranslator } from '../../modules/createI18N.js';

const { iconNames } = icons;
const iconsLength = iconNames.length;
const newList = Constants['newList'] as readonly string[];

/**
 * The explore page.
 * @returns The component.
 */
const Explore: Component = () => {
  onMount(() => themeChange(false));
  const t = useTranslator();
  return (
    <DefaultTemplate>
      <article class="article-container">
        <Head
          next="./pricing"
          pagePath="explore"
          prev="./docs"
          title={t('exploreTitle')}
        />
        <h2 class="heading-root pt-10">{t('exploreTitle')}</h2>
        <p
          class="[&_marker]:border-accent py-4 text-lg font-light [&_marker]:rounded-md [&_marker]:border-2 [&_marker]:p-0.5 [&_strong]:font-extrabold"
          innerHTML={t('exploreDescription', { num: iconsLength })}
        />
        <div
          class="grid grid-cols-3 gap-x-2 gap-y-2 py-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 lg:gap-x-4 xl:grid-cols-7 2xl:grid-cols-9"
          role="list"
        >
          <For each={iconNames}>
            {(icon) => {
              const Icon = icons[icon];
              return (
                <IconItem name={icon} new={newList.includes(icon)}>
                  <Icon class="h-full w-full" />
                </IconItem>
              );
            }}
          </For>
        </div>
      </article>
    </DefaultTemplate>
  );
};

export default Explore;
