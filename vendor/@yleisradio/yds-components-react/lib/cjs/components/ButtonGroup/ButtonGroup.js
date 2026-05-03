'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ButtonGroup_styles = require('./ButtonGroup.styles.js');
var ButtonGroupContext = require('./ButtonGroupContext.js');
var ButtonGroupButton = require('./ButtonGroupButton.js');

const ButtonGroup = _a => {
  var {
      multiple,
      onChange,
      variant = 'primary',
      size = 'md',
      showIcon,
      children
    } = _a,
    props = tslib_es6.__rest(_a, ["multiple", "onChange", "variant", "size", "showIcon", "children"]);
  const isControlled = 'value' in props;
  const [internalValue, setInternalValue] = React.useState(() => {
    if ('defaultValue' in props && props.defaultValue) {
      return new Set(Array.isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue]);
    }
    return new Set();
  });
  const activeButtons = isControlled ? new Set(Array.isArray(props.value) ? props.value : [props.value]) : internalValue;
  const toggleButton = value => {
    const newActive = new Set(activeButtons);
    if (multiple) {
      if (newActive.has(value)) {
        newActive.delete(value);
      } else {
        newActive.add(value);
      }
    } else {
      if (!newActive.has(value)) {
        newActive.clear();
        newActive.add(value);
      }
    }
    // Only update internal state if uncontrolled
    if (!isControlled) {
      setInternalValue(newActive);
    }
    const newValue = multiple ? Array.from(newActive) : Array.from(newActive)[0];
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };
  return jsxRuntime.jsx(ButtonGroupContext.ButtonGroupContext.Provider, {
    value: {
      activeButtons,
      toggleButton,
      variant,
      multiple,
      size,
      showIcon
    },
    children: jsxRuntime.jsx(ButtonGroup_styles.StyledButtonGroup, Object.assign({
      "$size": size
    }, props, {
      children: children
    }))
  });
};
ButtonGroup.Button = ButtonGroupButton.ButtonGroupButton;

exports.ButtonGroup = ButtonGroup;
