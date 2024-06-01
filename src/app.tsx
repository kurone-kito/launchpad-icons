import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import type { Component } from 'solid-js';
import { Suspense } from 'solid-js';
import { base } from './constants.json';
import './app.css';

const App: Component = () => (
  <Router base={base} root={(props) => <Suspense>{props.children}</Suspense>}>
    <FileRoutes />
  </Router>
);

export default App;
