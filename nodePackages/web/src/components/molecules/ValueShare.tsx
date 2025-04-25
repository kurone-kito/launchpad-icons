import { VCC } from '@kurone-kito/launchpad-icons-solid';
import { writeClipboard } from '@solid-primitives/clipboard';
import { isMobile } from '@solid-primitives/platform';
import { FaSolidCopy } from 'solid-icons/fa';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';

export interface ValueShareProps {
  /** The tooltip for adding to VCC. */
  readonly tooltipAddToVcc?: string | undefined;

  /** The tooltip for copying the value. */
  readonly tooltipToClipboard?: string | undefined;

  /** The value to share. */
  readonly value: string;

  /** The URL to add to VCC. */
  readonly vccSchemeUrl?: string | undefined;
}

/**
 * The URL share component.
 * @param props The component properties.
 * @returns The component.
 */
export const ValueShare: Component<ValueShareProps> = (props) => (
  <div class="input flex w-full items-center gap-0 pr-0">
    <span
      class="tooltip tooltip-bottom grow"
      data-tip={props.tooltipToClipboard}
    >
      <label class="flex gap-2">
        <input
          type="text"
          class="grow"
          onFocus={({ currentTarget }) => {
            currentTarget.select();
            writeClipboard(props.value);
          }}
          value={props.value}
          readonly
        />
        <FaSolidCopy class="mr-4 h-[1.125rem] w-[1.125rem]" role="button" />
      </label>
    </span>
    <Show when={!isMobile && props.vccSchemeUrl}>
      <span class="tooltip hidden md:inline" data-tip={props.tooltipAddToVcc}>
        <a
          class="btn btn-ghost"
          href={`${props.vccSchemeUrl}${encodeURIComponent(props.value)}`}
          role="button"
        >
          <VCC class="h-[18px] w-[18px]" />
        </a>
      </span>
    </Show>
  </div>
);
