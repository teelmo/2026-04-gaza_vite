import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel.js';
import { SwitchBase } from './Switch.styles.js';

/**
 * Switch (or Toggle, Toggle button, Toggle switch) is a on-off selection component with a label.
 * Extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled`. Label text and Switch are linked together through component `id`.
 * Switch should be used in situation when user changing the value causes instant and persistent change -
 * for on/off selections that need to be submitted separately, use `Checkbox` component.
 *
 * @param {SwitchProps} props
 * */
const Switch = forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      label,
      labelOptions = {},
      name,
      onChange
    } = _a,
    other = __rest(_a, ["isDisabled", "label", "labelOptions", "name", "onChange"]);
  const id = other.id;
  return jsxs(Fragment, {
    children: [!!label && jsx(FormElementLabel, Object.assign({
      id: `${name}--label`,
      htmlFor: id,
      isDisabled: isDisabled,
      label: label
    }, labelOptions)), jsx(SwitchBase, Object.assign({
      ref: ref,
      type: "checkbox",
      disabled: isDisabled,
      name: name,
      "aria-disabled": isDisabled ? 'true' : undefined,
      role: "switch",
      onChange: onChange
    }, other))]
  });
});

export { Switch };
