// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

/** The server handler. */
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
