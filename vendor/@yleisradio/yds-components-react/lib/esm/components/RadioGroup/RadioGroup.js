import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { forwardRef, useState, useEffect } from 'react';
import { Message } from '../../internal/components/Message/Message.js';
import { RadioGroupContext } from './RadioGroupContext.js';
import { StyledFieldset, StyledDescription, HorizontalRadioWrapper, StyledRadioGroup } from './RadioGroups.styles.js';
import { FormGroupLabel } from '../FormGroupLabel/FormGroupLabel.js';

// This determines the element id that is passed onto the aria-describedby of every child Radio
// We need to make a smart decision on what (and how) to determine what is the best thing to pass here
const getDescId = (id, description) => {
  return description ? `${id}-description` : undefined;
};
const RadioGroupBase = _a => {
  var {
      children,
      name,
      selectedValue: valueProp,
      id: idProp,
      errorMessage,
      label,
      labelOptions,
      description,
      direction = 'vertical',
      onChange,
      renderRadioGroup
    } = _a,
    rest = __rest(_a, ["children", "name", "selectedValue", "id", "errorMessage", "label", "labelOptions", "description", "direction", "onChange", "renderRadioGroup"]);
  const [value, setValueState] = useState(valueProp);
  const useFieldset = label || description;
  const hasError = Boolean(errorMessage);
  const id = idProp || `group-${name}`;
  useEffect(() => {
    setValueState(valueProp);
  }, [valueProp]);
  const handleChange = event => {
    setValueState(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  return jsx(RadioGroupContext.Provider, {
    value: {
      name,
      onChange: handleChange,
      value,
      error: hasError,
      errorId: hasError ? `${id}-error` : undefined,
      descId: getDescId(id, description),
      direction: direction
    },
    children: useFieldset ? jsxs(StyledFieldset, Object.assign({}, rest, {
      children: [label && jsx(FormGroupLabel, Object.assign({}, labelOptions, {
        children: label
      })), description && jsx(StyledDescription, {
        "$direction": direction,
        id: `${id}-description`,
        children: description
      }), renderRadioGroup({
        direction,
        label,
        children
      }), hasError && jsx(Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })) : jsxs(Fragment, {
      children: [renderRadioGroup({
        direction,
        label,
        children
      }), hasError && jsx(Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })
  });
};
const RadioGroup = forwardRef((props, ref) => {
  const {
      children,
      name,
      selectedValue: valueProp,
      id: idProp,
      errorMessage,
      label,
      description,
      direction,
      onChange
    } = props,
    rest = __rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "description", "direction", "onChange"]);
  const renderRadioGroup = ({
    label,
    direction,
    children
  }) => {
    if (direction === 'horizontal') {
      return jsx("div", {
        role: "radiogroup",
        "aria-label": label,
        ref: ref,
        children: jsx(HorizontalRadioWrapper, {
          children: children
        })
      });
    }
    return jsx(StyledRadioGroup, {
      role: "radiogroup",
      "aria-label": label,
      ref: ref,
      children: children
    });
  };
  return jsx(RadioGroupBase, Object.assign({
    name: name,
    selectedValue: valueProp,
    id: idProp,
    errorMessage: errorMessage,
    label: label,
    description: description,
    onChange: onChange,
    renderRadioGroup: renderRadioGroup,
    direction: direction
  }, rest, {
    children: children
  }));
});

export { RadioGroup, RadioGroupBase, getDescId };
