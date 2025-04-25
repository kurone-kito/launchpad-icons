import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { optimize } from 'svgo';
import meta from '../generated-src/_Meta.json' with { type: 'json' };

/** The source directory */
const src = resolve('generated-src');

/** The output directory */
const dstDir = resolve('dist');

/** The output file */
const dst = join(dstDir, 'index.css');

/** The common notation */
const common = [
  '@import "tailwindcss";',
  '@utility vrc-iconbase { @apply align-middle bg-current h-4 inline-block mask-center mask-contain mask-no-repeat not-italic w-4; }',
];

/** Tailwind CSS */
const css = readdirSync(src)
  .filter((f) => f.endsWith('.svg'))
  .filter((f) => !meta.coloredIcons.includes(basename(f, '.svg')))
  .map((f) => {
    const raw = readFileSync(join(src, f), 'utf-8');
    const name = basename(f, '.svg');
    const { data } = optimize(raw, { multipass: true });
    const encoded = encodeURIComponent(data.replace(/\s+/g, ' '));
    const url = `url('data:image/svg+xml;utf8,${encoded}')`;
    return `@utility vrc-icon-${name} { @apply vrc-iconbase mask-[${url}]; }`;
  });

mkdirSync(dstDir, { recursive: true });
writeFileSync(dst, [...common, ...css].join('\n'));
