import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { IconWrapper, TextWrapper, LoadingIndicator, ButtonPrimary, ButtonSecondary, ButtonText } from './Button.styles.js';
import { Spinner } from '../Spinner/Spinner.js';

const buttonTypes = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  text: ButtonText
};
const Button = forwardRef((_a, ref) => {
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
    other = __rest(_a, ["variant", "isDisabled", "iconBefore", "iconAfter", "iconOnly", "loading", "size", "text", "accessibleText", "children", "fullWidth", "removePadding"]);
  const StyledButton = buttonTypes[variant];
  return jsxs(StyledButton, Object.assign({
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
    children: [!!iconBefore && jsx(IconWrapper, {
      "$size": size,
      "$loading": loading,
      className: "yds-button__icon",
      children: iconBefore
    }), children !== undefined && jsx(TextWrapper, {
      "$hasIcon": !!iconBefore,
      "$hasIconAfter": !!iconAfter,
      "$loading": loading,
      "$isDisabled": isDisabled,
      "$size": size,
      "$variant": variant,
      "$removePadding": removePadding,
      className: "yds-button__content",
      children: children
    }), text && text !== '' && jsx(TextWrapper, {
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
    }), !!iconAfter && jsx(IconWrapper, {
      "$size": size,
      "$loading": loading,
      className: "yds-button__icon",
      children: iconAfter
    }), loading && jsx(LoadingIndicator, {
      "$size": size,
      children: jsx(Spinner, {
        variant: variant === 'primary' ? 'default-negative' : 'default'
      })
    })]
  }));
});

export { Button };
