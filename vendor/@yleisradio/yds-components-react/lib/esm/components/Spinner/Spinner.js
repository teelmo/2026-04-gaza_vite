import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { SpinnerWrapper, SpinnerBase, SpinnerBackground, SpinnerWheel, SpinnerLabel } from './Spinner.styles.js';

const Spinner = _a => {
  var {
      size = 'md',
      variant = 'default',
      hasBackground = false,
      label,
      colors
    } = _a,
    other = __rest(_a, ["size", "variant", "hasBackground", "label", "colors"]);
  return jsxs(SpinnerWrapper, Object.assign({
    className: "yds-spinner-wrapper",
    "$variant": variant
  }, other, {
    children: [jsxs(SpinnerBase, {
      className: "yds-spinner",
      viewBox: "0 0 72 72",
      "$size": size,
      children: [hasBackground && jsx(SpinnerBackground, {
        cx: "36",
        cy: "36",
        r: "30",
        stroke: (colors === null || colors === void 0 ? void 0 : colors.background) ? colors.background : 'transparent',
        strokeWidth: "6",
        fill: "none",
        "$variant": variant,
        "$colors": colors
      }), jsx(SpinnerWheel, {
        d: "M66 36C66 41.9334 64.2405 47.7336 60.9441 52.6671C57.6476 57.6006 52.9623 61.4458 47.4805 63.7164C41.9987 65.987 35.9667 66.5811 30.1473 65.4236C24.3279 64.266 18.9824 61.4088 14.7868 57.2132C10.5912 53.0176 7.734 47.6721 6.57644 41.8527C5.41888 36.0333 6.01299 30.0013 8.28361 24.5195C10.5542 19.0377 14.3994 14.3524 19.3329 11.0559C24.2664 7.75947 30.0666 6 36 6",
        stroke: (colors === null || colors === void 0 ? void 0 : colors.spinner) ? colors.spinner : 'currentColor',
        strokeWidth: "6",
        strokeLinecap: "round",
        fill: "none",
        "$variant": variant,
        "$colors": colors
      })]
    }), label && jsx(SpinnerLabel, {
      children: label
    })]
  }));
};

export { Spinner };
