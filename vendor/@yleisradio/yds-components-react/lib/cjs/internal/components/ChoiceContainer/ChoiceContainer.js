'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ChoiceContainer_styles = require('./ChoiceContainer.styles.js');

const ChoiceContainer = ({
  status = undefined,
  icon,
  content,
  containerSize = 'md',
  controlAlign = 'start',
  children
}) => {
  return jsxRuntime.jsxs(ChoiceContainer_styles.ChoiceButtonContainer, {
    "$status": status,
    children: [jsxRuntime.jsxs(ChoiceContainer_styles.ChoiceButtonHeader, {
      "$size": containerSize,
      "$controlAlign": controlAlign,
      children: [children, icon && jsxRuntime.jsx(ChoiceContainer_styles.ChoiceButtonIconContainer, {
        "$status": status,
        "$controlAlign": controlAlign,
        children: icon
      })]
    }), content && jsxRuntime.jsx("div", {
      children: content
    })]
  });
};

exports.ChoiceContainer = ChoiceContainer;
