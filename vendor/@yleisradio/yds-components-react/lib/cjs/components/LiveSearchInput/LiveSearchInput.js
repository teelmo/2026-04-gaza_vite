'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var TextInput = require('../TextInput/TextInput.js');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var generateId = require('../../internal/utils/generateId.js');

const LiveSearchInput = React.forwardRef((_a, ref) => {
  var {
      iconBefore,
      iconClear,
      hideIcon = false,
      value,
      id = generateId.generateId('live-search-input'),
      label,
      labelOptions = {
        isHidden: false
      },
      placeholder,
      autocomplete,
      isDisabled = false,
      isRequired = false,
      showLoadingIndicator = false,
      onChange,
      iconBeforeAriaLabel = 'Hae',
      iconClearAriaLabel = 'Tyhjennä'
    } = _a,
    rest = tslib_es6.__rest(_a, ["iconBefore", "iconClear", "hideIcon", "value", "id", "label", "labelOptions", "placeholder", "autocomplete", "isDisabled", "isRequired", "showLoadingIndicator", "onChange", "iconBeforeAriaLabel", "iconClearAriaLabel"]);
  const iconBeforeDefault = {
    componentFn: ydsIconsReact.Search,
    ariaLabel: iconBeforeAriaLabel
  };
  const iconClearDefault = {
    componentFn: ydsIconsReact.CloseSmall,
    ariaLabel: iconClearAriaLabel,
    onClick: () => {
      onChange({
        target: {
          value: ''
        },
        currentTarget: {
          value: ''
        }
      });
    }
  };
  return jsxRuntime.jsx(TextInput.TextInput, Object.assign({
    ref: ref,
    id: id,
    label: label,
    labelOptions: labelOptions,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    autoComplete: autocomplete,
    type: 'search',
    isDisabled: isDisabled,
    required: isRequired,
    "aria-disabled": isDisabled ? 'true' : undefined,
    iconBefore: hideIcon ? undefined : iconBefore || iconBeforeDefault,
    iconClear: value ? iconClear || iconClearDefault : undefined,
    showLoadingIndicator: showLoadingIndicator
  }, rest));
});

exports.LiveSearchInput = LiveSearchInput;
