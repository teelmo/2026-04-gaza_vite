import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef, useState, useCallback, useImperativeHandle, useEffect } from 'react';
import { DisableBodyScroll, StyledBottomSheetDialog, BottomSheetContainer, BottomSheetHeader, DragHandle, CloseButton, BottomSheetTitle, BottomSheetContent } from './BottomSheet.styles.js';
import { Close } from '@yleisradio/yds-icons-react';
import { transition } from '@yleisradio/yds-core';

const DRAG_CLOSE_THRESHOLD = 100;
const easeInOutCubic = x => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
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
const BottomSheet = _a => {
  var {
      bottomSheetRef,
      title,
      titleAs,
      onClose,
      dragToClose = true,
      align = 'center',
      nonModal = false,
      closeOnOutsideClick = true,
      size = 'default',
      children
    } = _a,
    rest = __rest(_a, ["bottomSheetRef", "title", "titleAs", "onClose", "dragToClose", "align", "nonModal", "closeOnOutsideClick", "size", "children"]);
  const dialogRef = useRef(null);
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(null);
  const [dragStartY, setDragStartY] = useState(null);
  const [dragDeltaY, setDragDeltaY] = useState(0);
  const [backdropOpacity, setBackdropOpacity] = useState(0);
  const animateBackdropOpacity = useCallback((targetOpacity, duration) => {
    const startOpacity = backdropOpacity;
    const startTime = performance.now();
    const animate = currentTime => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * easeProgress;
      setBackdropOpacity(currentOpacity);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [backdropOpacity]);
  const animateSnapBack = useCallback(dragDistance => {
    if (contentRef.current) {
      const snapBackDuration = Math.max(50, Math.round(dragDistance / DRAG_CLOSE_THRESHOLD * parseInt(transition.DURATION_S)));
      contentRef.current.style.transform = 'translateY(0)';
      contentRef.current.style.transition = `transform ${snapBackDuration}ms ${transition.EASING_DEFAULT}`;
      animateBackdropOpacity(1, snapBackDuration);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = '';
        }
      }, snapBackDuration);
    }
  }, [animateBackdropOpacity]);
  const closeBottomSheet = useCallback((dragDistance = 0) => {
    var _a;
    const sheetHeight = ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    const remainingDistance = sheetHeight - dragDistance;
    const baseDuration = parseInt(transition.DURATION_S);
    const proportionalDuration = Math.max(50, Math.round(remainingDistance / sheetHeight * baseDuration));
    // Workaround for closing animation because Firefox does not support transition-behavior: allow-discrete
    setTimeout(() => {
      var _a;
      setIsOpen(false);
      (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.close();
      contentRef.current.style.transform = ``;
      contentRef.current.style.transition = '';
    }, proportionalDuration);
    if (contentRef.current) {
      const easing = dragDistance > 0 ? transition.EASING_DEC : transition.EASING_DEFAULT;
      contentRef.current.style.transform = `translateY(100%)`;
      contentRef.current.style.transition = `transform ${proportionalDuration}ms ${easing}`;
      animateBackdropOpacity(0, proportionalDuration);
    }
  }, [animateBackdropOpacity]);
  useImperativeHandle(bottomSheetRef, () => ({
    open: () => {
      if (isOpen) {
        return;
      }
      if (nonModal) {
        dialogRef.current.show();
      } else {
        dialogRef.current.showModal();
        animateBackdropOpacity(1, parseInt(transition.DURATION_S));
      }
      setIsOpen(true);
    },
    close: () => {
      closeBottomSheet();
    }
  }));
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
  const handleDragStart = useCallback(e => {
    if (!dragToClose) {
      return;
    }
    setDragStartY(e.clientY);
    setDragDeltaY(0);
    e.target.setPointerCapture(e.pointerId);
  }, [dragToClose]);
  const handleDragMove = useCallback(e => {
    if (!dragToClose) {
      return;
    }
    if (dragStartY !== null) {
      const deltaY = Math.max(0, e.clientY - dragStartY);
      setDragDeltaY(deltaY);
      if (contentRef.current) {
        const sheetHeight = contentRef.current.offsetHeight;
        const opacity = Math.max(0, 1 - deltaY / sheetHeight);
        setBackdropOpacity(opacity);
        contentRef.current.style.transition = 'none';
        contentRef.current.style.transform = `translateY(${deltaY}px)`;
      }
    }
  }, [dragStartY, dragToClose]);
  const handleDragEnd = useCallback(e => {
    if (!dragToClose || dragStartY === null) {
      return;
    }
    if (dragDeltaY > DRAG_CLOSE_THRESHOLD) {
      closeBottomSheet(dragDeltaY);
    } else {
      animateSnapBack(dragDeltaY);
    }
    e.target.releasePointerCapture(e.pointerId);
    setDragStartY(null);
    setDragDeltaY(0);
  }, [dragToClose, dragStartY, dragDeltaY, closeBottomSheet, animateSnapBack]);
  useEffect(() => {
    const handleClickOutside = event => {
      var _a;
      if (isOpen && closeOnOutsideClick && !nonModal && !((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
        closeBottomSheet();
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, [closeBottomSheet, closeOnOutsideClick, isOpen, nonModal]);
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape' && isOpen && (!nonModal || nonModal && dialogRef.current.contains(document.activeElement))) {
        closeBottomSheet();
      }
    };
    document.addEventListener('keyup', handleKeyDown);
    return () => document.removeEventListener('keyup', handleKeyDown);
  }, [closeBottomSheet, isOpen, nonModal]);
  return jsxs(Fragment, {
    children: [!nonModal && jsx(DisableBodyScroll, {}), jsx(StyledBottomSheetDialog, Object.assign({
      ref: dialogRef,
      closedby: "none",
      "$align": align,
      "$backdropOpacity": backdropOpacity
    }, rest, {
      children: jsxs(BottomSheetContainer, {
        ref: contentRef,
        "$size": size,
        children: [jsxs(BottomSheetHeader, {
          children: [dragToClose ? jsx(DragHandle, {
            "aria-label": "Close bottom sheet",
            onClick: () => closeBottomSheet(),
            onPointerDown: handleDragStart,
            onPointerMove: handleDragMove,
            onPointerUp: handleDragEnd
          }) : jsx(CloseButton, {
            iconBefore: jsx(Close, {}),
            iconOnly: true,
            removePadding: true,
            variant: "text",
            onClick: () => closeBottomSheet(),
            "aria-label": "Close bottomSheet"
          }), title && jsx(BottomSheetTitle, {
            as: titleAs,
            "$dragToClose": dragToClose,
            children: title
          })]
        }), jsx(BottomSheetContent, {
          children: children
        })]
      })
    }))]
  });
};

export { BottomSheet };
