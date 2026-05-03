import type { ButtonProps } from '../Button/Button.js';
export interface ButtonGroupButtonDSProps {
    id: string;
    children: React.ReactNode;
}
export type ButtonGroupButtonProps = ButtonProps<'button' | 'a'> & ButtonGroupButtonDSProps;
export declare const ButtonGroupButton: React.FC<ButtonGroupButtonProps>;
