import type { Component } from 'solid-js';
import { texts } from '../dynamic.json';

/**
 * The documents page.
 * @returns The component.
 */
const Docs: Component = () => (
  <>
    <h2 class="article-container heading-root pt-10">Getting started</h2>
    <article
      class="prose-article prose-a:rounded prose-a:border-2 prose-a:no-underline prose-a:border-neutral-500 dark:prose-a:border-neutral-400 prose-a:px-6 prose-a:pb-[6px] prose-a:my-2 prose-a:pt-2 prose-a:font-medium prose-a:uppercase prose-a:text-neutral-500 dark:prose-a:text-neutral-400 prose-a:transition prose-a:duration-150 prose-a:ease-in-out hover:prose-a:border-neutral-800 hover:prose-a:text-neutral-800 dark:hover:prose-a:border-neutral-200 dark:hover:prose-a:text-neutral-200 focus:prose-a:border-neutral-300 focus:prose-a:text-neutral-200 focus:prose-a:outline-none focus:prose-a:ring-0 active:prose-a:border-neutral-300 active:prose-a:text-neutral-200 dark:prose-a:hover:bg-neutral-600 dark:prose-a:focus:bg-neutral-600"
      innerHTML={texts.gettingStarted}
    />
    <article
      class="prose-anchor prose-article"
      innerHTML={texts.manuallyInstallation}
    />
  </>
);

export default Docs;
