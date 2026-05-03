import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { StyledPageIndicatorContainer, StyledPageIndicator } from './PageIndicator.styles.js';

const PageIndicatorContainer = _a => {
  var {
      children
    } = _a,
    rest = __rest(_a, ["children"]);
  return jsx(StyledPageIndicatorContainer, Object.assign({
    role: "group"
  }, rest, {
    children: children
  }));
};
const PageIndicator = _a => {
  var {
      isActive = false
    } = _a,
    rest = __rest(_a, ["isActive"]);
  return jsx(StyledPageIndicator, Object.assign({
    "$active": isActive,
    "aria-current": isActive ? 'page' : undefined
  }, rest));
};

export { PageIndicator, PageIndicatorContainer };
