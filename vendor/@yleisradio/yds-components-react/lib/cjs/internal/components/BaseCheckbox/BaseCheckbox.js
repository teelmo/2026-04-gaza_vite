'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var BaseCheckbox_styles = require('./BaseCheckbox.styles.js');
var useCheckboxGroup = require('../../../components/CheckboxGroup/useCheckboxGroup.js');
var CheckableLabel_styles = require('../CheckableLabel/CheckableLabel.styles.js');

const BaseCheckbox = React.forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label: labelProp,
      variant = 'primary',
      error = false,
      name: nameProp,
      value: valueProp,
      hideLabel = false,
      useUnderlay = false,
      onChange: onChangeProp,
      controlAlign = 'start',
      controlSize = 'md'
    } = _a,
    other = tslib_es6.__rest(_a, ["isDisabled", "label", "variant", "error", "name", "value", "hideLabel", "useUnderlay", "onChange", "controlAlign", "controlSize"]);
  const checkboxGroup = useCheckboxGroup.useCheckboxGroup();
  let onChange = onChangeProp;
  let checked = other.checked;
  let name = nameProp;
  const value = valueProp ? valueProp : typeof labelProp === 'string' ? labelProp : '';
  const label = labelProp;
  if (checkboxGroup) {
    if (typeof onChangeProp === 'undefined') {
      onChange = checkboxGroup.onChange;
    }
    const checkboxValues = checkboxGroup.value || [];
    checked = checkboxValues.length && checkboxValues.includes(value);
    name = checkboxGroup.name;
  }
  return jsxRuntime.jsxs(CheckableLabel_styles.CheckableLabel, {
    "$isDisabled": isDisabled,
    "$isError": error,
    "$hideLabel": hideLabel,
    "$useUnderlay": useUnderlay,
    "$controlAlign": controlAlign,
    "$controlSize": controlSize,
    children: [jsxRuntime.jsx(BaseCheckbox_styles.CheckboxBase, Object.assign({
      ref: ref,
      type: "checkbox",
      "$variant": variant,
      "$isError": error,
      name: name,
      value: value,
      checked: checked,
      "aria-disabled": isDisabled ? 'true' : undefined,
      "$hideLabel": hideLabel,
      "$controlAlign": controlAlign,
      onClick: isDisabled ? e => e.preventDefault() : () => {
        return true;
      },
      onChange: onChange
    }, other)), label]
  });
});

exports.BaseCheckbox = BaseCheckbox;
