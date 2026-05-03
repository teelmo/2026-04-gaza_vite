import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef, useState, useCallback } from 'react';
import { FormElementLabel } from '../FormElementLabel/FormElementLabel.js';
import { TextareaFieldset, StyledTextarea, TextareaErrorMessage, DescriptionContainer, TextareaDescription, CharacterCounter } from './Textarea.styles.js';

/**
 * A textarea component with a label and optional error and description messages.
 * extra params are passed to the underlying textarea component as-is, except for `aria-disabled`, which
 * is controlled by `isDisabled` and `aria-labelled-by`, which is generated from `id`.
 *
 * @param {TextareaProps} props
 * */
const Textarea = forwardRef((_a, ref) => {
  var _b, _c;
  var {
      label,
      labelOptions = {},
      id,
      value,
      defaultValue,
      onChange,
      placeholder,
      rows,
      description,
      errorMessage,
      success = false,
      isDisabled = false,
      characterLimit
    } = _a,
    other = __rest(_a, ["label", "labelOptions", "id", "value", "defaultValue", "onChange", "placeholder", "rows", "description", "errorMessage", "success", "isDisabled", "characterLimit"]);
  const [internalCharCount, setInternalCharCount] = useState((_b = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.length) !== null && _b !== void 0 ? _b : 0);
  const isControlled = value !== undefined;
  const handleChange = useCallback(e => {
    if (!isControlled) {
      setInternalCharCount(e.target.value.length);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  }, [isControlled, onChange]);
  const characterCount = isControlled ? (_c = value === null || value === void 0 ? void 0 : value.length) !== null && _c !== void 0 ? _c : 0 : internalCharCount;
  return jsxs(TextareaFieldset, {
    children: [jsx(FormElementLabel, Object.assign({
      htmlFor: id,
      id: `${id}-label`,
      isDisabled: isDisabled
    }, labelOptions, {
      children: label
    })), jsx(StyledTextarea, Object.assign({
      id: id,
      ref: ref,
      value: value,
      defaultValue: defaultValue,
      onChange: handleChange,
      placeholder: placeholder,
      rows: rows,
      "$error": Boolean(errorMessage),
      "$success": !errorMessage && success,
      disabled: isDisabled,
      "aria-disabled": isDisabled ? 'true' : undefined,
      "aria-labelledby": `${id}-label`,
      "aria-describedby": [errorMessage && `${id}-error`, description && `${id}-description`, characterLimit && `${id}-counter`].filter(Boolean).join(' ') || undefined,
      "aria-invalid": Boolean(errorMessage),
      "aria-errormessage": errorMessage ? `${id}-error` : undefined,
      "aria-multiline": "true",
      maxLength: characterLimit
    }, other)), Boolean(errorMessage) && jsx(TextareaErrorMessage, {
      id: `${id}-error`,
      role: "alert",
      "aria-live": "assertive",
      children: errorMessage
    }), Boolean(description || characterLimit) && jsxs(DescriptionContainer, {
      children: [Boolean(description) && jsx(TextareaDescription, {
        id: `${id}-description`,
        children: description
      }), Boolean(characterLimit) && jsxs(CharacterCounter, {
        id: `${id}-counter`,
        children: [characterCount, " / ", characterLimit]
      })]
    })]
  });
});

export { Textarea };
