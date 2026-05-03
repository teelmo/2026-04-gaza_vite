export interface ButtonGroupContextType {
    activeButtons: Set<string>;
    toggleButton: (value: string) => void;
    variant: 'primary' | 'secondary';
    multiple?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    showIcon?: boolean;
}
export declare const ButtonGroupContext: import("react").Context<ButtonGroupContextType>;
export declare const useButtonGroupContext: () => ButtonGroupContextType;
