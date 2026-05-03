'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var TextInput_styles = require('./TextInput.styles.js');
var FormElementLabel = require('../FormElementLabel/FormElementLabel.js');
var Spinner = require('../Spinner/Spinner.js');
var generateId = require('../../internal/utils/generateId.js');

const validateType = type => {
  if (!['text', 'email', 'password', 'number', 'tel', 'search'].includes(type)) {
    return 'text';
  }
  return type;
};
const Icon = ({
  icon,
  location,
  isDisabled = false
}) => {
  var _a;
  if (icon.onClick || ((_a = icon.props) === null || _a === void 0 ? void 0 : _a.onClick)) {
    return jsxRuntime.jsx(TextInput_styles.InputButtonIcon, Object.assign({
      "aria-label": icon.ariaLabel,
      onClick: icon.onClick,
      type: "button",
      "$location": location,
      "$isDisabled": isDisabled,
      disabled: isDisabled
    }, icon.props, {
      children: jsxRuntime.jsx(icon.componentFn, {})
    }));
  }
  return jsxRuntime.jsx(TextInput_styles.InputIconWrapper, {
    "$location": location,
    "$isDisabled": isDisabled,
    children: jsxRuntime.jsx(icon.componentFn, {
      "aria-label": icon.ariaLabel
    })
  });
};
/**
 * A generic input component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`. Note that
 * the `props.icon.componentFn` is a function, not a component argument, i.e. `componentFn: Eye` instead of `componentFn: <Eye />`.
 *
 * @param {TextInputProps} props
 * @param {Object} props.icon
 * @param {Function} props.icon.componentFn - A render function of a component, instead of an already rendered component,
 *   i.e. `componentFn: Eye` instead of `componentFn: <Eye />`.
 * */
const TextInput = React.forwardRef((_a, ref) => {
  var {
      label,
      labelOptions = {},
      id = generateId.generateId('text-input'),
      value,
      onChange,
      placeholder,
      description,
      icon,
      submitButton,
      iconBefore,
      iconClear,
      errorMessage,
      autocomplete,
      type = 'text',
      success = false,
      isRequired = false,
      isDisabled = false,
      showLoadingIndicator = false,
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["label", "labelOptions", "id", "value", "onChange", "placeholder", "description", "icon", "submitButton", "iconBefore", "iconClear", "errorMessage", "autocomplete", "type", "success", "isRequired", "isDisabled", "showLoadingIndicator", "children"]);
  const hasIcon = Boolean(icon || iconBefore || iconClear || submitButton);
  const StyledInput = jsxRuntime.jsx(TextInput_styles.StyledTextInput, Object.assign({
    id: id,
    ref: ref,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    "$error": Boolean(errorMessage),
    autoComplete: autocomplete,
    type: validateType(type),
    "$success": !errorMessage && success,
    disabled: isDisabled,
    required: isRequired,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-labelledby": `${id}-label`,
    "aria-describedby": [errorMessage && `${id}-error`, description && `${id}-description`].filter(Boolean).join(' ') || undefined,
    "aria-invalid": Boolean(errorMessage),
    "aria-errormessage": errorMessage ? `${id}-error` : undefined,
    "aria-busy": showLoadingIndicator ? 'true' : undefined,
    "$hasIcon": hasIcon || showLoadingIndicator,
    "$hasIconBefore": Boolean(iconBefore) || showLoadingIndicator,
    "$hasIconAfter": Boolean(iconClear)
  }, other));
  return jsxRuntime.jsxs(TextInput_styles.TextInputFieldset, {
    children: [jsxRuntime.jsx(FormElementLabel.FormElementLabel, Object.assign({
      htmlFor: id,
      id: `${id}-label`,
      isDisabled: isDisabled,
      isRequired: isRequired
    }, labelOptions, {
      children: label
    })), icon || iconBefore || showLoadingIndicator || submitButton ? jsxRuntime.jsxs(TextInput_styles.InputAndIconContainer, {
      disabled: isDisabled,
      "$success": !errorMessage && success,
      "$error": Boolean(errorMessage),
      children: [iconBefore && !showLoadingIndicator && jsxRuntime.jsx(Icon, {
        icon: iconBefore,
        location: 'before',
        isDisabled: isDisabled
      }), showLoadingIndicator && jsxRuntime.jsx(TextInput_styles.LoadingIndicatorWrapper, {
        "$isDisabled": isDisabled,
        children: jsxRuntime.jsx(Spinner.Spinner, {
          size: "sm",
          variant: "default"
        })
      }), StyledInput, iconClear && jsxRuntime.jsx(Icon, {
        icon: iconClear,
        location: icon ? 'middle' : submitButton ? 'clearSubmit' : 'after',
        isDisabled: isDisabled
      }), icon && jsxRuntime.jsx(Icon, Object.assign({
        icon: icon,
        location: 'after',
        isDisabled: isDisabled
      }, icon)), submitButton && jsxRuntime.jsx(jsxRuntime.Fragment, {
        children: submitButton
      })]
    }) : StyledInput, children, Boolean(errorMessage) && jsxRuntime.jsx(TextInput_styles.TextInputErrorMessage, {
      id: `${id}-error`,
      role: "alert",
      "aria-live": "assertive",
      children: errorMessage
    }), Boolean(description) && jsxRuntime.jsx(TextInput_styles.TextInputDescription, {
      id: `${id}-description`,
      children: description
    })]
  });
});

exports.TextInput = TextInput;
