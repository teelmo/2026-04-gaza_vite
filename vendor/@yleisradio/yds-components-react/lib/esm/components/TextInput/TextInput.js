import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { StyledTextInput, TextInputFieldset, InputAndIconContainer, LoadingIndicatorWrapper, TextInputErrorMessage, TextInputDescription, InputButtonIcon, InputIconWrapper } from './TextInput.styles.js';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel.js';
import { Spinner } from '../Spinner/Spinner.js';
import { generateId } from '../../internal/utils/generateId.js';

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
    return jsx(InputButtonIcon, Object.assign({
      "aria-label": icon.ariaLabel,
      onClick: icon.onClick,
      type: "button",
      "$location": location,
      "$isDisabled": isDisabled,
      disabled: isDisabled
    }, icon.props, {
      children: jsx(icon.componentFn, {})
    }));
  }
  return jsx(InputIconWrapper, {
    "$location": location,
    "$isDisabled": isDisabled,
    children: jsx(icon.componentFn, {
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
const TextInput = forwardRef((_a, ref) => {
  var {
      label,
      labelOptions = {},
      id = generateId('text-input'),
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
    other = __rest(_a, ["label", "labelOptions", "id", "value", "onChange", "placeholder", "description", "icon", "submitButton", "iconBefore", "iconClear", "errorMessage", "autocomplete", "type", "success", "isRequired", "isDisabled", "showLoadingIndicator", "children"]);
  const hasIcon = Boolean(icon || iconBefore || iconClear || submitButton);
  const StyledInput = jsx(StyledTextInput, Object.assign({
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
  return jsxs(TextInputFieldset, {
    children: [jsx(FormElementLabel, Object.assign({
      htmlFor: id,
      id: `${id}-label`,
      isDisabled: isDisabled,
      isRequired: isRequired
    }, labelOptions, {
      children: label
    })), icon || iconBefore || showLoadingIndicator || submitButton ? jsxs(InputAndIconContainer, {
      disabled: isDisabled,
      "$success": !errorMessage && success,
      "$error": Boolean(errorMessage),
      children: [iconBefore && !showLoadingIndicator && jsx(Icon, {
        icon: iconBefore,
        location: 'before',
        isDisabled: isDisabled
      }), showLoadingIndicator && jsx(LoadingIndicatorWrapper, {
        "$isDisabled": isDisabled,
        children: jsx(Spinner, {
          size: "sm",
          variant: "default"
        })
      }), StyledInput, iconClear && jsx(Icon, {
        icon: iconClear,
        location: icon ? 'middle' : submitButton ? 'clearSubmit' : 'after',
        isDisabled: isDisabled
      }), icon && jsx(Icon, Object.assign({
        icon: icon,
        location: 'after',
        isDisabled: isDisabled
      }, icon)), submitButton && jsx(Fragment, {
        children: submitButton
      })]
    }) : StyledInput, children, Boolean(errorMessage) && jsx(TextInputErrorMessage, {
      id: `${id}-error`,
      role: "alert",
      "aria-live": "assertive",
      children: errorMessage
    }), Boolean(description) && jsx(TextInputDescription, {
      id: `${id}-description`,
      children: description
    })]
  });
});

export { TextInput };
