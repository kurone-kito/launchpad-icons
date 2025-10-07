/**
 * Type definition that the record which is not null.
 * @template T The record value type.
 */
export type RequiredNonNullable<out T extends object> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};
