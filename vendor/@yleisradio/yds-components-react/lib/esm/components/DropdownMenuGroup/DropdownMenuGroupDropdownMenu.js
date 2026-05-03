import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Menu } from '../Menu/Menu.js';
import { MenuSeparator, MenuItem } from '../MenuItem/MenuItem.js';
import { MenuContext } from '../Menu/MenuContext.js';
import { useDropdownMenuGroupContext } from './DropdownMenuGroupContext.js';
import { DropdownMenuGroupButton } from './DropdownMenuGroupButton.js';
import { DropdownMenuGroupButtonIcon } from './DropdownMenuGroupButtonIcon.js';
import { isDropdownMenuOption, isDropdownMenuSeparator } from '../DropdownMenu/DropdownMenu.js';

const DropdownMenuGroupDropdownMenuSingleSelect = _a => {
  var {
      onChange
    } = _a,
    props = __rest(_a, ["onChange"]);
  return jsx(DropdownMenuGroupDropdownMenu, Object.assign({
    onChange: (value, id) => onChange(value, id),
    isMultiSelect: false
  }, props));
};
const DropdownMenuGroupDropdownMenuMultiSelect = _a => {
  var {
      onChange
    } = _a,
    props = __rest(_a, ["onChange"]);
  return jsx(DropdownMenuGroupDropdownMenu, Object.assign({
    onChange: (value, id) => onChange(value, id),
    isMultiSelect: true
  }, props));
};
const DropdownMenuGroupDropdownMenu = _a => {
  var {
      id,
      options,
      onChange,
      onOpen,
      onClose,
      openMenuOnClick = true,
      value,
      defaultValue,
      isMultiSelect = false,
      alignMenu = 'right',
      menuItemVariant = 'default'
    } = _a,
    props = __rest(_a, ["id", "options", "onChange", "onOpen", "onClose", "openMenuOnClick", "value", "defaultValue", "isMultiSelect", "alignMenu", "menuItemVariant"]);
  const {
    menuSize,
    size,
    variant
  } = useDropdownMenuGroupContext();
  const [menu, setMenu] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [internalValue, setInternalValue] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : undefined);
  const isControlled = !!value;
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);
  const closeMenu = useCallback((focusButton = true) => {
    setMenu(null);
    if (focusButton && buttonRef.current) {
      buttonRef.current.focus();
    }
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  useEffect(() => {
    const handleClickOutside = event => {
      var _a, _b;
      if (!((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
        closeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeMenu]);
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
  const navigateAway = useCallback(() => {
    setMenu(null);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const handleBlur = useCallback(() => {
    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is either menu item or the menu button
      if (menu && buttonRef.current && !buttonRef.current.contains(document.activeElement) && menuRef.current && !menuRef.current.contains(document.activeElement)) {
        navigateAway();
      }
    });
  }, [menu, navigateAway]);
  const handleSelect = useCallback(value => {
    if (isMultiSelect) {
      if (Array.isArray(internalValue) && (internalValue === null || internalValue === void 0 ? void 0 : internalValue.some(option => option === value))) {
        const newSelectedValues = internalValue.filter(option => option !== value);
        if (!isControlled) {
          setInternalValue(newSelectedValues);
        }
        onChange(newSelectedValues, id);
      } else {
        const newSelectedValues = [...(internalValue || []), value];
        if (!isControlled) {
          setInternalValue(newSelectedValues);
        }
        onChange(newSelectedValues, id);
      }
    } else {
      if (internalValue !== value) {
        if (!isControlled) {
          setInternalValue(value);
        }
        onChange(value, id);
      }
    }
  }, [internalValue, id, onChange, isControlled, isMultiSelect]);
  const isItemSelected = useCallback(option => {
    if (isMultiSelect) {
      return Array.isArray(internalValue) ? internalValue === null || internalValue === void 0 ? void 0 : internalValue.some(value => value === option.value) : false;
    }
    return internalValue === option.value;
  }, [internalValue, isMultiSelect]);
  const handleKeyDown = e => {
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
  };
  const selectedOption = options.filter(isDropdownMenuOption).find(option => isItemSelected(option));
  return jsxs(MenuContext.Provider, {
    value: {
      closeMenu: closeMenu,
      menuSize: menuSize
    },
    children: [jsx(DropdownMenuGroupButton, Object.assign({
      ref: buttonRef,
      id: id,
      onClick: openMenu,
      onBlur: handleBlur,
      variant: variant,
      size: size,
      isSelected: !!menu,
      onKeyDown: handleKeyDown,
      displayValue: isMultiSelect ? undefined : selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text
    }, props, {
      iconAfter: jsx(DropdownMenuGroupButtonIcon, {
        isMultiSelect: isMultiSelect,
        value: internalValue
      })
    })), jsx(Menu, {
      ref: menuRef,
      buttonRef: buttonRef,
      id: `dropdown-menu-${id}`,
      close: closeMenu,
      navigateAway: navigateAway,
      rootElement: menu && menu.root,
      autofocus: (menu === null || menu === void 0 ? void 0 : menu.autofocus) || false,
      align: alignMenu,
      children: options.map((option, index) => {
        if (isDropdownMenuSeparator(option)) {
          return jsx(MenuSeparator, {}, `separator-${index}`);
        } else if (isDropdownMenuOption(option)) {
          return jsx(MenuItem, {
            iconHighlight: true,
            isSelected: isItemSelected(option),
            role: isMultiSelect ? 'menuitemcheckbox' : 'menuitemradio',
            onSelect: () => handleSelect(option.value),
            closeMenuOnClick: !isMultiSelect,
            itemVariant: menuItemVariant,
            children: option.text
          }, option.text);
        }
        return null;
      })
    })]
  });
};

export { DropdownMenuGroupDropdownMenuMultiSelect, DropdownMenuGroupDropdownMenuSingleSelect };
