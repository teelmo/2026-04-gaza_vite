import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Plus16 } from '@yleisradio/yds-icons-react';
import { StyledDropdownMenuGroupButtonIcon, StyledBadge } from './DropdownMenuGroup.styles.js';

const DropdownMenuGroupButtonIcon = ({
  value,
  isMultiSelect
}) => {
  const isVisible = useMemo(() => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return !!value;
  }, [value]);
  return jsxs(StyledDropdownMenuGroupButtonIcon, {
    children: [isMultiSelect && jsx(StyledBadge, {
      "$isVisible": isVisible,
      children: Array.isArray(value) && value.length || 1
    }), jsx(Plus16, {})]
  });
};

export { DropdownMenuGroupButtonIcon };
