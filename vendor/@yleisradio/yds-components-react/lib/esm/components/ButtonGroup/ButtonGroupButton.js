import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Check16, Plus16 } from '@yleisradio/yds-icons-react';
import { useButtonGroupContext } from './ButtonGroupContext.js';
import { ButtonGroupButtonPrimary, ButtonGroupButtonSecondary } from './ButtonGroup.styles.js';

const buttonTypes = {
  primary: ButtonGroupButtonPrimary,
  secondary: ButtonGroupButtonSecondary
};
const ButtonGroupButton = _a => {
  var {
      id,
      onClick,
      children,
      isDisabled
    } = _a,
    props = __rest(_a, ["id", "onClick", "children", "isDisabled"]);
  const {
    activeButtons,
    toggleButton,
    variant,
    multiple,
    size,
    showIcon
  } = useButtonGroupContext();
  const StyledButton = buttonTypes[variant];
  const isButtonSelected = activeButtons.has(id);
  const defaultIcon = isButtonSelected ? jsx(Check16, {}) : jsx(Plus16, {});
  const IconBefore = props.iconBefore ? props.iconBefore : defaultIcon;
  return jsx(StyledButton, Object.assign({
    "$selected": isButtonSelected,
    "$isDisabled": isDisabled,
    isDisabled: isDisabled,
    onClick: e => {
      if (isDisabled) {
        return;
      }
      toggleButton(id);
      onClick === null || onClick === void 0 ? void 0 : onClick(e);
    },
    "aria-pressed": isButtonSelected,
    "$size": size,
    id: id
  }, props, {
    iconBefore: multiple && showIcon ? IconBefore : undefined,
    children: children
  }));
};

export { ButtonGroupButton };
