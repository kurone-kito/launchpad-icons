import { FaSolidMoon, FaSolidSun } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { useDarkModeState } from '../../modules/useDarkModeState.js';

/**
 * The dark mode button.
 * @returns The component.
 */
export const DarkButton: Component = () => {
  const [dark, setDark] = useDarkModeState();
  return (
    <button
      class="nav-icon-button"
      onClick={() => setDark((prev) => !prev)}
      data-twe-placement="bottom"
      data-twe-toggle="tooltip"
      title="Toggle dark mode"
    >
      <Show when={dark()} fallback={<FaSolidSun size={24} />}>
        <FaSolidMoon size={24} />
      </Show>
    </button>
  );
};
