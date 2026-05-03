import type { SvgProps } from '@yleisradio/yds-icons-react';
import type { ReactNode } from 'react';
import type { ButtonSize } from '../componentTypes.js';
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;
export type AsProp<C extends React.ElementType> = {
    /**
     * An override of the default HTML tag.
     * Can also be another React component.
     */
    as?: C;
};
export type ExtendableProps<ExtendedProps = Record<string, unknown>, OverrideProps = Record<string, unknown>> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<C extends React.ElementType, Props = Record<string, unknown>> = ExtendableProps<PropsOf<C>, Props>;
/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 */
export type PolymorphicComponentProps<C extends React.ElementType, Props = Record<string, unknown>> = InheritableElementProps<C, Props & AsProp<C>>;
/**
 * Utility type to extract the `ref` prop from a polymorphic component
 */
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 */
export type PolymorphicComponentPropsWithRef<C extends React.ElementType, Props = Record<string, unknown>> = PolymorphicComponentProps<C, Props> & {
    ref?: PolymorphicRef<C>;
};
export interface ButtonDSProps {
    variant?: 'primary' | 'secondary' | 'text';
    isDisabled?: boolean;
    iconBefore?: React.ReactElement<SvgProps> | null;
    iconAfter?: React.ReactElement<SvgProps> | null;
    iconOnly?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    text?: string;
    accessibleText?: string;
    fullWidth?: boolean;
    removePadding?: boolean;
}
export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, ButtonDSProps>;
export type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => ReactNode | null;
export declare const Button: ButtonComponent;
