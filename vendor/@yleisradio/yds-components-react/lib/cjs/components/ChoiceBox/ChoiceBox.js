'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ChoiceContainer = require('../../internal/components/ChoiceContainer/ChoiceContainer.js');
var ChoiceBox_styles = require('./ChoiceBox.styles.js');

const ChoiceBox = React.forwardRef((_a, ref) => {
  var {
      status = undefined,
      icon,
      containerSize = undefined,
      controlAlign = undefined,
      content
    } = _a,
    args = tslib_es6.__rest(_a, ["status", "icon", "containerSize", "controlAlign", "content"]);
  return jsxRuntime.jsx(ChoiceContainer.ChoiceContainer, {
    status: status,
    content: content,
    icon: icon,
    containerSize: containerSize,
    controlAlign: controlAlign,
    children: jsxRuntime.jsx(ChoiceBox_styles.ChoiceBoxCheckbox, Object.assign({
      ref: ref,
      useUnderlay: true,
      controlAlign: controlAlign
    }, args))
  });
});

exports.ChoiceBox = ChoiceBox;
