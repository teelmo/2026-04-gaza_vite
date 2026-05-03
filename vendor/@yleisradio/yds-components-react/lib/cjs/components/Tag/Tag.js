'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var Tag_styles = require('./Tag.styles.js');

/**
 * A tag component with a text label with various presentation options.
 * Used to convey short keywords in noticeable manner.
 *
 * @param {TagProps} props
 * @param {TagSizeProp} [props.size='md'] - Size of the tag
 * */
const Tag = _a => {
  var {
      size = 'md',
      variant = 'default',
      preventTransformUppercase = false,
      animate = false,
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["size", "variant", "preventTransformUppercase", "animate", "children"]);
  return jsxRuntime.jsx(Tag_styles.TagBase, Object.assign({
    "$variant": variant,
    "$size": size,
    "$preventTransformUppercase": preventTransformUppercase,
    "$animate": animate
  }, other, {
    children: children
  }));
};

exports.Tag = Tag;
