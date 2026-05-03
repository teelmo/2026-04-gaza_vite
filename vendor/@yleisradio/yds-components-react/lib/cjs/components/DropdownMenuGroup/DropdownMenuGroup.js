'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var DropdownMenuGroup_styles = require('./DropdownMenuGroup.styles.js');
var DropdownMenuGroupDropdownMenu = require('./DropdownMenuGroupDropdownMenu.js');
var DropdownMenuGroupContext = require('./DropdownMenuGroupContext.js');

const DropdownMenuGroup = _a => {
  var {
      variant = 'primary',
      size = 'md',
      menuSize = 'md',
      children
    } = _a,
    props = tslib_es6.__rest(_a, ["variant", "size", "menuSize", "children"]);
  return jsxRuntime.jsx(DropdownMenuGroupContext.DropdownMenuGroupContext.Provider, {
    value: {
      menuSize,
      variant,
      size
    },
    children: jsxRuntime.jsx(DropdownMenuGroup_styles.StyledDropdownMenuGroup, Object.assign({
      "$size": size
    }, props, {
      children: children
    }))
  });
};
DropdownMenuGroup.DropdownMenu = DropdownMenuGroupDropdownMenu.DropdownMenuGroupDropdownMenuSingleSelect;
DropdownMenuGroup.DropdownMenuMultiSelect = DropdownMenuGroupDropdownMenu.DropdownMenuGroupDropdownMenuMultiSelect;

exports.DropdownMenuGroup = DropdownMenuGroup;
