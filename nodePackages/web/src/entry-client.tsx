// @refresh reload
import { StartClient, mount } from '@solidjs/start/client';

/** The client handler. */
export default mount(() => <StartClient />, document.getElementById('app')!);
