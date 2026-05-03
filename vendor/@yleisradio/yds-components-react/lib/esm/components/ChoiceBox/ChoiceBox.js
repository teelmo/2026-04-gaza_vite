import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { ChoiceContainer } from '../../internal/components/ChoiceContainer/ChoiceContainer.js';
import { ChoiceBoxCheckbox } from './ChoiceBox.styles.js';

const ChoiceBox = forwardRef((_a, ref) => {
  var {
      status = undefined,
      icon,
      containerSize = undefined,
      controlAlign = undefined,
      content
    } = _a,
    args = __rest(_a, ["status", "icon", "containerSize", "controlAlign", "content"]);
  return jsx(ChoiceContainer, {
    status: status,
    content: content,
    icon: icon,
    containerSize: containerSize,
    controlAlign: controlAlign,
    children: jsx(ChoiceBoxCheckbox, Object.assign({
      ref: ref,
      useUnderlay: true,
      controlAlign: controlAlign
    }, args))
  });
});

export { ChoiceBox };
