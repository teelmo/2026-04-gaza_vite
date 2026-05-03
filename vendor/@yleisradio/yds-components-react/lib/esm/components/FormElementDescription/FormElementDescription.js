import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { FormElementDescriptionStyle } from './FormElementDescription.styles.js';

const FormElementDescription = _a => {
  var {
      text = ''
    } = _a,
    other = __rest(_a, ["text"]);
  return jsx(FormElementDescriptionStyle, Object.assign({}, other, {
    children: text
  }));
};

export { FormElementDescription };
