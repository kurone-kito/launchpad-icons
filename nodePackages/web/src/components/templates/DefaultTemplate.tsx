import type { Component, ParentProps } from 'solid-js';
import { Footer } from '../organisms/Footer.js';
import { Navbar } from '../organisms/Navbar.js';

/**
 * The default template.
 * @param props The component properties.
 * @returns The component.
 */
export const DefaultTemplate: Component<ParentProps> = (props) => {
  return (
    <>
      <Navbar />
      <main
        class="min-h-[calc(100vh-56px-98px)]"
        style={{
          '--image-external-url': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z'/%3E%3C/svg%3E%0A")`,
        }}
      >
        {props.children}
      </main>
      <Footer />
    </>
  );
};
