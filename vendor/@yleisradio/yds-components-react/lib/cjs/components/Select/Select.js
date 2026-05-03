'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormElementLabel = require('../FormElementLabel/FormElementLabel.js');
var Select_styles = require('./Select.styles.js');

/**
 * A native web select component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Dropdown option selection UI and behavior determined by browser.
 *
 * @param {SelectProps} props
 * */
const Select = React.forwardRef(({
  isDisabled = false,
  success = false,
  items = [],
  label = 'Label',
  labelOptions = {},
  placeholder,
  errorMessage,
  description,
  value,
  id,
  name,
  onChange
}, ref) => jsxRuntime.jsxs(Select_styles.SelectFieldset, {
  children: [jsxRuntime.jsx(FormElementLabel.FormElementLabel, Object.assign({
    isDisabled: isDisabled,
    isRequired: false,
    htmlFor: id,
    label: label
  }, labelOptions)), jsxRuntime.jsx(Select_styles.SelectWrapper, {
    "$isDisabled": isDisabled,
    className: "yds-select__wrapper",
    children: jsxRuntime.jsxs(Select_styles.SelectElement, {
      ref: ref,
      disabled: isDisabled,
      required: !!placeholder,
      name: name,
      "aria-disabled": isDisabled ? 'true' : undefined,
      onChange: onChange,
      "$success": !errorMessage && success,
      "$error": Boolean(errorMessage),
      "aria-describedby": [errorMessage && `${id}-error`, description && `${id}-description`].filter(Boolean).join(' ') || undefined,
      "aria-invalid": Boolean(errorMessage),
      "aria-errormessage": errorMessage ? `${id}-error` : undefined,
      value: value ? value : placeholder ? '' : '',
      id: id,
      children: [placeholder && jsxRuntime.jsx(Select_styles.OptionElement, {
        value: "",
        hidden: true,
        children: placeholder
      }, 'placeholder-value'), items.map(item => jsxRuntime.jsx(Select_styles.OptionElement, {
        value: item.value ? item.value : item.label,
        disabled: item.disabled,
        children: item.label
      }, item.value))]
    })
  }), Boolean(errorMessage) && jsxRuntime.jsx(Select_styles.FormElementErrorMessage, {
    id: `${id}-error`,
    role: "alert",
    "aria-live": "assertive",
    children: errorMessage
  }), Boolean(description) && jsxRuntime.jsx(Select_styles.FormElementDescription, {
    id: `${id}-description`,
    children: description
  })]
}));

exports.Select = Select;
