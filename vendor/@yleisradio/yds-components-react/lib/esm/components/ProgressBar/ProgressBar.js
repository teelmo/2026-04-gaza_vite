import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Check, AlertTriangle } from '@yleisradio/yds-icons-react';
import { ProgressBarWrapper, LabelWrapper, LabelText, StatusIcon, Track, Indicator, Description } from './ProgressBar.styles.js';

const ProgressBar = _a => {
  var {
      value = 0,
      max = 100,
      variant = 'determinate',
      status = 'active',
      label,
      description
    } = _a,
    other = __rest(_a, ["value", "max", "variant", "status", "label", "description"]);
  const isIndeterminate = variant === 'indeterminate';
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const showIcon = status === 'success' || status === 'error';
  return jsxs(ProgressBarWrapper, Object.assign({
    className: "yds-progress-bar",
    role: "progressbar",
    "aria-valuenow": isIndeterminate ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": label
  }, other, {
    children: [label && jsxs(LabelWrapper, {
      className: "yds-progress-bar__label-wrapper",
      children: [jsx(LabelText, {
        className: "yds-progress-bar__label",
        children: label
      }), showIcon && jsx(StatusIcon, {
        "$status": status,
        className: "yds-progress-bar__status-icon",
        children: status === 'success' ? jsx(Check, {}) : jsx(AlertTriangle, {})
      })]
    }), jsx(Track, {
      className: "yds-progress-bar__track",
      "$status": status,
      children: jsx(Indicator, {
        className: "yds-progress-bar__indicator",
        "$status": status,
        "$percentage": percentage,
        "$isIndeterminate": isIndeterminate
      })
    }), description && jsx(Description, {
      className: "yds-progress-bar__description",
      "$status": status,
      children: description
    })]
  }));
};

export { ProgressBar };
