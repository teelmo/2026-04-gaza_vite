'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useRadioGroup = require('../../../components/RadioGroup/useRadioGroup.js');
var BaseRadio_styles = require('./BaseRadio.styles.js');
var CheckableLabel_styles = require('../CheckableLabel/CheckableLabel.styles.js');

const BaseRadio = React.forwardRef((_a, ref) => {
  var _b;
  var {
      variant = 'primary',
      isDisabled = false,
      error: errorProp,
      label,
      name: nameProp,
      value,
      checked: checkedProp,
      onChange: onChangeProp,
      hideLabel = false,
      useUnderlay = false,
      controlAlign = 'start',
      controlSize = 'md'
    } = _a,
    rest = tslib_es6.__rest(_a, ["variant", "isDisabled", "error", "label", "name", "value", "checked", "onChange", "hideLabel", "useUnderlay", "controlAlign", "controlSize"]);
  const radioGroupContext = useRadioGroup.useRadioGroup();
  const name = nameProp !== null && nameProp !== void 0 ? nameProp : radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.name;
  const error = (_b = radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.error) !== null && _b !== void 0 ? _b : errorProp;
  const checked = checkedProp !== null && checkedProp !== void 0 ? checkedProp : (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.value) && (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.value) === value;
  const onChange = onChangeProp !== null && onChangeProp !== void 0 ? onChangeProp : radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.onChange;
  const errorId = radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.errorId;
  const descId = radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.descId;
  const ariaDescribedBy = (descId || errorId) && [descId, errorId].filter(Boolean).join(' ');
  const radioGroupDirection = radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.direction;
  return jsxRuntime.jsxs(CheckableLabel_styles.CheckableLabel, {
    "$isDisabled": isDisabled,
    "$isError": error,
    "$useUnderlay": useUnderlay,
    "$hideLabel": hideLabel,
    "$controlAlign": controlAlign,
    "$controlSize": controlSize,
    children: [jsxRuntime.jsx(BaseRadio_styles.RadioBase, Object.assign({
      ref: ref,
      type: "radio",
      disabled: isDisabled,
      name: name,
      "aria-disabled": isDisabled ? 'true' : undefined,
      "aria-describedby": ariaDescribedBy,
      "$variant": variant,
      "$error": error,
      checked: checked,
      value: value,
      onChange: onChange,
      "$hideLabel": hideLabel,
      "$controlAlign": controlAlign,
      "$direction": radioGroupDirection
    }, rest)), jsxRuntime.jsx(BaseRadio_styles.RadioLabelText, {
      "$direction": radioGroupDirection,
      "$controlSize": controlSize,
      children: label
    })]
  });
});

exports.BaseRadio = BaseRadio;
