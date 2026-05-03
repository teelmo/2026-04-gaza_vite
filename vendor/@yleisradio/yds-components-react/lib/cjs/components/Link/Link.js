'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var Link_styles = require('./Link.styles.js');

/**
 * A styled link component that provides consistent styling for anchor tags.
 *
 * @param {LinkProps} props
 */
const Link = React.forwardRef((_a, ref) => {
  var {
      isExternal = false,
      externalLinkIconPosition = 'after',
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["isExternal", "externalLinkIconPosition", "children"]);
  return jsxRuntime.jsxs(Link_styles.StyledLink, Object.assign({
    "$isExternal": isExternal,
    ref: ref
  }, other, {
    children: [isExternal && externalLinkIconPosition === 'before' && jsxRuntime.jsx(Link_styles.IconWrapper, {
      children: jsxRuntime.jsx(ydsIconsReact.ExternalLink, {})
    }), children, isExternal && externalLinkIconPosition === 'after' && jsxRuntime.jsx(Link_styles.IconWrapper, {
      children: jsxRuntime.jsx(ydsIconsReact.ExternalLink, {})
    })]
  }));
});
Link.displayName = 'Link';

exports.Link = Link;
