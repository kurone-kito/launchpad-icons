import type { Component, ParentProps } from 'solid-js';
import { Footer } from '../organisms/Footer.js';
import { Navbar } from '../organisms/Navbar.js';

/**
 * The default template.
 * @param props The component properties.
 * @returns The component.
 */
export const DefaultTemplate: Component<ParentProps> = (props) => {
  const { children } = props;
  return (
    <div class="bg-zinc-100 text-surface dark:bg-neutral-600 dark:text-white">
      <Navbar />
      <main class="min-h-[calc(100vh-40px-98px)]">{children}</main>
      <Footer />
    </div>
  );
};
