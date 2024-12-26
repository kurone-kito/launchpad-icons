import { render, screen } from '@solidjs/testing-library';
import { expect, it } from 'vitest';

import * as icons from '../dist/index.mjs';

it.each(icons.iconNames)('should render: %s', (iconName) => {
  const Icon = icons[iconName];
  render(<Icon role="img" />);
  expect(screen.getByRole('img')).toBeTruthy();
});
