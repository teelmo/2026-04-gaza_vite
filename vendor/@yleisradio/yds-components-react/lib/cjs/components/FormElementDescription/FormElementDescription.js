'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var FormElementDescription_styles = require('./FormElementDescription.styles.js');

const FormElementDescription = _a => {
  var {
      text = ''
    } = _a,
    other = tslib_es6.__rest(_a, ["text"]);
  return jsxRuntime.jsx(FormElementDescription_styles.FormElementDescriptionStyle, Object.assign({}, other, {
    children: text
  }));
};

exports.FormElementDescription = FormElementDescription;
