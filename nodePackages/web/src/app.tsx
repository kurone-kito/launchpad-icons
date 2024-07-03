import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import type { Component } from 'solid-js';
import { onMount, Suspense } from 'solid-js';
import { themeChange } from 'theme-change';
import './app.css';

/**
 * The main application component.
 * @returns The component.
 */
const App: Component = () => {
  onMount(() => themeChange(false));
  return (
    <MetaProvider>
      <nav class="flex gap-2">
        <h1 class="font-black">
          <a href=".">🚀 Launchpad Icons</a>
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
      <main class="min-h-[calc(100vh-40px-98px)]">
        <Router
          base={import.meta.env.SERVER_BASE_URL}
          root={(props) => <Suspense>{props.children}</Suspense>}
        >
          <FileRoutes />
        </Router>
      </main>
    </MetaProvider>
  );
};

export default App;
