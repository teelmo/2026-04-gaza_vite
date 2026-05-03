'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ChoiceContainer = require('../../internal/components/ChoiceContainer/ChoiceContainer.js');
var ChoiceButton_styles = require('./ChoiceButton.styles.js');

const ChoiceButton = React.forwardRef((_a, ref) => {
  var {
      status = undefined,
      icon,
      controlAlign = undefined,
      containerSize = undefined,
      content
    } = _a,
    args = tslib_es6.__rest(_a, ["status", "icon", "controlAlign", "containerSize", "content"]);
  return jsxRuntime.jsx(ChoiceContainer.ChoiceContainer, {
    status: status,
    content: content,
    containerSize: containerSize,
    icon: icon,
    controlAlign: controlAlign,
    children: jsxRuntime.jsx(ChoiceButton_styles.ChoiceButtonRadio, Object.assign({
      ref: ref,
      useUnderlay: true,
      controlAlign: controlAlign
    }, args))
  });
});

exports.ChoiceButton = ChoiceButton;
