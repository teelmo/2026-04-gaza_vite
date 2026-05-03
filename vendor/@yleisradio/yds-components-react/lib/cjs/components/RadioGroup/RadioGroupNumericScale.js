'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var RadioGroup = require('./RadioGroup.js');
var RadioGroups_styles = require('./RadioGroups.styles.js');

const RadioGroupNumericScale = React.forwardRef((props, ref) => {
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
    rest = tslib_es6.__rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "description", "startLabel", "endLabel", "direction", "onChange"]);
  const renderRadioGroupNumericScale = ({
    direction,
    label,
    children
  }) => {
    if (direction === 'horizontal') {
      return jsxRuntime.jsxs("div", {
        role: "radiogroup",
        "aria-label": label,
        children: [(startLabel || endLabel) && jsxRuntime.jsxs(RadioGroups_styles.HorizontalRadioLabelsWrapper, {
          children: [jsxRuntime.jsx(RadioGroups_styles.NumericScaleStartLabel, {
            id: `${idProp}-startlabel`,
            "$direction": direction,
            children: startLabel
          }), jsxRuntime.jsx(RadioGroups_styles.NumericScaleEndLabel, {
            id: `${idProp}-endlabel`,
            "$direction": direction,
            children: endLabel
          })]
        }), jsxRuntime.jsx(RadioGroups_styles.HorizontalRadioWrapper, {
          "$numeric": true,
          children: children
        })]
      });
    }
    return jsxRuntime.jsxs(RadioGroups_styles.StyledRadioGroup, {
      role: "radiogroup",
      "aria-label": label,
      ref: ref,
      children: [startLabel && jsxRuntime.jsx(RadioGroups_styles.NumericScaleStartLabel, {
        "$direction": direction,
        children: startLabel
      }), children, endLabel && jsxRuntime.jsx(RadioGroups_styles.NumericScaleEndLabel, {
        "$direction": direction,
        children: endLabel
      })]
    });
  };
  return jsxRuntime.jsx(RadioGroup.RadioGroupBase, Object.assign({
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

exports.RadioGroupNumericScale = RadioGroupNumericScale;
