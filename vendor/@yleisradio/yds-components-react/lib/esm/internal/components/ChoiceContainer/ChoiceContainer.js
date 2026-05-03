import { jsxs, jsx } from 'react/jsx-runtime';
import { ChoiceButtonContainer, ChoiceButtonHeader, ChoiceButtonIconContainer } from './ChoiceContainer.styles.js';

const ChoiceContainer = ({
  status = undefined,
  icon,
  content,
  containerSize = 'md',
  controlAlign = 'start',
  children
}) => {
  return jsxs(ChoiceButtonContainer, {
    "$status": status,
    children: [jsxs(ChoiceButtonHeader, {
      "$size": containerSize,
      "$controlAlign": controlAlign,
      children: [children, icon && jsx(ChoiceButtonIconContainer, {
        "$status": status,
        "$controlAlign": controlAlign,
        children: icon
      })]
    }), content && jsx("div", {
      children: content
    })]
  });
};

export { ChoiceContainer };
