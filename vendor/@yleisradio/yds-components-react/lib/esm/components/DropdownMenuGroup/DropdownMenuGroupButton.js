import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { DropdownMenuGroupButtonPrimary, DropdownMenuGroupButtonText } from './DropdownMenuGroup.styles.js';

const buttonTypes = {
  primary: DropdownMenuGroupButtonPrimary,
  text: DropdownMenuGroupButtonText
};
const DropdownMenuGroupButton = forwardRef((_a, ref) => {
  var {
      id,
      variant,
      size,
      isSelected,
      removePadding,
      children,
      displayValue
    } = _a,
    props = __rest(_a, ["id", "variant", "size", "isSelected", "removePadding", "children", "displayValue"]);
  const StyledButton = buttonTypes[variant];
  return jsx(StyledButton, Object.assign({
    id: id,
    ref: ref,
    "$removePadding": removePadding,
    "aria-pressed": isSelected,
    "$size": size
  }, props, {
    children: displayValue || children
  }));
});

export { DropdownMenuGroupButton };
