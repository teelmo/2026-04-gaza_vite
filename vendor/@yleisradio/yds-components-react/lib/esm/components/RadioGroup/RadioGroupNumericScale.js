import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { RadioGroupBase } from './RadioGroup.js';
import { HorizontalRadioLabelsWrapper, NumericScaleStartLabel, NumericScaleEndLabel, HorizontalRadioWrapper, StyledRadioGroup } from './RadioGroups.styles.js';

const RadioGroupNumericScale = forwardRef((props, ref) => {
  const {
      children,
      name,
      selectedValue: valueProp,
      id: idProp,
      errorMessage,
      label,
      description,
      startLabel,
      endLabel,
      direction = 'vertical',
      onChange
    } = props,
    rest = __rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "description", "startLabel", "endLabel", "direction", "onChange"]);
  const renderRadioGroupNumericScale = ({
    direction,
    label,
    children
  }) => {
    if (direction === 'horizontal') {
      return jsxs("div", {
        role: "radiogroup",
        "aria-label": label,
        children: [(startLabel || endLabel) && jsxs(HorizontalRadioLabelsWrapper, {
          children: [jsx(NumericScaleStartLabel, {
            id: `${idProp}-startlabel`,
            "$direction": direction,
            children: startLabel
          }), jsx(NumericScaleEndLabel, {
            id: `${idProp}-endlabel`,
            "$direction": direction,
            children: endLabel
          })]
        }), jsx(HorizontalRadioWrapper, {
          "$numeric": true,
          children: children
        })]
      });
    }
    return jsxs(StyledRadioGroup, {
      role: "radiogroup",
      "aria-label": label,
      ref: ref,
      children: [startLabel && jsx(NumericScaleStartLabel, {
        "$direction": direction,
        children: startLabel
      }), children, endLabel && jsx(NumericScaleEndLabel, {
        "$direction": direction,
        children: endLabel
      })]
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
    renderRadioGroup: renderRadioGroupNumericScale,
    direction: direction
  }, rest, {
    children: children
  }));
});

export { RadioGroupNumericScale };
