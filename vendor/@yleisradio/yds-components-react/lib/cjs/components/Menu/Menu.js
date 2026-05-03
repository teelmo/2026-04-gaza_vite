'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Menu_styles = require('./Menu.styles.js');
var ref = require('../../internal/utils/ref.js');
var MenuContext = require('./MenuContext.js');

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
const MenuList = React.forwardRef(({
  id,
  close,
  navigateAway,
  buttonRef,
  rootElement,
  autofocus,
  align,
  children
}, ref$1) => {
  const menu = React.useContext(MenuContext.MenuContext);
  const menuListRef = React.useRef(null);
  const mergedRef = ref.mergeRefs(menuListRef, ref$1);
  React.useLayoutEffect(() => {
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
  const handleBlur = React.useCallback(e => {
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
  return jsxRuntime.jsx(Menu_styles.MenuBase, {
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
const Menu = React.forwardRef(({
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
    return jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: jsxRuntime.jsx(MenuList, {
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

exports.Menu = Menu;
