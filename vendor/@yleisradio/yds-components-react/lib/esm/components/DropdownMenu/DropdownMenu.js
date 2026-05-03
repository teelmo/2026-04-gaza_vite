import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { ActionMenu } from '../ActionMenu/ActionMenu.js';
import { MenuSeparator, MenuItem } from '../MenuItem/MenuItem.js';

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
    menuProps = __rest(_a, ["placeholder", "value", "options", "onChange"]);
  const selectedOption = useMemo(() => value !== undefined ? options.filter(option => isDropdownMenuOption(option)).find(option => option.value === value) : undefined, [options, value]);
  return jsx(ActionMenu, Object.assign({}, menuProps, {
    text: (_b = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text) !== null && _b !== void 0 ? _b : placeholder,
    children: options.map((option, index) => {
      if (isDropdownMenuSeparator(option)) {
        return jsx(MenuSeparator, {}, `separator-${index}`);
      } else if (isDropdownMenuOption(option)) {
        const isSelected = option.value === value;
        return jsx(MenuItem, {
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

export { DropdownMenu, isDropdownMenuOption, isDropdownMenuSeparator };
