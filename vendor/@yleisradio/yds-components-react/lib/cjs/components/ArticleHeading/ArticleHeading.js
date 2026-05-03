'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ArticleHeading_styles = require('./ArticleHeading.styles.js');

const ArticleHeading = React.forwardRef((_a, ref) => {
  var {
      size,
      weight,
      noMargin
    } = _a,
    rest = tslib_es6.__rest(_a, ["size", "weight", "noMargin"]);
  return jsxRuntime.jsx(ArticleHeading_styles.StyledArticleHading, Object.assign({
    ref: ref,
    "$size": size,
    "$weight": weight,
    "$noMargin": noMargin
  }, rest));
});

exports.ArticleHeading = ArticleHeading;
