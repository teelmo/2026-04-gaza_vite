import type { RadioGroupDirection } from '../componentTypes.js';
import { type RadioGroupProps } from './RadioGroup.js';
export interface RadioGroupNumericScaleProps extends RadioGroupProps {
    startLabel?: string;
    endLabel?: string;
    direction?: RadioGroupDirection;
}
export declare const RadioGroupNumericScale: import("react").ForwardRefExoticComponent<RadioGroupNumericScaleProps & import("react").RefAttributes<HTMLDivElement>>;
