import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { copyToMeta } from './copyToMeta.mjs';

describe('copyToMeta', () => {
  let cwd: string;
  let assetsDir: string;
  let originalCwd: string;

  beforeAll(async () => {
    cwd = await mkdtemp(join(tmpdir(), 'copy-meta-'));
    originalCwd = process.cwd();
    process.chdir(cwd);
    assetsDir = join(cwd, 'assets');
    await mkdir(assetsDir, { recursive: true });
    await mkdir('src', { recursive: true });
    await writeFile(
      join(assetsDir, '_Meta.json'),
      JSON.stringify({ foo: 'bar' }),
    );
  });

  afterAll(async () => {
    process.chdir(originalCwd);
    await rm(cwd, { recursive: true, force: true });
  });

  it('copies meta json to src directory', async () => {
    await copyToMeta(assetsDir);
    const data = await readFile(join(cwd, 'src', 'meta.json'), 'utf8');
    expect(JSON.parse(data)).toEqual({ foo: 'bar' });
  });
});
