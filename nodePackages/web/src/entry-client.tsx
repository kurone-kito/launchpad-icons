// @refresh reload
import { mount, StartClient } from '@solidjs/start/client';

/** The client handler. */
export default mount(() => <StartClient />, document.getElementById('app')!);
