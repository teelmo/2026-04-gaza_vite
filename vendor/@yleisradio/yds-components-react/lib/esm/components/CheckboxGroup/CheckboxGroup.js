import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { Message } from '../../internal/components/Message/Message.js';
import { CheckboxGroupContext } from './CheckboxGroupContext.js';
import { StyledFieldset, StyledDescription, StyledCheckboxGroup } from './CheckboxGroup.styles.js';
import { FormGroupLabel } from '../FormGroupLabel/FormGroupLabel.js';

const CheckboxGroup = forwardRef((props, ref) => {
  const {
      children,
      name,
      selectedValue: valueProp,
      id: idProp,
      errorMessage,
      label,
      labelOptions,
      description,
      onValueChange
    } = props,
    rest = __rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "labelOptions", "description", "onValueChange"]);
  const [value, setValueState] = useState(valueProp || []);
  const useFieldset = label || description;
  const hasError = Boolean(errorMessage);
  const id = idProp || `group-${name}`;
  useEffect(() => {
    setValueState(valueProp);
  }, [valueProp]);
  useEffect(() => {
    onValueChange(value);
    // Ignore the warning for exhaustive deps to avoid breaking existing implementations
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleChange = e => {
    if (e.currentTarget.ariaDisabled === 'true') {
      return;
    }
    if (value.includes(e.currentTarget.value)) {
      setValueState(value.filter(existingValue => existingValue !== e.currentTarget.value));
    } else {
      setValueState(value.concat([e.currentTarget.value]));
    }
  };
  const renderCheckboxGroup = () => jsx(StyledCheckboxGroup, {
    "aria-label": label,
    ref: ref,
    children: children
  });
  return jsx(CheckboxGroupContext.Provider, {
    value: {
      name,
      onChange: handleChange,
      value,
      error: hasError,
      errorId: hasError ? `${id}-error` : undefined,
      descId: description ? `${id}-description` : undefined
    },
    children: useFieldset ? jsxs(StyledFieldset, Object.assign({}, rest, {
      children: [label && jsx(FormGroupLabel, Object.assign({}, labelOptions, {
        children: label
      })), description && jsx(StyledDescription, {
        id: `${id}-description`,
        children: description
      }), renderCheckboxGroup(), hasError && jsx(Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })) : jsxs(Fragment, {
      children: [renderCheckboxGroup(), hasError && jsx(Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })
  });
});

export { CheckboxGroup };
