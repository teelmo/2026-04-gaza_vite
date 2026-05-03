'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var ButtonGroupContext = require('./ButtonGroupContext.js');
var ButtonGroup_styles = require('./ButtonGroup.styles.js');

const buttonTypes = {
  primary: ButtonGroup_styles.ButtonGroupButtonPrimary,
  secondary: ButtonGroup_styles.ButtonGroupButtonSecondary
};
const ButtonGroupButton = _a => {
  var {
      id,
      onClick,
      children,
      isDisabled
    } = _a,
    props = tslib_es6.__rest(_a, ["id", "onClick", "children", "isDisabled"]);
  const {
    activeButtons,
    toggleButton,
    variant,
    multiple,
    size,
    showIcon
  } = ButtonGroupContext.useButtonGroupContext();
  const StyledButton = buttonTypes[variant];
  const isButtonSelected = activeButtons.has(id);
  const defaultIcon = isButtonSelected ? jsxRuntime.jsx(ydsIconsReact.Check16, {}) : jsxRuntime.jsx(ydsIconsReact.Plus16, {});
  const IconBefore = props.iconBefore ? props.iconBefore : defaultIcon;
  return jsxRuntime.jsx(StyledButton, Object.assign({
    "$selected": isButtonSelected,
    "$isDisabled": isDisabled,
    isDisabled: isDisabled,
    onClick: e => {
      if (isDisabled) {
        return;
      }
      toggleButton(id);
      onClick === null || onClick === void 0 ? void 0 : onClick(e);
    },
    "aria-pressed": isButtonSelected,
    "$size": size,
    id: id
  }, props, {
    iconBefore: multiple && showIcon ? IconBefore : undefined,
    children: children
  }));
};

exports.ButtonGroupButton = ButtonGroupButton;
