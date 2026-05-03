import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { TagLinkBaseNonInteractive, TagLinkBase } from './TagLink.styles.js';

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
    other = __rest(_a, ["variant", "removePadding", "children", "numberOfLines"]);
  if (!other.href && !other.onClick) {
    return jsx(TagLinkBaseNonInteractive, Object.assign({
      "$variant": variant,
      "$removePadding": removePadding,
      "$numberOfLines": numberOfLines
    }, other, {
      children: children
    }));
  }
  return jsx(TagLinkBase, Object.assign({
    "$variant": variant,
    "$removePadding": removePadding,
    "$numberOfLines": numberOfLines
  }, other, {
    children: children
  }));
};

export { TagLink };
