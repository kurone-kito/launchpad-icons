import { describe, expect, it } from 'vitest';
import { ParsedArguments } from './parseArguments.mjs';

describe('ParsedArguments', () => {
  it('parses help option', () => {
    const result = ParsedArguments(['-h']);
    expect(result).toEqual({ help: true, target: undefined });
  });

  it('parses framework argument', () => {
    const result = ParsedArguments(['react']);
    expect(result).toEqual({ help: false, target: 'react' });
  });

  it('ignores unsupported argument', () => {
    const result = ParsedArguments(['unknown']);
    expect(result).toEqual({ help: false, target: undefined });
  });
});
