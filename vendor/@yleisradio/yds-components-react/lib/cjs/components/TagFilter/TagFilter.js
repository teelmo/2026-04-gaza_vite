'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var TagFilter_styles = require('./TagFilter.styles.js');

const TagFilter = _a => {
  var {
      size,
      onClose,
      text,
      closeText = 'Poista valinta'
    } = _a,
    rest = tslib_es6.__rest(_a, ["size", "onClose", "text", "closeText"]);
  return jsxRuntime.jsxs(TagFilter_styles.StyledTagFilter, Object.assign({
    "$size": size
  }, rest, {
    children: [jsxRuntime.jsx(TagFilter_styles.TagFilterContent, {
      children: text
    }), jsxRuntime.jsx(TagFilter_styles.TagFilterButton, {
      onClick: onClose,
      "aria-label": closeText,
      type: "button",
      "$size": size,
      children: jsxRuntime.jsx(ydsIconsReact.Close, {
        "aria-hidden": "true"
      })
    })]
  }));
};

exports.TagFilter = TagFilter;
