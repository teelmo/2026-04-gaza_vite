'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var FormElementLabel_styles = require('./FormElementLabel.styles.js');

const FormElementLabel = _a => {
  var {
      isDisabled = false,
      isHidden = false,
      isRequired = false,
      hasMarginBottom = true,
      label = '',
      optionalLabel,
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["isDisabled", "isHidden", "isRequired", "hasMarginBottom", "label", "optionalLabel", "children"]);
  return jsxRuntime.jsxs(FormElementLabel_styles.FormElementLabelStyle, Object.assign({
    "$isDisabled": isDisabled,
    className: isHidden ? 'visually-hidden' : '',
    "$hasMarginBottom": hasMarginBottom
  }, other, {
    children: [label, children, optionalLabel && isRequired === false && jsxRuntime.jsxs(FormElementLabel_styles.OptionalLabel, {
      children: [" ", optionalLabel]
    })]
  }));
};

exports.FormElementLabel = FormElementLabel;
