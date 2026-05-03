'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var TagLink_styles = require('./TagLink.styles.js');

/**
 * An interactive keyword link that provides context for the title.
 * Tag links are used as a group at the end of the article.
 *
 * @param {TagLinkProps} props
 * */
const TagLink = _a => {
  var {
      variant = 'primary',
      removePadding = false,
      children,
      numberOfLines = 1
    } = _a,
    other = tslib_es6.__rest(_a, ["variant", "removePadding", "children", "numberOfLines"]);
  if (!other.href && !other.onClick) {
    return jsxRuntime.jsx(TagLink_styles.TagLinkBaseNonInteractive, Object.assign({
      "$variant": variant,
      "$removePadding": removePadding,
      "$numberOfLines": numberOfLines
    }, other, {
      children: children
    }));
  }
  return jsxRuntime.jsx(TagLink_styles.TagLinkBase, Object.assign({
    "$variant": variant,
    "$removePadding": removePadding,
    "$numberOfLines": numberOfLines
  }, other, {
    children: children
  }));
};

exports.TagLink = TagLink;
