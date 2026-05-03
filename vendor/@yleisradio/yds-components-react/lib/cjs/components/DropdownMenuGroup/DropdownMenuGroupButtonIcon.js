'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var DropdownMenuGroup_styles = require('./DropdownMenuGroup.styles.js');

const DropdownMenuGroupButtonIcon = ({
  value,
  isMultiSelect
}) => {
  const isVisible = React.useMemo(() => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return !!value;
  }, [value]);
  return jsxRuntime.jsxs(DropdownMenuGroup_styles.StyledDropdownMenuGroupButtonIcon, {
    children: [isMultiSelect && jsxRuntime.jsx(DropdownMenuGroup_styles.StyledBadge, {
      "$isVisible": isVisible,
      children: Array.isArray(value) && value.length || 1
    }), jsxRuntime.jsx(ydsIconsReact.Plus16, {})]
  });
};

exports.DropdownMenuGroupButtonIcon = DropdownMenuGroupButtonIcon;
