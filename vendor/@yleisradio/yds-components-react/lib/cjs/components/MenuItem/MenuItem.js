'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var MenuItem_styles = require('./MenuItem.styles.js');
var MenuContext = require('../Menu/MenuContext.js');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var BaseRadio = require('../../internal/components/BaseRadio/BaseRadio.js');
var BaseCheckbox = require('../../internal/components/BaseCheckbox/BaseCheckbox.js');

const MenuItem = _a => {
  var {
      icon,
      iconHighlight,
      isDisabled = false,
      isSelected = false,
      onSelect,
      closeMenuOnClick = true,
      role = 'menuitem',
      children,
      onClick,
      onKeyDown,
      itemVariant = 'default'
    } = _a,
    other = tslib_es6.__rest(_a, ["icon", "iconHighlight", "isDisabled", "isSelected", "onSelect", "closeMenuOnClick", "role", "children", "onClick", "onKeyDown", "itemVariant"]);
  const menu = React.useContext(MenuContext.MenuContext);
  const handleSelect = React.useCallback(() => {
    if (onSelect) {
      onSelect();
    }
    if (closeMenuOnClick && menu.closeMenu) {
      menu === null || menu === void 0 ? void 0 : menu.closeMenu();
    }
  }, [closeMenuOnClick, menu, onSelect]);
  const handleClick = e => {
    if (isDisabled) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
    e.preventDefault();
    handleSelect();
  };
  const handleKeyDown = e => {
    if (isDisabled) {
      return;
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect();
    }
  };
  return jsxRuntime.jsxs(MenuItem_styles.MenuItemBase, Object.assign({
    onKeyDown: handleKeyDown,
    "$isDisabled": isDisabled,
    onClick: handleClick,
    tabIndex: -1,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-selected": isSelected ? 'true' : undefined,
    role: role,
    "$menuSize": menu.menuSize
  }, other, {
    children: [itemVariant === 'radio' && jsxRuntime.jsx(BaseRadio.BaseRadio, {
      isDisabled: isDisabled,
      name: "menu-radio",
      label: children,
      checked: isSelected,
      tabIndex: -1,
      controlSize: menu.menuSize,
      readOnly: true
    }), itemVariant === 'checkbox' && jsxRuntime.jsx(BaseCheckbox.BaseCheckbox, {
      isDisabled: isDisabled,
      name: "menu-checkbox",
      label: children,
      checked: isSelected,
      tabIndex: -1,
      controlSize: menu.menuSize,
      readOnly: true
    }), itemVariant === 'default' && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [icon !== undefined && jsxRuntime.jsx(MenuItem_styles.IconWrapper, {
        "$highlight": iconHighlight,
        "$menuSize": menu.menuSize,
        children: icon
      }), jsxRuntime.jsx(MenuItem_styles.ContentWrapper, {
        children: children
      }), isSelected && jsxRuntime.jsx(MenuItem_styles.CheckIconWrapper, {
        "$highlight": iconHighlight,
        "$menuSize": menu.menuSize,
        children: jsxRuntime.jsx(ydsIconsReact.Check, {})
      })]
    })]
  }));
};
const MenuSeparator = () => jsxRuntime.jsx(MenuItem_styles.MenuSeparatorBase, {
  role: "separator"
});

exports.MenuItem = MenuItem;
exports.MenuSeparator = MenuSeparator;
