import { __rest } from '../../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { CheckboxBase } from './BaseCheckbox.styles.js';
import { useCheckboxGroup } from '../../../components/CheckboxGroup/useCheckboxGroup.js';
import { CheckableLabel } from '../CheckableLabel/CheckableLabel.styles.js';

const BaseCheckbox = forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label: labelProp,
      variant = 'primary',
      error = false,
      name: nameProp,
      value: valueProp,
      hideLabel = false,
      useUnderlay = false,
      onChange: onChangeProp,
      controlAlign = 'start',
      controlSize = 'md'
    } = _a,
    other = __rest(_a, ["isDisabled", "label", "variant", "error", "name", "value", "hideLabel", "useUnderlay", "onChange", "controlAlign", "controlSize"]);
  const checkboxGroup = useCheckboxGroup();
  let onChange = onChangeProp;
  let checked = other.checked;
  let name = nameProp;
  const value = valueProp ? valueProp : typeof labelProp === 'string' ? labelProp : '';
  const label = labelProp;
  if (checkboxGroup) {
    if (typeof onChangeProp === 'undefined') {
      onChange = checkboxGroup.onChange;
    }
    const checkboxValues = checkboxGroup.value || [];
    checked = checkboxValues.length && checkboxValues.includes(value);
    name = checkboxGroup.name;
  }
  return jsxs(CheckableLabel, {
    "$isDisabled": isDisabled,
    "$isError": error,
    "$hideLabel": hideLabel,
    "$useUnderlay": useUnderlay,
    "$controlAlign": controlAlign,
    "$controlSize": controlSize,
    children: [jsx(CheckboxBase, Object.assign({
      ref: ref,
      type: "checkbox",
      "$variant": variant,
      "$isError": error,
      name: name,
      value: value,
      checked: checked,
      "aria-disabled": isDisabled ? 'true' : undefined,
      "$hideLabel": hideLabel,
      "$controlAlign": controlAlign,
      onClick: isDisabled ? e => e.preventDefault() : () => {
        return true;
      },
      onChange: onChange
    }, other)), label]
  });
});

export { BaseCheckbox };
