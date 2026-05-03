export interface DropdownMenuGroupContextType {
    size: 'xs' | 'sm' | 'md' | 'lg';
    variant: 'primary' | 'text';
    menuSize: 'sm' | 'md';
}
export declare const DropdownMenuGroupContext: import("react").Context<DropdownMenuGroupContextType>;
export declare const useDropdownMenuGroupContext: () => DropdownMenuGroupContextType;
