import type { Setter, Signal } from 'solid-js';
import { createSignal } from 'solid-js';

export interface CreateStoredSignalParams<T> {
  /** The key for the stored signal. */
  key: string;

  /** The default value for the stored signal. */
  defaultValue: T;

  /** The storage to use. */
  storage?: Storage;
}

/**
 * Creates a stored signal.
 * @param params The parameters.
 * @returns The stored signal.
 */
export const createStoredSignal = <T>(
  params: CreateStoredSignalParams<T>,
): Signal<T> => {
  const client = typeof window !== 'undefined';
  const {
    key,
    defaultValue,
    storage = client ? localStorage : undefined,
  } = params;
  const item = client && storage?.getItem(key);
  const initialValue = item ? (JSON.parse(item) as T) : defaultValue;
  const [value, setValue] = createSignal(initialValue);
  const setValueAndStore = (arg: Parameters<Setter<T>>[0]) => {
    const v = setValue<T>(arg);
    if (client) {
      storage?.setItem(key, JSON.stringify(v));
    }
    return v;
  };
  return [value, setValueAndStore as Setter<T>] as const;
};
