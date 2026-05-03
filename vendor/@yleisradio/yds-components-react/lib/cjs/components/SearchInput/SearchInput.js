'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var TextInput = require('../TextInput/TextInput.js');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var Spinner = require('../Spinner/Spinner.js');
var SearchInput_styles = require('./SearchInput.styles.js');

const SearchSubmitButton = React.forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      loading = false
    } = _a,
    other = tslib_es6.__rest(_a, ["isDisabled", "loading"]);
  return jsxRuntime.jsx(SearchInput_styles.SearchInputSubmit, Object.assign({
    "aria-disabled": isDisabled ? 'true' : undefined,
    ref: ref,
    "$location": "after",
    "$isDisabled": isDisabled,
    "aria-busy": loading ? 'true' : undefined
  }, other, {
    children: loading ? jsxRuntime.jsx(Spinner.Spinner, {
      size: "sm"
    }) : jsxRuntime.jsx(ydsIconsReact.Search, {})
  }));
});
/**
 * A generic search component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Uses submitButton prop for submit component, which can be filled with SearchSubmitButton from same package.
 *
 * @param {TextInputProps} props
 * @param {ReactNode} props.submitButton
 * */
const SearchInput = React.forwardRef((_a, ref) => {
  var {
      label,
      labelOptions = {
        isHidden: true
      },
      id,
      value,
      onChange,
      placeholder,
      iconBefore,
      iconClear,
      autocomplete,
      type = 'search',
      submitButton,
      isRequired = false,
      isDisabled = false,
      showLoadingIndicator = false
    } = _a,
    other = tslib_es6.__rest(_a, ["label", "labelOptions", "id", "value", "onChange", "placeholder", "iconBefore", "iconClear", "autocomplete", "type", "submitButton", "isRequired", "isDisabled", "showLoadingIndicator"]);
  return jsxRuntime.jsx(TextInput.TextInput, Object.assign({
    id: id,
    ref: ref,
    label: label,
    labelOptions: labelOptions,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    autoComplete: autocomplete,
    type: type,
    isDisabled: isDisabled,
    required: isRequired,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-labelledby": `${id}-label`,
    submitButton: submitButton,
    showLoadingIndicator: submitButton ? false : showLoadingIndicator,
    iconBefore: iconBefore,
    iconClear: iconClear
  }, other));
});

exports.SearchInput = SearchInput;
exports.SearchSubmitButton = SearchSubmitButton;
