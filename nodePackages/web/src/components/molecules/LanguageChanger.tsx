import { A } from '@solidjs/router';
import { TbLanguageHiragana } from 'solid-icons/tb';
import type { Component } from 'solid-js';
import { useLanguageHref } from '../../modules/useLanguageHref';

/**
 * The language changer.
 * @returns The component.
 */
export const LanguageChanger: Component = () => {
  const enLink = useLanguageHref('en');
  const jaLink = useLanguageHref('ja');
  return (
    <details class="dropdown">
      <summary class="btn btn-ghost">
        <TbLanguageHiragana class="h-6 w-6" />
      </summary>
      <ul class="menu dropdown-content bg-base-100 text-base-content !mt-0 gap-2">
        <li>
          <A class="btn btn-ghost justify-start" href={enLink()}>
            🇬🇧 ENGLISH
          </A>
        </li>
        <li>
          <A class="btn btn-ghost justify-start" href={jaLink()}>
            🇯🇵 日本語
          </A>
        </li>
      </ul>
    </details>
  );
};
