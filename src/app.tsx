import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import type { Component } from 'solid-js';
import { onMount, Suspense } from 'solid-js';
import { DefaultTemplate } from './components/templates/DefaultTemplate.js';
import './app.css';

const App: Component = () => {
  onMount(async () => {
    const { Collapse, initTWE, Ripple, Tooltip } = await import('tw-elements');
    initTWE({ Collapse, Ripple, Tooltip });
  });
  return (
    <DefaultTemplate>
      <Router
        base={import.meta.env.SERVER_BASE_URL}
        root={(props) => <Suspense>{props.children}</Suspense>}
      >
        <FileRoutes />
      </Router>
    </DefaultTemplate>
  );
};

export default App;
