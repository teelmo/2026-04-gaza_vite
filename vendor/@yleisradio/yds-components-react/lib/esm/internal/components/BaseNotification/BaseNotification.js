import { __rest } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { forwardRef } from 'react';
import { NotificationBase, NotificationGrid, NotificationIcon, NotificationContent, NotificationTitle, NotificationText, NotificationCloseContainer, NotificationCloseButton, NotificationActionsContainer } from './BaseNotification.styles.js';
import { YdsThemeProvider } from '../../../components/ThemeProvider/ThemeProvider.js';
import { useTheme } from 'styled-components';
import { Info, Check, AlertCircle, AlertTriangle } from '@yleisradio/yds-icons-react';

const getIcon = level => {
  switch (level) {
    case 'error':
      return jsx(AlertTriangle, {});
    case 'warning':
      return jsx(AlertCircle, {});
    case 'success':
      return jsx(Check, {});
    default:
      return jsx(Info, {});
  }
};
const BaseNotification = forwardRef((_a, ref) => {
  var {
      icon,
      closeIcon,
      closeText,
      closeButtonAccessibleText = 'Sulje',
      title,
      children,
      actions,
      hideIcon,
      isMultiline,
      onClose,
      variant = 'primary',
      level = 'info',
      ydsTheme,
      notificationType,
      contentContainer: ContentContainer = React.Fragment
    } = _a,
    other = __rest(_a, ["icon", "closeIcon", "closeText", "closeButtonAccessibleText", "title", "children", "actions", "hideIcon", "isMultiline", "onClose", "variant", "level", "ydsTheme", "notificationType", "contentContainer"]);
  const theme = useTheme();
  const defaultTheme = theme.ydsThemeName === 'custom' ? theme.yds : theme.ydsThemeName;
  return jsx(NotificationBase, Object.assign({
    ref: ref,
    "$level": level,
    "$variant": variant,
    "$notificationType": notificationType
  }, other, {
    children: jsx(YdsThemeProvider, {
      theme: ydsTheme !== null && ydsTheme !== void 0 ? ydsTheme : defaultTheme,
      children: jsx(ContentContainer, {
        children: jsxs(NotificationGrid, {
          "data-testid": "notification-grid",
          "$notificationType": notificationType,
          "$hasIcon": !hideIcon && !!icon,
          "$hasActions": !!actions,
          "$hasClose": !!onClose,
          children: [!hideIcon && icon && jsx(NotificationIcon, {
            "$notificationType": notificationType,
            children: icon
          }), jsx(NotificationContent, {
            children: jsxs(Fragment, {
              children: [title && jsx(NotificationTitle, {
                "$isMultiline": isMultiline,
                "$hasChildren": !!children,
                children: title
              }), jsx(NotificationText, {
                "$isMultiline": isMultiline,
                children: children
              })]
            })
          }), onClose && jsx(NotificationCloseContainer, {
            "$notificationType": notificationType,
            children: jsx(NotificationCloseButton, {
              "$level": level,
              "$notificationType": notificationType,
              "$notificationVariant": variant,
              accessibleText: closeButtonAccessibleText,
              onClick: onClose,
              variant: "text",
              size: "md",
              iconBefore: closeIcon,
              text: !closeIcon && closeText,
              iconOnly: true,
              removePadding: true
            })
          }), actions && jsx(NotificationActionsContainer, {
            "$level": level,
            "$notificationVariant": variant,
            "$notificationType": notificationType,
            children: actions
          })]
        })
      })
    })
  }));
});

export { BaseNotification, getIcon };
