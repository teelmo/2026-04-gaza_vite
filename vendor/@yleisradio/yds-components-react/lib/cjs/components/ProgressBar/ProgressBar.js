'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var ProgressBar_styles = require('./ProgressBar.styles.js');

const ProgressBar = _a => {
  var {
      value = 0,
      max = 100,
      variant = 'determinate',
      status = 'active',
      label,
      description
    } = _a,
    other = tslib_es6.__rest(_a, ["value", "max", "variant", "status", "label", "description"]);
  const isIndeterminate = variant === 'indeterminate';
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  const showIcon = status === 'success' || status === 'error';
  return jsxRuntime.jsxs(ProgressBar_styles.ProgressBarWrapper, Object.assign({
    className: "yds-progress-bar",
    role: "progressbar",
    "aria-valuenow": isIndeterminate ? undefined : value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-label": label
  }, other, {
    children: [label && jsxRuntime.jsxs(ProgressBar_styles.LabelWrapper, {
      className: "yds-progress-bar__label-wrapper",
      children: [jsxRuntime.jsx(ProgressBar_styles.LabelText, {
        className: "yds-progress-bar__label",
        children: label
      }), showIcon && jsxRuntime.jsx(ProgressBar_styles.StatusIcon, {
        "$status": status,
        className: "yds-progress-bar__status-icon",
        children: status === 'success' ? jsxRuntime.jsx(ydsIconsReact.Check, {}) : jsxRuntime.jsx(ydsIconsReact.AlertTriangle, {})
      })]
    }), jsxRuntime.jsx(ProgressBar_styles.Track, {
      className: "yds-progress-bar__track",
      "$status": status,
      children: jsxRuntime.jsx(ProgressBar_styles.Indicator, {
        className: "yds-progress-bar__indicator",
        "$status": status,
        "$percentage": percentage,
        "$isIndeterminate": isIndeterminate
      })
    }), description && jsxRuntime.jsx(ProgressBar_styles.Description, {
      className: "yds-progress-bar__description",
      "$status": status,
      children: description
    })]
  }));
};

exports.ProgressBar = ProgressBar;
