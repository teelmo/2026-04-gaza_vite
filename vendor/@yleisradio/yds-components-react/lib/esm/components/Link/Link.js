import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import { ExternalLink } from '@yleisradio/yds-icons-react';
import { StyledLink, IconWrapper } from './Link.styles.js';

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
    other = __rest(_a, ["isExternal", "externalLinkIconPosition", "children"]);
  return jsxs(StyledLink, Object.assign({
    "$isExternal": isExternal,
    ref: ref
  }, other, {
    children: [isExternal && externalLinkIconPosition === 'before' && jsx(IconWrapper, {
      children: jsx(ExternalLink, {})
    }), children, isExternal && externalLinkIconPosition === 'after' && jsx(IconWrapper, {
      children: jsx(ExternalLink, {})
    })]
  }));
});
Link.displayName = 'Link';

export { Link };
