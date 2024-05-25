import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import type { Component } from 'solid-js';
import { Suspense } from 'solid-js';
import './app.css';

const App: Component = () => (
  <div>
    <nav class="flex gap-2">
      <h1>
        <a class="flex gap-2" href=".">
          <img src="icons/Rocket.svg" height="16" width="16" />
          <span>Launchpad Icons</span>
        </a>
      </h1>
      <ul class="flex gap-2">
        <li>
          <a href="docs">Docs</a>
        </li>
        <li>
          <a href="explore">Explore</a>
        </li>
        <li>
          <a href="pricing">Pricing</a>
        </li>
      </ul>
    </nav>
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => <Suspense>{props.children}</Suspense>}
    >
      <FileRoutes />
    </Router>
  </div>
);

export default App;
