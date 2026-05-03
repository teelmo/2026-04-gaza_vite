import type { HTMLAttributes } from 'react';
import React from 'react';
export interface BottomSheetDSProps {
    bottomSheetRef?: React.RefObject<BottomSheetHandle>;
    title?: string;
    titleAs?: string;
    onClose?: () => void;
    children?: React.ReactNode;
    dragToClose?: boolean;
    align?: 'center' | 'left' | 'right';
    nonModal?: boolean;
    closeOnOutsideClick?: boolean;
    size?: 'compact' | 'default' | 'expanded';
}
export type BottomSheetProps = HTMLAttributes<HTMLDialogElement> & BottomSheetDSProps;
export type BottomSheetHandle = {
    open: () => void;
    close: () => void;
};
/**
 * BottomSheet component for displaying supplementary content that slides up from the bottom edge of the viewport.
 *
 * Usage:
 * - Use the `useBottomSheet` hook to obtain a `bottomSheetRef` handle plus `openBottomSheet()` / `closeBottomSheet()` functions.
 * - Pass the returned `bottomSheetRef` to the BottomSheet via the `bottomSheetRef` prop.
 * - Call `openBottomSheet()` to open the bottom sheet and `closeBottomSheet()` to close it.
 * - Optional `title` can be supplied to render a heading; use `titleAs` to change the rendered HTML tag (e.g. `h2`).
 * - Optional drag-to-close behavior can be enabled with `dragToClose` (adds a drag handle and pointer gesture support).
 * - Set `nonModal` to true to allow background page interaction (body scroll is not disabled, Escape handling only applies when focus is within the sheet, and outside clicks will NOT close it even if `closeOnOutsideClick` is true).
 * - When `nonModal` is false (default, modal behavior) body scroll is disabled and (if `closeOnOutsideClick` is true) clicking outside the content closes the sheet.
 * - Alignment of the sheet can be controlled with `align`.
 *
 * Example:
 *
 * ```tsx
 * import { Button, Dialog, useBottomSheet, BottomSheet } from '@yleisradio/yds-components-react';
 *
 * const Example = () => {
 *   const { bottomSheetRef, openBottomSheet, closeBottomSheet } = useBottomSheet();
 *
 *   return (
 *     <>
 *       <Button onClick={openBottomSheet}>Open Bottom Sheet</Button>
 *       <BottomSheet
 *         bottomSheetRef={bottomSheetRef}
 *         title="Settings"
 *         titleAs="h2"
 *         dragToClose
 *         align="center"
 *         onClose={() => console.log('Bottom sheet closed')}>
 *         <Dialog title="Settings">
 *           <p>Interactive content here</p>
 *           <Button onClick={closeBottomSheet}>Done</Button>
 *         </Dialog>
 *       </BottomSheet>
 *     </>
 *   );
 * };
 * ```
 *
 * Accessibility & Behavior:
 * - Escape key closes the sheet (modal always; non-modal only when focus is inside the dialog).
 * - Outside click close only applies for modal sheets when `closeOnOutsideClick` is true.
 * - Drag-to-close (if enabled) requires the user to drag downward past an internal threshold.
 *
 * @see useBottomSheet
 *
 * @param {React.RefObject<BottomSheetHandle>} [props.bottomSheetRef] Ref handle for controlling the bottom sheet (open/close) – recommended to use via `useBottomSheet`.
 * @param {string} [props.title] Optional heading text displayed in the sheet header.
 * @param {string} [props.titleAs] HTML tag name to render for the title (e.g. 'h2').
 * @param {() => void} [props.onClose] Callback fired after the sheet finishes closing (native dialog "close" event).
 * @param {boolean} [props.dragToClose=false] Enables pointer drag gesture & handle for closing the sheet.
 * @param {'center' | 'left' | 'right'} [props.align='center'] Horizontal alignment of the sheet.
 * @param {boolean} [props.nonModal=false] If true renders a non-modal dialog (no backdrop, background remains interactive, no body scroll lock, outside click does not close).
 * @param {boolean} [props.closeOnOutsideClick=true] If true, clicking outside the sheet closes it (modal only; ignored when `nonModal` is true).
 * @param {React.ReactNode} [props.children] Content displayed inside the sheet.
 */
export declare const BottomSheet: ({ bottomSheetRef, title, titleAs, onClose, dragToClose, align, nonModal, closeOnOutsideClick, size, children, ...rest }: BottomSheetProps) => import("react/jsx-runtime").JSX.Element;
