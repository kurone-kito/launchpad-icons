import { parseArgs } from 'node:util';
import chalk from 'chalk';

/** The supported frameworks. */
const supportedFrameworks = ['react', 'solid-js'] as const;

/** type definition that represents the supported frameworks */
export type SupportedFrameworks = (typeof supportedFrameworks)[number];

/** type definition that represents the parsed arguments */
export interface ParsedArguments {
  /**
   * If `true`, the help message should be displayed.
   *
   * @default false
   */
  readonly help: boolean;

  /** the target framework */
  readonly target?: (typeof supportedFrameworks)[number] | undefined;
}

/** The usage message that should be displayed when the user requests help. */
export const usage = `${chalk.bold('Usage:')} liBuilder [options] <react|solid-js>

${chalk.bold('Arguments:')}
  <react|solid-js>  the target framework

${chalk.bold('Options:')}
  -h, --help  display this help message`;

/**
 * Parses the command-line arguments and returns the result.
 * @returns The parsed arguments.
 */
export const ParsedArguments = (): ParsedArguments => {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: { help: { type: 'boolean', short: 'h' } },
  });
  const [argTarget] = positionals;
  const { help = false } = values;
  const target = supportedFrameworks.find((fw) => fw === argTarget);
  return { help, target };
};
