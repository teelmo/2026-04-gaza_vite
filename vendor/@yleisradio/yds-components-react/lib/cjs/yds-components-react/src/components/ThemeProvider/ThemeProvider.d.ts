import { type ReactNode } from 'react';
import type { ThemeProp } from '../componentTypes.js';
interface ThemeProviderProps {
    /** Defines theme to use. Default is light */
    theme?: ThemeProp;
    /** Defines used unit for numeral values. Possible values are rem, em and px and default is rem. */
    unit?: ThemeUnits;
    /** Define projects base font size in px. Default is 16. */
    baseUnit?: number;
    children: ReactNode;
}
export type ThemeUnits = 'px' | 'rem' | 'em';
export declare const YdsThemeProvider: ({ theme: themeProp, unit, baseUnit, children, }: ThemeProviderProps) => JSX.Element;
export {};
