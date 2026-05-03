import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel.js';
import { SelectFieldset, SelectWrapper, SelectElement, OptionElement, FormElementErrorMessage, FormElementDescription } from './Select.styles.js';

/**
 * A native web select component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Dropdown option selection UI and behavior determined by browser.
 *
 * @param {SelectProps} props
 * */
const Select = forwardRef(({
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
}, ref) => jsxs(SelectFieldset, {
  children: [jsx(FormElementLabel, Object.assign({
    isDisabled: isDisabled,
    isRequired: false,
    htmlFor: id,
    label: label
  }, labelOptions)), jsx(SelectWrapper, {
    "$isDisabled": isDisabled,
    className: "yds-select__wrapper",
    children: jsxs(SelectElement, {
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
      children: [placeholder && jsx(OptionElement, {
        value: "",
        hidden: true,
        children: placeholder
      }, 'placeholder-value'), items.map(item => jsx(OptionElement, {
        value: item.value ? item.value : item.label,
        disabled: item.disabled,
        children: item.label
      }, item.value))]
    })
  }), Boolean(errorMessage) && jsx(FormElementErrorMessage, {
    id: `${id}-error`,
    role: "alert",
    "aria-live": "assertive",
    children: errorMessage
  }), Boolean(description) && jsx(FormElementDescription, {
    id: `${id}-description`,
    children: description
  })]
}));

export { Select };
