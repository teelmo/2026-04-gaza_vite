import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef, useImperativeHandle, useEffect } from 'react';
import { DisableBodyScroll, StyledModal, ModalContent, CloseButton } from './Modal.styles.js';
import { Close } from '@yleisradio/yds-icons-react';

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
const Modal = _a => {
  var {
      children,
      modalRef,
      onClose,
      scrollBehavior = 'content',
      closeOnOutsideClick = true
    } = _a,
    rest = __rest(_a, ["children", "modalRef", "onClose", "scrollBehavior", "closeOnOutsideClick"]);
  const dialogRef = useRef(null);
  useImperativeHandle(modalRef, () => ({
    open: () => {
      const currentVerticalScroll = window.scrollY;
      dialogRef.current.showModal();
      window.scrollTo(0, currentVerticalScroll);
    },
    close: () => dialogRef.current.close()
  }));
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    const handleClickOutside = event => {
      if (closeOnOutsideClick && event.target === dialog) {
        dialog.close();
      }
    };
    dialog.addEventListener('click', handleClickOutside);
    return () => {
      dialog.removeEventListener('click', handleClickOutside);
    };
  }, [closeOnOutsideClick]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    const handleClose = () => {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [onClose]);
  return jsxs(Fragment, {
    children: [scrollBehavior === 'content' && jsx(DisableBodyScroll, {}), jsx(StyledModal, Object.assign({
      ref: dialogRef,
      "$scrollBehavior": scrollBehavior
    }, rest, {
      children: jsxs(ModalContent, {
        "$scrollBehavior": scrollBehavior,
        children: [jsx(CloseButton, {
          iconBefore: jsx(Close, {}),
          iconOnly: true,
          removePadding: true,
          variant: "text",
          onClick: () => dialogRef.current.close(),
          "aria-label": "Close modal"
        }), children]
      })
    }))]
  });
};

export { Modal };
