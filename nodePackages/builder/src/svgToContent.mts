import { readFile } from 'node:fs/promises';
import { ReadableStream } from 'node:stream/web';
import { format } from 'prettier';
import { getSvgName } from './getIconsList.mjs';
import type { SupportedFrameworks } from './parseArguments.mjs';

/** Type definition for the parameters of the framework. */
type FrameworkParams = readonly [
  component: string,
  imports: readonly string[],
  svgProps: string,
];

/** Type definition for the stream content. */
export type StreamContent = readonly [name: string, content: string];

/** Object with the parameters for each supported framework. */
const paramsByFrameworks: Readonly<
  Record<SupportedFrameworks, FrameworkParams>
> = {
  react: ['FC', ['FC', 'SVGProps'], 'SVGProps'],
  'solid-js': ['Component', ['Component', 'JSX'], 'JSX.SvgSVGAttributes'],
};

/**
 * Create a function that converts an SVG file into a component for the
 * specified framework.
 * @param framework The framework to use.
 * @returns A function that converts an SVG file into a component.
 */
export const svgToContent = (
  framework: SupportedFrameworks,
): ((name: string, svgContent: string) => Promise<string>) => {
  const [component, imports, svgProps] = paramsByFrameworks[framework];
  const importsLine = `import type { ${imports.join(', ')} } from '${framework}';`;
  return (name, svgContent) => {
    const body = svgContent
      .replaceAll('<?xml version="1.0" encoding="UTF-8" ?>\n', '')
      .replace(/<style>([\s\S]+)<\/style>/gm, '<style>{`$1`}</style>')
      .replace(/\.([a-m])/g, `.${name}-$1`)
      .replace(/class="([a-m])"/g, `class="${name}-$1"`)
      .replace(/<svg([^>]*)>/g, '<svg$1 {...props}>')
      .replaceAll(' class=', framework === 'react' ? ' className=' : ' class=');
    const componentLine = `export const ${name}: ${component}<${svgProps}<SVGSVGElement>> = (props) => (${body});`;
    const defaultExport = `export default ${name};`;
    const raw = [importsLine, componentLine, defaultExport].join('\n\n');
    return format(raw, { parser: 'typescript' });
  };
};

/**
 * Create a stream that converts SVG files into components for the specified
 * framework.
 * @param framework The framework to use.
 * @param pathes The pathes of the SVG files.
 * @returns A stream that converts SVG files into components.
 */
export const svgToContentStream = (
  framework: SupportedFrameworks,
  pathes: readonly string[],
): ReadableStream<StreamContent> => {
  const toContent = svgToContent(framework);
  return new ReadableStream({
    start: async (controller) => {
      await pathes.reduce(
        (acc, path) =>
          acc.then(async () => {
            const raw = readFile(path, 'utf-8');
            const name = getSvgName(path);
            controller.enqueue([name, await toContent(name, await raw)]);
          }),
        Promise.resolve(),
      );
      controller.close();
    },
  });
};
