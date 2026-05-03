import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TextInput } from '../TextInput/TextInput.js';
import { Search, CloseSmall } from '@yleisradio/yds-icons-react';
import { generateId } from '../../internal/utils/generateId.js';

const LiveSearchInput = forwardRef((_a, ref) => {
  var {
      iconBefore,
      iconClear,
      hideIcon = false,
      value,
      id = generateId('live-search-input'),
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
    rest = __rest(_a, ["iconBefore", "iconClear", "hideIcon", "value", "id", "label", "labelOptions", "placeholder", "autocomplete", "isDisabled", "isRequired", "showLoadingIndicator", "onChange", "iconBeforeAriaLabel", "iconClearAriaLabel"]);
  const iconBeforeDefault = {
    componentFn: Search,
    ariaLabel: iconBeforeAriaLabel
  };
  const iconClearDefault = {
    componentFn: CloseSmall,
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
  return jsx(TextInput, Object.assign({
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

export { LiveSearchInput };
