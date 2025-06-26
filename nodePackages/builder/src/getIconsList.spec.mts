import { mkdir, mkdtemp, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  getSvgName,
  getSvgNames,
  getSvgPathes,
  isSvg,
} from './getIconsList.mjs';

let dir: string;

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), 'icons-'));
  await mkdir(join(dir, 'sub'), { recursive: true });
  await writeFile(join(dir, 'a.svg'), '<svg />');
  await writeFile(join(dir, 'b.txt'), '');
  await writeFile(join(dir, 'sub', 'c.svg'), '<svg />');
});

afterAll(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe('isSvg', () => {
  it('detects svg files', async () => {
    const files = await readdir(dir, { withFileTypes: true });
    const svg = files.find((f) => f.name === 'a.svg');
    const txt = files.find((f) => f.name === 'b.txt');
    expect(svg && isSvg(svg)).toBe(true);
    expect(txt && isSvg(txt)).toBe(false);
  });
});

describe('getSvgName', () => {
  it('returns basename without extension', () => {
    expect(getSvgName('/path/icon.svg')).toBe('icon');
  });
});

describe('getSvgPathes', () => {
  it('collects svg files recursively', async () => {
    const result = await getSvgPathes(dir);
    expect(result.toSorted()).toEqual([
      join(dir, 'a.svg'),
      join(dir, 'sub', 'c.svg'),
    ]);
  });
});

describe('getSvgNames', () => {
  it('returns unique sorted names', () => {
    const names = getSvgNames([
      join(dir, 'a.svg'),
      join(dir, 'sub', 'c.svg'),
      join(dir, 'a.svg'),
    ]);
    expect(names).toEqual(['a', 'c']);
  });
});
