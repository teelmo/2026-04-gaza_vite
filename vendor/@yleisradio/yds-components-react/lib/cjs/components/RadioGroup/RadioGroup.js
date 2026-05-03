'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Message = require('../../internal/components/Message/Message.js');
var RadioGroupContext = require('./RadioGroupContext.js');
var RadioGroups_styles = require('./RadioGroups.styles.js');
var FormGroupLabel = require('../FormGroupLabel/FormGroupLabel.js');

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
    rest = tslib_es6.__rest(_a, ["children", "name", "selectedValue", "id", "errorMessage", "label", "labelOptions", "description", "direction", "onChange", "renderRadioGroup"]);
  const [value, setValueState] = React.useState(valueProp);
  const useFieldset = label || description;
  const hasError = Boolean(errorMessage);
  const id = idProp || `group-${name}`;
  React.useEffect(() => {
    setValueState(valueProp);
  }, [valueProp]);
  const handleChange = event => {
    setValueState(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  return jsxRuntime.jsx(RadioGroupContext.RadioGroupContext.Provider, {
    value: {
      name,
      onChange: handleChange,
      value,
      error: hasError,
      errorId: hasError ? `${id}-error` : undefined,
      descId: getDescId(id, description),
      direction: direction
    },
    children: useFieldset ? jsxRuntime.jsxs(RadioGroups_styles.StyledFieldset, Object.assign({}, rest, {
      children: [label && jsxRuntime.jsx(FormGroupLabel.FormGroupLabel, Object.assign({}, labelOptions, {
        children: label
      })), description && jsxRuntime.jsx(RadioGroups_styles.StyledDescription, {
        "$direction": direction,
        id: `${id}-description`,
        children: description
      }), renderRadioGroup({
        direction,
        label,
        children
      }), hasError && jsxRuntime.jsx(Message.Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [renderRadioGroup({
        direction,
        label,
        children
      }), hasError && jsxRuntime.jsx(Message.Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })
  });
};
const RadioGroup = React.forwardRef((props, ref) => {
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
    rest = tslib_es6.__rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "description", "direction", "onChange"]);
  const renderRadioGroup = ({
    label,
    direction,
    children
  }) => {
    if (direction === 'horizontal') {
      return jsxRuntime.jsx("div", {
        role: "radiogroup",
        "aria-label": label,
        ref: ref,
        children: jsxRuntime.jsx(RadioGroups_styles.HorizontalRadioWrapper, {
          children: children
        })
      });
    }
    return jsxRuntime.jsx(RadioGroups_styles.StyledRadioGroup, {
      role: "radiogroup",
      "aria-label": label,
      ref: ref,
      children: children
    });
  };
  return jsxRuntime.jsx(RadioGroupBase, Object.assign({
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

exports.RadioGroup = RadioGroup;
exports.RadioGroupBase = RadioGroupBase;
exports.getDescId = getDescId;
