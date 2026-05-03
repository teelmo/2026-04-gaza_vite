import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { ChoiceContainer } from '../../internal/components/ChoiceContainer/ChoiceContainer.js';
import { ChoiceButtonRadio } from './ChoiceButton.styles.js';

const ChoiceButton = forwardRef((_a, ref) => {
  var {
      status = undefined,
      icon,
      controlAlign = undefined,
      containerSize = undefined,
      content
    } = _a,
    args = __rest(_a, ["status", "icon", "controlAlign", "containerSize", "content"]);
  return jsx(ChoiceContainer, {
    status: status,
    content: content,
    containerSize: containerSize,
    icon: icon,
    controlAlign: controlAlign,
    children: jsx(ChoiceButtonRadio, Object.assign({
      ref: ref,
      useUnderlay: true,
      controlAlign: controlAlign
    }, args))
  });
});

export { ChoiceButton };
