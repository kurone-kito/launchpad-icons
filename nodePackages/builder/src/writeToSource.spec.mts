import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  ICON_NAMES,
  INDEX,
  initializeSourceDir,
  writeNamesList,
  writeToIndex,
  writeToSourceStream,
} from './writeToSource.mjs';

let cwd: string;
let originalCwd: string;
let srcDir: string;

beforeAll(async () => {
  cwd = await mkdtemp(join(tmpdir(), 'write-src-'));
  originalCwd = process.cwd();
  process.chdir(cwd);
  srcDir = await initializeSourceDir();
});

afterAll(async () => {
  process.chdir(originalCwd);
  await rm(cwd, { recursive: true, force: true });
});

describe('initializeSourceDir', () => {
  it('creates generated source directory', async () => {
    const info = await stat(srcDir);
    expect(info.isDirectory()).toBe(true);
  });
});

describe('writeNamesList', () => {
  it('writes icon names list', async () => {
    await writeNamesList(srcDir, ['Foo', 'Bar']);
    const body = await readFile(join(srcDir, `${ICON_NAMES}.mts`), 'utf8');
    expect(body).toContain('export const iconNames');
    expect(body).toContain('Foo');
    expect(body).toContain('Bar');
  });
});

describe('writeToSourceStream', () => {
  it('writes component content', async () => {
    const stream = writeToSourceStream(srcDir);
    const writer = stream.getWriter();
    await writer.write(['Foo', 'content']);
    await writer.close();
    const body = await readFile(join(srcDir, 'Foo.tsx'), 'utf8');
    expect(body).toBe('content');
  });
});

describe('writeToIndex', () => {
  it('writes index file for react', async () => {
    await writeToIndex(srcDir, ['Foo'], 'react');
    const body = await readFile(join(srcDir, INDEX), 'utf8');
    expect(body).toContain('iconNames.mjs');
    expect(body).toContain('Foo.js');
  });
});
