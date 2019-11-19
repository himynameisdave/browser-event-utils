/**
 * Keyboard key constants
 */
export const ENTER = 'Enter';
export const ESCAPE = 'Escape';

export type KeysType = 'Enter' | 'Escape'


/**
 * Note: Removed this: Typings for Keys using an array key strings
 * eg: 'Enter' | 'Escape'
 * @example
 * const KEYS: string[] = [
 *     ENTER,
 *     ESCAPE,
 * ];
 * const keys = [...KEYS] as const;
 * export type KeysType = typeof keys[number];
 */
