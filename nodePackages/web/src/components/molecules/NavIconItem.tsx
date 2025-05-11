import { A } from '@solidjs/router';
import clsx from 'clsx';
import type { Component, JSX, ParentProps } from 'solid-js';
import { splitProps } from 'solid-js';
import type { NavTooltipItemProps } from '../atoms/NavTooltipItem.js';
import { NavTooltipItem } from '../atoms/NavTooltipItem.js';

type BasedAnchorProps = Readonly<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>;

export interface NavIconItemProps
  extends NavTooltipItemProps,
    Omit<BasedAnchorProps, 'href' | 'target'>,
    Required<Pick<BasedAnchorProps, 'href'>> {}

/**
 * A navigation icon item.
 * @param props The component properties.
 * @returns The component.
 */
export const NavIconItem: Component<ParentProps<NavIconItemProps>> = (
  props,
) => {
  const [local, rest] = splitProps(props, ['rel', 'top', 'tooltip']);
  return (
    <NavTooltipItem top={local.top} tooltip={local.tooltip}>
      <A
        rel={clsx(local.rel, 'noopener noreferrer')}
        target="_blank"
        {...rest}
      />
    </NavTooltipItem>
  );
};
