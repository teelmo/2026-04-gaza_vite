'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Menu = require('../Menu/Menu.js');
var MenuItem = require('../MenuItem/MenuItem.js');
var MenuContext = require('../Menu/MenuContext.js');
var DropdownMenuGroupContext = require('./DropdownMenuGroupContext.js');
var DropdownMenuGroupButton = require('./DropdownMenuGroupButton.js');
var DropdownMenuGroupButtonIcon = require('./DropdownMenuGroupButtonIcon.js');
var DropdownMenu = require('../DropdownMenu/DropdownMenu.js');

const DropdownMenuGroupDropdownMenuSingleSelect = _a => {
  var {
      onChange
    } = _a,
    props = tslib_es6.__rest(_a, ["onChange"]);
  return jsxRuntime.jsx(DropdownMenuGroupDropdownMenu, Object.assign({
    onChange: (value, id) => onChange(value, id),
    isMultiSelect: false
  }, props));
};
const DropdownMenuGroupDropdownMenuMultiSelect = _a => {
  var {
      onChange
    } = _a,
    props = tslib_es6.__rest(_a, ["onChange"]);
  return jsxRuntime.jsx(DropdownMenuGroupDropdownMenu, Object.assign({
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
    props = tslib_es6.__rest(_a, ["id", "options", "onChange", "onOpen", "onClose", "openMenuOnClick", "value", "defaultValue", "isMultiSelect", "alignMenu", "menuItemVariant"]);
  const {
    menuSize,
    size,
    variant
  } = DropdownMenuGroupContext.useDropdownMenuGroupContext();
  const [menu, setMenu] = React.useState(null);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const [internalValue, setInternalValue] = React.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : undefined);
  const isControlled = !!value;
  React.useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);
  const closeMenu = React.useCallback((focusButton = true) => {
    setMenu(null);
    if (focusButton && buttonRef.current) {
      buttonRef.current.focus();
    }
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  React.useEffect(() => {
    const handleClickOutside = event => {
      var _a, _b;
      if (!((_a = menuRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = buttonRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
        closeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeMenu]);
  const openMenu = React.useCallback(e => {
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
  const navigateAway = React.useCallback(() => {
    setMenu(null);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  const handleBlur = React.useCallback(() => {
    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      // Check if the new focused element is either menu item or the menu button
      if (menu && buttonRef.current && !buttonRef.current.contains(document.activeElement) && menuRef.current && !menuRef.current.contains(document.activeElement)) {
        navigateAway();
      }
    });
  }, [menu, navigateAway]);
  const handleSelect = React.useCallback(value => {
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
  const isItemSelected = React.useCallback(option => {
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
  const selectedOption = options.filter(DropdownMenu.isDropdownMenuOption).find(option => isItemSelected(option));
  return jsxRuntime.jsxs(MenuContext.MenuContext.Provider, {
    value: {
      closeMenu: closeMenu,
      menuSize: menuSize
    },
    children: [jsxRuntime.jsx(DropdownMenuGroupButton.DropdownMenuGroupButton, Object.assign({
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
      iconAfter: jsxRuntime.jsx(DropdownMenuGroupButtonIcon.DropdownMenuGroupButtonIcon, {
        isMultiSelect: isMultiSelect,
        value: internalValue
      })
    })), jsxRuntime.jsx(Menu.Menu, {
      ref: menuRef,
      buttonRef: buttonRef,
      id: `dropdown-menu-${id}`,
      close: closeMenu,
      navigateAway: navigateAway,
      rootElement: menu && menu.root,
      autofocus: (menu === null || menu === void 0 ? void 0 : menu.autofocus) || false,
      align: alignMenu,
      children: options.map((option, index) => {
        if (DropdownMenu.isDropdownMenuSeparator(option)) {
          return jsxRuntime.jsx(MenuItem.MenuSeparator, {}, `separator-${index}`);
        } else if (DropdownMenu.isDropdownMenuOption(option)) {
          return jsxRuntime.jsx(MenuItem.MenuItem, {
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

exports.DropdownMenuGroupDropdownMenuMultiSelect = DropdownMenuGroupDropdownMenuMultiSelect;
exports.DropdownMenuGroupDropdownMenuSingleSelect = DropdownMenuGroupDropdownMenuSingleSelect;
