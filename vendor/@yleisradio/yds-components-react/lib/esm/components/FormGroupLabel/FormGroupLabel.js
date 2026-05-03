import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs } from 'react/jsx-runtime';
import { FormGroupLabelStyle, FormGroupOptionalLabel } from './FormGroupLabel.styles.js';

const FormGroupLabel = _a => {
  var {
      isHidden = false,
      isRequired = false,
      label = '',
      optionalLabel,
      children
    } = _a,
    other = __rest(_a, ["isHidden", "isRequired", "label", "optionalLabel", "children"]);
  return jsxs(FormGroupLabelStyle, Object.assign({
    className: isHidden ? 'visually-hidden' : ''
  }, other, {
    children: [label, children, optionalLabel && isRequired === false && jsxs(FormGroupOptionalLabel, {
      children: [" ", optionalLabel]
    })]
  }));
};

export { FormGroupLabel };
