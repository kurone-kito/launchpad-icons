#!/usr/bin/env node --enable-source-maps

import chalk from 'chalk';
import { copyToMeta } from './copyToMeta.mjs';
import { ParsedArguments, usage } from './parseArguments.mjs';
import { getAssetsDir, getSvgNames, getSvgPathes } from './getIconsList.mjs';
import { svgToContentStream } from './svgToContent.mjs';
import {
  initializeSourceDir,
  writeNamesList,
  writeToIndex,
  writeToSourceStream,
} from './writeToSource.mjs';

const { help, target } = ParsedArguments();
if (help) {
  console.warn(usage);
  process.exit(0);
}

if (!target) {
  console.error(chalk.redBright('Missing target framework.'));
  console.warn(usage);
  process.exit(1);
}

const assetsDir = getAssetsDir();
if (target === 'web') {
  await copyToMeta(assetsDir);
} else {
  const src = await initializeSourceDir();
  const icons = await getSvgPathes(assetsDir);
  const names = getSvgNames(icons);
  await writeNamesList(src, names);
  await svgToContentStream(target, icons).pipeTo(writeToSourceStream(src));
  await writeToIndex(src, names, target);
}
