import type { ChangeEvent } from 'react';
export interface CheckboxGroupContextValue {
    errorId?: string;
    descId?: string;
    name: string;
    value?: string[];
    error?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export declare const CheckboxGroupContext: import("react").Context<CheckboxGroupContextValue>;
