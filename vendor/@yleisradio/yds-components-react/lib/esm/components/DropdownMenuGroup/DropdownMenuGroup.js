import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { StyledDropdownMenuGroup } from './DropdownMenuGroup.styles.js';
import { DropdownMenuGroupDropdownMenuSingleSelect, DropdownMenuGroupDropdownMenuMultiSelect } from './DropdownMenuGroupDropdownMenu.js';
import { DropdownMenuGroupContext } from './DropdownMenuGroupContext.js';

const DropdownMenuGroup = _a => {
  var {
      variant = 'primary',
      size = 'md',
      menuSize = 'md',
      children
    } = _a,
    props = __rest(_a, ["variant", "size", "menuSize", "children"]);
  return jsx(DropdownMenuGroupContext.Provider, {
    value: {
      menuSize,
      variant,
      size
    },
    children: jsx(StyledDropdownMenuGroup, Object.assign({
      "$size": size
    }, props, {
      children: children
    }))
  });
};
DropdownMenuGroup.DropdownMenu = DropdownMenuGroupDropdownMenuSingleSelect;
DropdownMenuGroup.DropdownMenuMultiSelect = DropdownMenuGroupDropdownMenuMultiSelect;

export { DropdownMenuGroup };
