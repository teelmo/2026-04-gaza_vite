import { jsx, Fragment } from 'react/jsx-runtime';
import { forwardRef, useContext, useRef, useLayoutEffect, useCallback } from 'react';
import { MenuBase } from './Menu.styles.js';
import { mergeRefs } from '../../internal/utils/ref.js';
import { MenuContext } from './MenuContext.js';

const WINDOW_MARGIN = 12;
const getNextItem = (list, current) => {
  if (list === current) {
    return list.firstElementChild;
  } else if (current && current.nextElementSibling) {
    return current.nextElementSibling;
  } else {
    return list.firstElementChild;
  }
};
const getPreviousItem = (list, current) => {
  if (list === current) {
    return list.lastElementChild;
  } else if (current && current.previousElementSibling) {
    return current.previousElementSibling;
  } else {
    return list.lastElementChild;
  }
};
const navigate = (list, current, navigateFn) => {
  let didWrap = false;
  let next = navigateFn(list, current);
  while (next !== null) {
    if (next === list.firstElementChild) {
      if (didWrap) {
        return;
      }
      didWrap = true;
    }
    if (next.hasAttribute('tabindex')) {
      next.focus();
      return;
    } else {
      next = navigateFn(list, next);
    }
  }
};
const MenuList = forwardRef(({
  id,
  close,
  navigateAway,
  buttonRef,
  rootElement,
  autofocus,
  align,
  children
}, ref) => {
  const menu = useContext(MenuContext);
  const menuListRef = useRef(null);
  const mergedRef = mergeRefs(menuListRef, ref);
  useLayoutEffect(() => {
    const elem = menuListRef.current;
    if (elem === null) {
      return;
    }
    const container = rootElement.ownerDocument.defaultView;
    if (container === null) {
      return;
    }
    const setPosition = (top, left) => {
      elem.style.top = `${top}px`;
      elem.style.left = `${left}px`;
    };
    const top = rootElement.offsetTop + rootElement.offsetHeight;
    const left = align === 'left' ? rootElement.offsetLeft + elem.offsetWidth : rootElement.offsetLeft + rootElement.offsetWidth;
    setPosition(top, left);
    const elemRect = elem.getBoundingClientRect();
    const bottomMax = container.innerHeight - WINDOW_MARGIN;
    const horizontalMin = WINDOW_MARGIN;
    const bottomOverflow = Math.max(0, elemRect.bottom - bottomMax);
    if (align === 'left') {
      const elemLeft = elemRect.right > container.innerWidth ? rootElement.offsetWidth + rootElement.offsetLeft : left;
      setPosition(top - bottomOverflow + 5, elemLeft);
    } else {
      const leftUnderflow = Math.max(0, horizontalMin - elemRect.left);
      setPosition(top - bottomOverflow + 5, left + leftUnderflow);
    }
    if (autofocus) {
      const firstChild = elem.firstElementChild;
      if (firstChild && firstChild instanceof HTMLElement) {
        firstChild.focus();
      }
    }
  }, [rootElement, autofocus, align]);
  const handleBlur = useCallback(e => {
    const currentTarget = e.currentTarget;
    requestAnimationFrame(() => {
      // Check if the new focused element is a child of the menu container
      if (buttonRef.current && !buttonRef.current.contains(document.activeElement) && !currentTarget.contains(document.activeElement)) {
        navigateAway();
      }
    });
  }, [buttonRef, navigateAway]);
  const onKeyDown = e => {
    const list = menuListRef.current;
    if (list === null) {
      return;
    }
    const current = list.ownerDocument.activeElement;
    const {
      key
    } = e;
    if (key === 'ArrowDown') {
      e.preventDefault();
      navigate(list, current, getNextItem);
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      navigate(list, current, getPreviousItem);
    } else if (key === 'Escape') {
      e.preventDefault();
      rootElement.focus();
      close();
    }
  };
  return jsx(MenuBase, {
    id: id,
    onKeyDown: onKeyDown,
    ref: mergedRef,
    "$minWidth": Math.max(220, rootElement.offsetWidth),
    tabIndex: -1,
    role: "menu",
    "$menuSize": menu.menuSize,
    onBlur: handleBlur,
    children: children
  });
});
const Menu = forwardRef(({
  id,
  rootElement,
  autofocus = false,
  close = () => {},
  buttonRef,
  navigateAway = () => {},
  align = 'left',
  children
}, ref) => {
  if (rootElement) {
    return jsx(Fragment, {
      children: jsx(MenuList, {
        ref: ref,
        id: id,
        close: close,
        rootElement: rootElement,
        buttonRef: buttonRef,
        navigateAway: navigateAway,
        autofocus: autofocus,
        align: align,
        children: children
      })
    });
  }
  return null;
});

export { Menu };
