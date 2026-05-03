import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Close } from '@yleisradio/yds-icons-react';
import { BaseNotification, getIcon } from '../../internal/components/BaseNotification/BaseNotification.js';
import { useTheme } from 'styled-components';

const Notification = forwardRef((_a, ref) => {
  var {
      actions,
      children,
      hideIcon,
      isMultiline,
      level = 'info',
      onClose,
      title,
      variant = 'primary'
    } = _a,
    other = __rest(_a, ["actions", "children", "hideIcon", "isMultiline", "level", "onClose", "title", "variant"]);
  const theme = useTheme();
  const ydsTheme = theme.ydsThemeName === 'custom' ? theme.yds : theme.ydsThemeName;
  return jsx(BaseNotification, Object.assign({
    ref: ref,
    icon: getIcon(level),
    level: level,
    variant: variant,
    hideIcon: hideIcon,
    isMultiline: isMultiline,
    onClose: onClose,
    title: title,
    actions: actions,
    closeIcon: jsx(Close, {}),
    ydsTheme: variant === 'primary' || level !== 'info' && variant !== 'text' ? 'light' : ydsTheme,
    notificationType: "inline"
  }, other, {
    children: children
  }));
});

export { Notification };
