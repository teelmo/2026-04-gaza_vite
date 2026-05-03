import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { BadgeBase } from './Badge.styles.js';

/**
 * A Badge component with a text label with various presentation options.
 * Used to convey short keywords in noticeable manner.
 *
 * @param {BadgeProps} props
 * @param {BadgeSizeProp} [props.size='md'] - Size of the Badge
 * @param {BadgeColorProp} [props.color='default'] - Color of the Badge
 * @param {BadgeVariantProp} [props.variant='primary'] - Visual presentation of the Badge
 * */
const Badge = _a => {
  var {
      size = 'lg',
      color = 'default',
      variant = 'primary',
      children
    } = _a,
    other = __rest(_a, ["size", "color", "variant", "children"]);
  return jsx(BadgeBase, Object.assign({
    "$color": color,
    "$variant": variant,
    "$size": size
  }, other, {
    children: children
  }));
};

export { Badge };
