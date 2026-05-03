import type { RadioGroupDirection } from '../componentTypes.js';
export interface RadioGroupContextValue {
    errorId?: string;
    descId?: string;
    name: string;
    value?: string | number;
    error?: boolean;
    direction?: RadioGroupDirection;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const RadioGroupContext: import("react").Context<RadioGroupContextValue>;
