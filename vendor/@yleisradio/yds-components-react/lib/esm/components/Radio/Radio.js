import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { BaseRadio } from '../../internal/components/BaseRadio/BaseRadio.js';

const Radio = forwardRef((_a, ref) => {
  var {
      variant = 'primary',
      isDisabled = false,
      error,
      label,
      name,
      value,
      checked,
      onChange,
      hideLabel = false,
      useUnderlay = false,
      controlAlign = 'start'
    } = _a,
    rest = __rest(_a, ["variant", "isDisabled", "error", "label", "name", "value", "checked", "onChange", "hideLabel", "useUnderlay", "controlAlign"]);
  return jsx(BaseRadio, Object.assign({
    ref: ref,
    name: name,
    error: error,
    label: label,
    variant: variant,
    isDisabled: isDisabled,
    value: value,
    hideLabel: hideLabel,
    useUnderlay: useUnderlay,
    controlAlign: controlAlign,
    controlSize: "md",
    checked: checked,
    onChange: onChange
  }, rest));
});

export { Radio };
