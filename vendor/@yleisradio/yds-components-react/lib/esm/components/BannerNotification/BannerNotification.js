import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { Close } from '@yleisradio/yds-icons-react';
import { BaseNotification, getIcon } from '../../internal/components/BaseNotification/BaseNotification.js';

const BannerNotification = forwardRef((_a, ref) => {
  var {
      actions,
      children,
      hideIcon,
      level = 'info',
      onClose,
      title,
      contentContainer
    } = _a,
    other = __rest(_a, ["actions", "children", "hideIcon", "level", "onClose", "title", "contentContainer"]);
  return jsx(BaseNotification, Object.assign({
    ref: ref,
    icon: getIcon(level),
    level: level,
    variant: "primary",
    hideIcon: hideIcon,
    isMultiline: false,
    onClose: onClose,
    title: title,
    actions: actions,
    closeIcon: jsx(Close, {}),
    ydsTheme: "light",
    notificationType: "banner",
    contentContainer: contentContainer
  }, other, {
    children: children
  }));
});

export { BannerNotification };
