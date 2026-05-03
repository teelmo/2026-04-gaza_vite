'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormElementLabel = require('../FormElementLabel/FormElementLabel.js');
var Switch_styles = require('./Switch.styles.js');

/**
 * Switch (or Toggle, Toggle button, Toggle switch) is a on-off selection component with a label.
 * Extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled`. Label text and Switch are linked together through component `id`.
 * Switch should be used in situation when user changing the value causes instant and persistent change -
 * for on/off selections that need to be submitted separately, use `Checkbox` component.
 *
 * @param {SwitchProps} props
 * */
const Switch = React.forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label,
      labelOptions = {},
      name,
      onChange
    } = _a,
    other = tslib_es6.__rest(_a, ["isDisabled", "label", "labelOptions", "name", "onChange"]);
  const id = other.id;
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [!!label && jsxRuntime.jsx(FormElementLabel.FormElementLabel, Object.assign({
      id: `${name}--label`,
      htmlFor: id,
      isDisabled: isDisabled,
      label: label
    }, labelOptions)), jsxRuntime.jsx(Switch_styles.SwitchBase, Object.assign({
      ref: ref,
      type: "checkbox",
      disabled: isDisabled,
      name: name,
      "aria-disabled": isDisabled ? 'true' : undefined,
      role: "switch",
      onChange: onChange
    }, other))]
  });
});

exports.Switch = Switch;
