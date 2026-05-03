'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var BaseCheckbox = require('../../internal/components/BaseCheckbox/BaseCheckbox.js');

const Checkbox = React.forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label,
      variant = 'primary',
      error = false,
      name,
      value,
      hideLabel = false,
      useUnderlay = false,
      onChange,
      controlAlign = 'start'
    } = _a,
    rest = tslib_es6.__rest(_a, ["isDisabled", "label", "variant", "error", "name", "value", "hideLabel", "useUnderlay", "onChange", "controlAlign"]);
  return jsxRuntime.jsx(BaseCheckbox.BaseCheckbox, Object.assign({
    ref: ref,
    name: name,
    error: error,
    label: label,
    variant: variant,
    isDisabled: isDisabled,
    value: value,
    hideLabel: hideLabel,
    useUnderlay: useUnderlay,
    controlAlign: controlAlign,
    controlSize: "md",
    onChange: onChange
  }, rest));
});

exports.Checkbox = Checkbox;
