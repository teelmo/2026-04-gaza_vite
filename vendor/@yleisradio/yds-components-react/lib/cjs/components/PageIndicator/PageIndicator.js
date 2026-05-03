'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var PageIndicator_styles = require('./PageIndicator.styles.js');

const PageIndicatorContainer = _a => {
  var {
      children
    } = _a,
    rest = tslib_es6.__rest(_a, ["children"]);
  return jsxRuntime.jsx(PageIndicator_styles.StyledPageIndicatorContainer, Object.assign({
    role: "group"
  }, rest, {
    children: children
  }));
};
const PageIndicator = _a => {
  var {
      isActive = false
    } = _a,
    rest = tslib_es6.__rest(_a, ["isActive"]);
  return jsxRuntime.jsx(PageIndicator_styles.StyledPageIndicator, Object.assign({
    "$active": isActive,
    "aria-current": isActive ? 'page' : undefined
  }, rest));
};

exports.PageIndicator = PageIndicator;
exports.PageIndicatorContainer = PageIndicatorContainer;
