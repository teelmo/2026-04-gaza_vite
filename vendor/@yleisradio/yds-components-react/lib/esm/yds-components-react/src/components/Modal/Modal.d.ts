import type { HTMLAttributes } from 'react';
import React from 'react';
export interface ModalDSProps {
    modalRef?: React.RefObject<ModalHandle>;
    onClose?: () => void;
    children?: React.ReactNode;
    scrollBehavior?: 'content' | 'body';
    closeOnOutsideClick?: boolean;
}
export type ModalProps = HTMLAttributes<HTMLDialogElement> & ModalDSProps;
export type ModalHandle = {
    open: () => void;
    close: () => void;
};
/**
 * Modal component for displaying content in a dialog overlay.
 *
 * Usage:
 * - Use the `useModal` hook to get modalRef handle and `openModal()` / `closeModal()` functions.
 * - Pass the `modalRef` handle to the Modal's `modalRef` prop.
 * - Call the `openModal()`to open the modal.
 * - Call the `closeModal()` to close the modal.
 *
 * Example:
 * ```
 * const { modalRef, openModal, closeModal } = useModal();
 * <Button onClick={openModal}>Open Modal</Button>
 * <Modal modalRef={modalRef}>
 *   <Dialog title="Title">
 *     // Call closeModal() inside dialog action buttons
 *   </Dialog>
 * </Modal>
 * ```
 *
 * @see useModal
 *
 * @param {React.RefObject<ModalHandle>} [props.modalRef] - Ref handle for controlling the modal, recommended to use with useModal hook
 * @param {() => void} [props.onClose] - Callback fired when the modal is closed
 * @param {'content' | 'body'} [props.scrollBehavior='content'] - Scroll behavior, 'content' restricts scrolling to modal content, 'body' allows entire page to scroll. Passed down to children components.
 * @param {React.ReactNode} [props.children] - Content to display inside the modal
 * @param {boolean} [props.closeOnOutsideClick=true] - Whether clicking outside the modal content should close the modal
 */
export declare const Modal: ({ children, modalRef, onClose, scrollBehavior, closeOnOutsideClick, ...rest }: ModalProps) => import("react/jsx-runtime").JSX.Element;
