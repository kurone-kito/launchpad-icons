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
      <Router
        base={import.meta.env.SERVER_BASE_URL}
        root={(props) => <Suspense>{props.children}</Suspense>}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
};

export default App;
