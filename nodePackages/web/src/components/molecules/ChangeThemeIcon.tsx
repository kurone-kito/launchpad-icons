import { FaSolidMoon, FaSolidSun } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { mergeProps, onMount } from 'solid-js';
import type { CreateDarkModeOptions } from '../../modules/createDarkMode.js';
import { createDarkMode } from '../../modules/createDarkMode.js';

export interface ChangeThemeIconProps extends Partial<CreateDarkModeOptions> {
  /**
   * The label to change to dark mode.
   *
   * @default ''
   */
  readonly labelToDark?: string | undefined;

  /**
   * The label to change to light mode.
   *
   * @default ''
   */
  readonly labelToLight?: string | undefined;

  /** The tooltip to toggle the theme. */
  readonly toggleTooltip: string;
}

/**
 * The icon to change the theme.
 * @param props The component properties.
 * @returns The component.
 */
export const ChangeThemeIcon: Component<ChangeThemeIconProps> = (props) => {
  const concProps = mergeProps(
    {
      dark: 'dark',
      labelToDark: '',
      labelToLight: '',
      light: 'light',
    } as const,
    props,
  );
  const isDarkMode = createDarkMode(concProps);
  let ref!: HTMLInputElement;
  onMount(() => (ref.checked = isDarkMode()));
  return (
    <span
      class="tooltip tooltip-bottom h-10"
      data-tip={concProps.toggleTooltip}
    >
      <label class="swap swap-rotate">
        <input
          data-toggle-theme={`${concProps.light},${concProps.dark}`}
          ref={ref}
          type="checkbox"
          value="dark"
        />
        <FaSolidSun
          aria-label={concProps.labelToDark}
          class="fill-base-content swap-off h-6 w-6"
        />
        <FaSolidMoon
          aria-label={concProps.labelToLight}
          class="fill-base-content swap-on h-6 w-6"
        />
      </label>
    </span>
  );
};
