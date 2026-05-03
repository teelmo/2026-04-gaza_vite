import { type HTMLAttributes } from 'react';
import { type SvgProps } from '@yleisradio/yds-icons-react';
export interface DialogDSProps {
    title: string;
    titleAs?: string;
    illustrativeIcon?: React.ReactElement<SvgProps> | null;
    size?: 'sm' | 'md';
    children?: React.ReactNode;
    actions?: React.ReactNode;
}
export type DialogProps = HTMLAttributes<HTMLDivElement> & DialogDSProps;
/**
 * Dialog component for displaying dialogs with title, content, and actions.
 *
 * @param {string} [props.title] - Dialog title text
 * @param {React.ReactNode} [props.schildren] - Dialog content
 * @param {React.ReactNode} [props.actions] - Action buttons that handle user responses
 *
 */
export declare const Dialog: ({ title, titleAs, illustrativeIcon, size, children, actions, ...rest }: DialogProps) => import("react/jsx-runtime").JSX.Element;
