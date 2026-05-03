import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { TagBase } from './Tag.styles.js';

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
    other = __rest(_a, ["size", "variant", "preventTransformUppercase", "animate", "children"]);
  return jsx(TagBase, Object.assign({
    "$variant": variant,
    "$size": size,
    "$preventTransformUppercase": preventTransformUppercase,
    "$animate": animate
  }, other, {
    children: children
  }));
};

export { Tag };
