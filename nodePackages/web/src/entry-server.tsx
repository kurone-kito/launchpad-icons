// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

/** The server handler. */
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head prefix="og: http://ogp.me/ns#">
          <meta charset="utf-8" />
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
