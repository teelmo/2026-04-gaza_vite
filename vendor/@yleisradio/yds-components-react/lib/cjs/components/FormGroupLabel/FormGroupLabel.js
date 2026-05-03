'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var FormGroupLabel_styles = require('./FormGroupLabel.styles.js');

const FormGroupLabel = _a => {
  var {
      isHidden = false,
      isRequired = false,
      label = '',
      optionalLabel,
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["isHidden", "isRequired", "label", "optionalLabel", "children"]);
  return jsxRuntime.jsxs(FormGroupLabel_styles.FormGroupLabelStyle, Object.assign({
    className: isHidden ? 'visually-hidden' : ''
  }, other, {
    children: [label, children, optionalLabel && isRequired === false && jsxRuntime.jsxs(FormGroupLabel_styles.FormGroupOptionalLabel, {
      children: [" ", optionalLabel]
    })]
  }));
};

exports.FormGroupLabel = FormGroupLabel;
