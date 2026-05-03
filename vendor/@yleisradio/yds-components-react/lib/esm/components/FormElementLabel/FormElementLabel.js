import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs } from 'react/jsx-runtime';
import { FormElementLabelStyle, OptionalLabel } from './FormElementLabel.styles.js';

const FormElementLabel = _a => {
  var {
      isDisabled = false,
      isHidden = false,
      isRequired = false,
      hasMarginBottom = true,
      label = '',
      optionalLabel,
      children
    } = _a,
    other = __rest(_a, ["isDisabled", "isHidden", "isRequired", "hasMarginBottom", "label", "optionalLabel", "children"]);
  return jsxs(FormElementLabelStyle, Object.assign({
    "$isDisabled": isDisabled,
    className: isHidden ? 'visually-hidden' : '',
    "$hasMarginBottom": hasMarginBottom
  }, other, {
    children: [label, children, optionalLabel && isRequired === false && jsxs(OptionalLabel, {
      children: [" ", optionalLabel]
    })]
  }));
};

export { FormElementLabel };
