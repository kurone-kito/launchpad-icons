import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { useIcons } from '../../modules/useIcons.js';

/**
 * The icons length.
 * @returns The component.
 */
export const IconsLength: Component = () => {
  const icons = useIcons();
  return (
    <Show when={icons()} fallback="many">
      {icons()?.length}
    </Show>
  );
};
