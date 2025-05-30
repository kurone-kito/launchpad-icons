import type { ReadonlyRecord } from '../types/types.mjs';

/** Type definition for the resources object. */
export type Resources = ReadonlyRecord<ResourcesKeys, string>;

/** Type definition for the resources keys. */
export type ResourcesKeys =
  | 'addToVcc'
  | 'author'
  | 'catchPhrase'
  | 'commandToClipboard'
  | 'description'
  | 'docs'
  | 'explore'
  | 'exploreDescription'
  | 'exploreTitle'
  | 'features'
  | 'features1Body'
  | 'features1Heading'
  | 'features2Body'
  | 'features2Heading'
  | 'features3Body'
  | 'features3Heading'
  | 'features4Body'
  | 'features4Heading'
  | 'gettingStarted'
  | 'gettingStartedTitle'
  | 'language'
  | 'plan'
  | 'planFree1'
  | 'planFree2'
  | 'planBasic1'
  | 'planBasic2'
  | 'planPro1'
  | 'planPro2'
  | 'pricing'
  | 'pricingTitle'
  | 'sampleWorld'
  | 'subscribe'
  | 'subscribed'
  | 'subtitle'
  | 'term'
  | 'toDarkTheme'
  | 'toLightTheme'
  | 'toggleTheme'
  | 'urlToClipboard';
