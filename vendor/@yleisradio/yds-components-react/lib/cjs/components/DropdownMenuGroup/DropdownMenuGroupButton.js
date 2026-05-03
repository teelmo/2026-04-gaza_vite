'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var DropdownMenuGroup_styles = require('./DropdownMenuGroup.styles.js');

const buttonTypes = {
  primary: DropdownMenuGroup_styles.DropdownMenuGroupButtonPrimary,
  text: DropdownMenuGroup_styles.DropdownMenuGroupButtonText
};
const DropdownMenuGroupButton = React.forwardRef((_a, ref) => {
  var {
      id,
      variant,
      size,
      isSelected,
      removePadding,
      children,
      displayValue
    } = _a,
    props = tslib_es6.__rest(_a, ["id", "variant", "size", "isSelected", "removePadding", "children", "displayValue"]);
  const StyledButton = buttonTypes[variant];
  return jsxRuntime.jsx(StyledButton, Object.assign({
    id: id,
    ref: ref,
    "$removePadding": removePadding,
    "aria-pressed": isSelected,
    "$size": size
  }, props, {
    children: displayValue || children
  }));
});

exports.DropdownMenuGroupButton = DropdownMenuGroupButton;
