import { describe, expect, it } from 'vitest';
import { svgToContent } from './svgToContent.mjs';

const simpleSvg = '<svg viewBox="0 0 32 32"><path d="M0 0h32v32z"/></svg>';

describe('svgToContent', () => {
  it('creates a React component', async () => {
    const toContent = svgToContent('react');
    const result = await toContent('Sample', simpleSvg);
    expect(result).toContain('import type { FC, SVGProps } from "react"');
    expect(result).toContain('export const Sample');
    expect(result).toContain('{...props}');
  });

  it('creates a Solid component', async () => {
    const toContent = svgToContent('solid-js');
    const result = await toContent('Sample', simpleSvg);
    expect(result).toContain('import type { Component, JSX } from "solid-js"');
    expect(result).toContain('export const Sample');
  });
});
