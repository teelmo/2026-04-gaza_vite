import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback } from 'react';
import { ChevronDown } from '@yleisradio/yds-icons-react';
import { Menu } from '../Menu/Menu.js';
import { MenuContext } from '../Menu/MenuContext.js';
import { Button } from '../Button/Button.js';

const ActionMenu = _a => {
  var {
      text,
      id,
      menuId,
      children,
      variant = 'text',
      dropdown = true,
      fullWidth = false,
      openMenuOnClick = true,
      onClose,
      onOpen,
      menuSize = 'md',
      alignMenu = 'right'
    } = _a,
    buttonProps = __rest(_a, ["text", "id", "menuId", "children", "variant", "dropdown", "fullWidth", "openMenuOnClick", "onClose", "onOpen", "menuSize", "alignMenu"]);
  const [menu, setMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const closeMenu = useCallback(() => {
    var _a;
    setMenu(null);
    (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const navigateAway = useCallback(() => {
    setMenu(null);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const openMenu = useCallback(e => {
    if (openMenuOnClick) {
      const buttonElement = e.currentTarget;
      setMenu(menu => menu ? null : {
        root: buttonElement,
        autofocus: false
      });
    }
    if (onOpen) {
      onOpen();
    }
  }, [onOpen, openMenuOnClick]);
  const handleBlur = useCallback(() => {
    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is either menu item or the menu button
      if (menu && buttonRef.current && !buttonRef.current.contains(document.activeElement) && menuRef.current && !menuRef.current.contains(document.activeElement)) {
        navigateAway();
      }
    });
  }, [menu, navigateAway]);
  return jsxs(MenuContext.Provider, {
    value: {
      closeMenu: closeMenu,
      menuSize: menuSize
    },
    children: [jsx(Button, Object.assign({
      ref: buttonRef,
      variant: variant,
      iconAfter: dropdown ? jsx(ChevronDown, {}) : undefined,
      text: text,
      id: id,
      fullWidth: fullWidth,
      removePadding: true
    }, buttonProps, {
      onClick: openMenu,
      onKeyDown: e => {
        if (menu && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          setMenu(null);
        } else if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setMenu({
            root: e.currentTarget,
            autofocus: true
          });
          if (menu && menuRef.current) {
            const firstChild = menuRef.current.firstElementChild;
            if (firstChild && firstChild instanceof HTMLElement) {
              firstChild.focus();
            }
          }
        }
      },
      onBlur: handleBlur,
      "aria-haspopup": "true",
      "aria-controls": menu ? menuId : undefined,
      "aria-expanded": menu ? 'true' : undefined
    })), jsx(Menu, {
      ref: menuRef,
      buttonRef: buttonRef,
      id: menuId,
      close: closeMenu,
      navigateAway: navigateAway,
      rootElement: menu && menu.root,
      autofocus: (menu === null || menu === void 0 ? void 0 : menu.autofocus) || false,
      align: alignMenu,
      children: children
    })]
  });
};

export { ActionMenu };
