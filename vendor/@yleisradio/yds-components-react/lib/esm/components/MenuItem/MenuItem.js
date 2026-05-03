import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useContext, useCallback } from 'react';
import { MenuItemBase, IconWrapper, ContentWrapper, CheckIconWrapper, MenuSeparatorBase } from './MenuItem.styles.js';
import { MenuContext } from '../Menu/MenuContext.js';
import { Check } from '@yleisradio/yds-icons-react';
import { BaseRadio } from '../../internal/components/BaseRadio/BaseRadio.js';
import { BaseCheckbox } from '../../internal/components/BaseCheckbox/BaseCheckbox.js';

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
    other = __rest(_a, ["icon", "iconHighlight", "isDisabled", "isSelected", "onSelect", "closeMenuOnClick", "role", "children", "onClick", "onKeyDown", "itemVariant"]);
  const menu = useContext(MenuContext);
  const handleSelect = useCallback(() => {
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
  return jsxs(MenuItemBase, Object.assign({
    onKeyDown: handleKeyDown,
    "$isDisabled": isDisabled,
    onClick: handleClick,
    tabIndex: -1,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-selected": isSelected ? 'true' : undefined,
    role: role,
    "$menuSize": menu.menuSize
  }, other, {
    children: [itemVariant === 'radio' && jsx(BaseRadio, {
      isDisabled: isDisabled,
      name: "menu-radio",
      label: children,
      checked: isSelected,
      tabIndex: -1,
      controlSize: menu.menuSize,
      readOnly: true
    }), itemVariant === 'checkbox' && jsx(BaseCheckbox, {
      isDisabled: isDisabled,
      name: "menu-checkbox",
      label: children,
      checked: isSelected,
      tabIndex: -1,
      controlSize: menu.menuSize,
      readOnly: true
    }), itemVariant === 'default' && jsxs(Fragment, {
      children: [icon !== undefined && jsx(IconWrapper, {
        "$highlight": iconHighlight,
        "$menuSize": menu.menuSize,
        children: icon
      }), jsx(ContentWrapper, {
        children: children
      }), isSelected && jsx(CheckIconWrapper, {
        "$highlight": iconHighlight,
        "$menuSize": menu.menuSize,
        children: jsx(Check, {})
      })]
    })]
  }));
};
const MenuSeparator = () => jsx(MenuSeparatorBase, {
  role: "separator"
});

export { MenuItem, MenuSeparator };
