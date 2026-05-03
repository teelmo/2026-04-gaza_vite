import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { StyledArticleHading } from './ArticleHeading.styles.js';

const ArticleHeading = forwardRef((_a, ref) => {
  var {
      size,
      weight,
      noMargin
    } = _a,
    rest = __rest(_a, ["size", "weight", "noMargin"]);
  return jsx(StyledArticleHading, Object.assign({
    ref: ref,
    "$size": size,
    "$weight": weight,
    "$noMargin": noMargin
  }, rest));
});

export { ArticleHeading };
