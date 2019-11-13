/**
 * Keyboard key constants
 */
export const ENTER = 'Enter';
export const ESCAPE = 'Escape';


const KEYS: string[] = [
    ENTER,
    ESCAPE,
];

/**
 * Typings for Keys
 * eg: 'Enter' | 'Escape'
 */
const keys = [...KEYS] as const;
export type KeysType = typeof keys[number];

export default KEYS;
