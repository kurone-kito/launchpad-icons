import { SaturnWithSatellites } from '@kurone-kito/launchpad-icons-solid';
import type { Component, JSX, ParentProps } from 'solid-js';

export interface HeroProps extends Readonly<ParentProps> {
  /** The hero catch phrase. */
  readonly catchPhrase: string;

  /** The label for the getting started button. */
  readonly gettingStarted?: JSX.Element;

  /** The hero sub title. */
  readonly subTitle?: JSX.Element;
}

/**
 * The site hero.
 * @param props The component properties.
 * @returns The component.
 */
export const Hero: Component<HeroProps> = (props) => (
  <section class="hero bg-base-300 py-20">
    <div class="hero-content w-full flex-col">
      <div class="flex justify-center lg:w-full lg:pl-20">
        <div class="flex flex-col items-center text-center">
          <h2
            class="max-w-md py-6 text-5xl font-light [&_strong]:font-black"
            innerHTML={props.catchPhrase}
          />
          <p class="max-w-sm text-2xl font-thin">
            <strong class="font-bold">VRC Icons</strong>: {props.subTitle}
          </p>
          <ul class="flex gap-2 py-6">
            <li>
              <a
                class="btn btn-lg btn-primary rounded-full px-6"
                href="./docs"
                rel="help"
              >
                {props.gettingStarted}
              </a>
            </li>
          </ul>
        </div>
        <aside class="hidden max-w-96 lg:block">
          <i class="not-italic blur-sm">
            <SaturnWithSatellites class="[&_circle]:fill-base-content/15 [&_path]:fill-base-content/15 h-full w-full" />
          </i>
        </aside>
      </div>
      {props.children}
    </div>
  </section>
);
