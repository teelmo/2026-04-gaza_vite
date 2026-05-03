import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TextInput } from '../TextInput/TextInput.js';
import { Search } from '@yleisradio/yds-icons-react';
import { Spinner } from '../Spinner/Spinner.js';
import { SearchInputSubmit } from './SearchInput.styles.js';

const SearchSubmitButton = forwardRef((_a, ref) => {
  var {
      isDisabled = false,
      loading = false
    } = _a,
    other = __rest(_a, ["isDisabled", "loading"]);
  return jsx(SearchInputSubmit, Object.assign({
    "aria-disabled": isDisabled ? 'true' : undefined,
    ref: ref,
    "$location": "after",
    "$isDisabled": isDisabled,
    "aria-busy": loading ? 'true' : undefined
  }, other, {
    children: loading ? jsx(Spinner, {
      size: "sm"
    }) : jsx(Search, {})
  }));
});
/**
 * A generic search component with a label and optional error and description messages.
 * extra params are passed to the underlying input component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 * Uses submitButton prop for submit component, which can be filled with SearchSubmitButton from same package.
 *
 * @param {TextInputProps} props
 * @param {ReactNode} props.submitButton
 * */
const SearchInput = forwardRef((_a, ref) => {
  var {
      label,
      labelOptions = {
        isHidden: true
      },
      id,
      value,
      onChange,
      placeholder,
      iconBefore,
      iconClear,
      autocomplete,
      type = 'search',
      submitButton,
      isRequired = false,
      isDisabled = false,
      showLoadingIndicator = false
    } = _a,
    other = __rest(_a, ["label", "labelOptions", "id", "value", "onChange", "placeholder", "iconBefore", "iconClear", "autocomplete", "type", "submitButton", "isRequired", "isDisabled", "showLoadingIndicator"]);
  return jsx(TextInput, Object.assign({
    id: id,
    ref: ref,
    label: label,
    labelOptions: labelOptions,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    autoComplete: autocomplete,
    type: type,
    isDisabled: isDisabled,
    required: isRequired,
    "aria-disabled": isDisabled ? 'true' : undefined,
    "aria-labelledby": `${id}-label`,
    submitButton: submitButton,
    showLoadingIndicator: submitButton ? false : showLoadingIndicator,
    iconBefore: iconBefore,
    iconClear: iconClear
  }, other));
});

export { SearchInput, SearchSubmitButton };
