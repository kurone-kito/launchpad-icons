// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';
import { base } from './constants.json';

/** The description of the site. */
const description =
  'The Launchpad Icons provide 64 icons that look like VRChat icons';

/** The title of the site. */
const title = 'Launchpad Icons';

/** The server handler. */
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article# website: http://ogp.me/ns/website#">
        <head>
          <title>🚀 {title}</title>
          <meta charset="utf-8" />
          <meta name="author" content="Kuroné Kito" />
          <meta name="color-scheme" content="light dark" />
          <meta name="coverage" content="Worldwide" />
          <meta name="description" content={description} />
          <meta name="generator" content="SolidJS" />
          <meta
            name="keywords"
            content="asset,icons,Launchpad,SVG,unitypackage,UPM,VCC,VPM,VRChat"
          />
          <meta name="rating" content="General" />
          <meta name="referer" content="same-origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@kurone_kito" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="op:markup_version" content="v1.0" />
          <meta property="og:site_name" content={title} />
          <meta property="og:type" content="website" />
          <link rel="author" href="https://kit.black/" />
          <link rel="icon" href={`/${base}/icons/Rocket.svg`} />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
