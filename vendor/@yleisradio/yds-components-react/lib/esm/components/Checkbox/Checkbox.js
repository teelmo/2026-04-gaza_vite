import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { BaseCheckbox } from '../../internal/components/BaseCheckbox/BaseCheckbox.js';

const Checkbox = forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label,
      variant = 'primary',
      error = false,
      name,
      value,
      hideLabel = false,
      useUnderlay = false,
      onChange,
      controlAlign = 'start'
    } = _a,
    rest = __rest(_a, ["isDisabled", "label", "variant", "error", "name", "value", "hideLabel", "useUnderlay", "onChange", "controlAlign"]);
  return jsx(BaseCheckbox, Object.assign({
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
    onChange: onChange
  }, rest));
});

export { Checkbox };
