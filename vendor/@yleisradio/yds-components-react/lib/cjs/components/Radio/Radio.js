'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var BaseRadio = require('../../internal/components/BaseRadio/BaseRadio.js');

const Radio = React.forwardRef((_a, ref) => {
  var {
      variant = 'primary',
      isDisabled = false,
      error,
      label,
      name,
      value,
      checked,
      onChange,
      hideLabel = false,
      useUnderlay = false,
      controlAlign = 'start'
    } = _a,
    rest = tslib_es6.__rest(_a, ["variant", "isDisabled", "error", "label", "name", "value", "checked", "onChange", "hideLabel", "useUnderlay", "controlAlign"]);
  return jsxRuntime.jsx(BaseRadio.BaseRadio, Object.assign({
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
    checked: checked,
    onChange: onChange
  }, rest));
});

exports.Radio = Radio;
