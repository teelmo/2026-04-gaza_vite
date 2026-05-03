'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Message = require('../../internal/components/Message/Message.js');
var CheckboxGroupContext = require('./CheckboxGroupContext.js');
var CheckboxGroup_styles = require('./CheckboxGroup.styles.js');
var FormGroupLabel = require('../FormGroupLabel/FormGroupLabel.js');

const CheckboxGroup = React.forwardRef((props, ref) => {
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
    rest = tslib_es6.__rest(props, ["children", "name", "selectedValue", "id", "errorMessage", "label", "labelOptions", "description", "onValueChange"]);
  const [value, setValueState] = React.useState(valueProp || []);
  const useFieldset = label || description;
  const hasError = Boolean(errorMessage);
  const id = idProp || `group-${name}`;
  React.useEffect(() => {
    setValueState(valueProp);
  }, [valueProp]);
  React.useEffect(() => {
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
  const renderCheckboxGroup = () => jsxRuntime.jsx(CheckboxGroup_styles.StyledCheckboxGroup, {
    "aria-label": label,
    ref: ref,
    children: children
  });
  return jsxRuntime.jsx(CheckboxGroupContext.CheckboxGroupContext.Provider, {
    value: {
      name,
      onChange: handleChange,
      value,
      error: hasError,
      errorId: hasError ? `${id}-error` : undefined,
      descId: description ? `${id}-description` : undefined
    },
    children: useFieldset ? jsxRuntime.jsxs(CheckboxGroup_styles.StyledFieldset, Object.assign({}, rest, {
      children: [label && jsxRuntime.jsx(FormGroupLabel.FormGroupLabel, Object.assign({}, labelOptions, {
        children: label
      })), description && jsxRuntime.jsx(CheckboxGroup_styles.StyledDescription, {
        id: `${id}-description`,
        children: description
      }), renderCheckboxGroup(), hasError && jsxRuntime.jsx(Message.Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })) : jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [renderCheckboxGroup(), hasError && jsxRuntime.jsx(Message.Message, {
        id: `${id}-error`,
        "$error": true,
        role: "alert",
        "aria-live": "assertive",
        children: errorMessage
      })]
    })
  });
});

exports.CheckboxGroup = CheckboxGroup;
