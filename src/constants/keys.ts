/**
 * Keyboard key constants
 */
export const ENTER: string = 'Enter';
export const ESC: string = 'Esc';


const KEYS: Array<string> = [
    ENTER,
    ESC,
];

/**
 * Typings for Keys
 * eg: 'Enter' | 'Esc'
 */
const keys = [...KEYS] as const;
export type KeysType = typeof keys[number];

export default KEYS;