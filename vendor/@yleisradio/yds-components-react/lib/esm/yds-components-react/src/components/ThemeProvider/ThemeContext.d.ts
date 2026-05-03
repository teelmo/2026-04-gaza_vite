import type { ThemeUnits } from './ThemeProvider.js';
export interface ThemeContextValue {
    unit: ThemeUnits;
    baseUnit: number;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue>;
