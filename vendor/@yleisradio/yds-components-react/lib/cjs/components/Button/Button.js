'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Button_styles = require('./Button.styles.js');
var Spinner = require('../Spinner/Spinner.js');

const buttonTypes = {
  primary: Button_styles.ButtonPrimary,
  secondary: Button_styles.ButtonSecondary,
  text: Button_styles.ButtonText
};
const Button = React.forwardRef((_a, ref) => {
  var {
      variant = 'primary',
      isDisabled = false,
      iconBefore = undefined,
      iconAfter = undefined,
      iconOnly = false,
      loading = false,
      size = 'md',
      text,
      accessibleText,
      children,
      fullWidth = false,
      removePadding = false
    } = _a,
    other = tslib_es6.__rest(_a, ["variant", "isDisabled", "iconBefore", "iconAfter", "iconOnly", "loading", "size", "text", "accessibleText", "children", "fullWidth", "removePadding"]);
  const StyledButton = buttonTypes[variant];
  return jsxRuntime.jsxs(StyledButton, Object.assign({
    "$size": size,
    "$fullWidth": fullWidth,
    "$iconOnly": iconBefore && !iconAfter || !iconBefore && iconAfter ? iconOnly : false,
    "aria-label": accessibleText ? accessibleText : text,
    "$isDisabled": isDisabled,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-busy": loading ? 'true' : undefined,
    "$loading": loading,
    "$removePadding": removePadding,
    ref: ref
  }, other, {
    children: [!!iconBefore && jsxRuntime.jsx(Button_styles.IconWrapper, {
      "$size": size,
      "$loading": loading,
      className: "yds-button__icon",
      children: iconBefore
    }), children !== undefined && jsxRuntime.jsx(Button_styles.TextWrapper, {
      "$hasIcon": !!iconBefore,
      "$hasIconAfter": !!iconAfter,
      "$loading": loading,
      "$isDisabled": isDisabled,
      "$size": size,
      "$variant": variant,
      "$removePadding": removePadding,
      className: "yds-button__content",
      children: children
    }), text && text !== '' && jsxRuntime.jsx(Button_styles.TextWrapper, {
      "$iconOnly": iconOnly && !!iconBefore,
      "$hasIcon": !!iconBefore,
      "$hasIconAfter": !!iconAfter,
      "$loading": loading,
      "$isDisabled": isDisabled,
      "$size": size,
      "$variant": variant,
      "$removePadding": removePadding,
      className: "yds-button__text",
      children: text
    }), !!iconAfter && jsxRuntime.jsx(Button_styles.IconWrapper, {
      "$size": size,
      "$loading": loading,
      className: "yds-button__icon",
      children: iconAfter
    }), loading && jsxRuntime.jsx(Button_styles.LoadingIndicator, {
      "$size": size,
      children: jsxRuntime.jsx(Spinner.Spinner, {
        variant: variant === 'primary' ? 'default-negative' : 'default'
      })
    })]
  }));
});

exports.Button = Button;
