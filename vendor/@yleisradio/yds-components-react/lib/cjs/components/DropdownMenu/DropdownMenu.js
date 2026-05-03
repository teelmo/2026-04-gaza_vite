'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ActionMenu = require('../ActionMenu/ActionMenu.js');
var MenuItem = require('../MenuItem/MenuItem.js');

const isDropdownMenuOption = option => option.type === 'item' || option.type === undefined;
const isDropdownMenuSeparator = option => option.type === 'separator';
const DropdownMenu = _a => {
  var _b;
  var {
      placeholder,
      value,
      options,
      onChange
    } = _a,
    menuProps = tslib_es6.__rest(_a, ["placeholder", "value", "options", "onChange"]);
  const selectedOption = React.useMemo(() => value !== undefined ? options.filter(option => isDropdownMenuOption(option)).find(option => option.value === value) : undefined, [options, value]);
  return jsxRuntime.jsx(ActionMenu.ActionMenu, Object.assign({}, menuProps, {
    text: (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text) !== null && _b !== void 0 ? _b : placeholder,
    children: options.map((option, index) => {
      if (isDropdownMenuSeparator(option)) {
        return jsxRuntime.jsx(MenuItem.MenuSeparator, {}, `separator-${index}`);
      } else if (isDropdownMenuOption(option)) {
        const isSelected = option.value === value;
        return jsxRuntime.jsx(MenuItem.MenuItem, {
          iconHighlight: true,
          isSelected: isSelected,
          role: "menuitemradio",
          onSelect: () => onChange(option.value),
          children: option.text
        }, option.text);
      }
      return null;
    })
  }));
};

exports.DropdownMenu = DropdownMenu;
exports.isDropdownMenuOption = isDropdownMenuOption;
exports.isDropdownMenuSeparator = isDropdownMenuSeparator;
