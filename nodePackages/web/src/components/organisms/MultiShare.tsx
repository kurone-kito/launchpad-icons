import type { Component } from 'solid-js';
import { For, Show, createSignal } from 'solid-js';
import type { ValueShareProps } from '../molecules/ValueShare.js';
import { ValueShare } from '../molecules/ValueShare.js';

export interface MultiShareItem extends ValueShareProps {
  /** The label for the share item. */
  readonly label: string;
}

export interface MultiShareProps {
  /** The share items. */
  readonly items: readonly MultiShareItem[];
}

/**
 * The multi-share component.
 * @param props The component properties.
 * @returns The component.
 */
export const MultiShare: Component<MultiShareProps> = (props) => {
  const [shareData, setShareData] = createSignal<ValueShareProps>(
    props.items[0]!,
  );
  return (
    <div class="mockup-browser bg-accent/10 w-full max-w-3xl">
      <div
        class="mockup-browser-toolbar tabs tabs-lifted tabs-lg !mb-0 w-full"
        role="tablist"
      >
        <For each={props.items}>
          {(item, index) => (
            <input
              aria-label={item.label}
              data-tooltip-copy={item.tooltipToClipboard}
              data-tooltip-vcc={item.tooltipAddToVcc}
              data-vcc={item.vccSchemeUrl}
              checked={index() === 0}
              class="tab [--tab-border:0px]"
              name="target"
              onChange={({ currentTarget }) =>
                setShareData({
                  tooltipAddToVcc: currentTarget.dataset['tooltip-vcc'],
                  tooltipToClipboard: currentTarget.dataset['tooltip-copy'],
                  vccSchemeUrl: currentTarget.dataset.vcc,
                  value: currentTarget.value,
                })
              }
              role="tab"
              type="radio"
              value={item.value}
            />
          )}
        </For>
      </div>
      <div class="bg-base-100 flex justify-stretch p-6">
        <Show when={shareData()}>
          <ValueShare {...shareData()} />
        </Show>
      </div>
    </div>
  );
};
