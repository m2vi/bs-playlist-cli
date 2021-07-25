import { magenta, green, red } from 'colors';

export const k = (str: string) => magenta(str);
export const succ = (str: string) => console.log(green(str));
export const err = (str: string) => console.log(red(str));
export const plain = (str: string) => console.log(str);
