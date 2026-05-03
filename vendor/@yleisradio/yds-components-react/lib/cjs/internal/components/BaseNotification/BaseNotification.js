'use strict';

var tslib_es6 = require('../../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var BaseNotification_styles = require('./BaseNotification.styles.js');
var ThemeProvider = require('../../../components/ThemeProvider/ThemeProvider.js');
var styledComponents = require('styled-components');
var ydsIconsReact = require('@yleisradio/yds-icons-react');

const getIcon = level => {
  switch (level) {
    case 'error':
      return jsxRuntime.jsx(ydsIconsReact.AlertTriangle, {});
    case 'warning':
      return jsxRuntime.jsx(ydsIconsReact.AlertCircle, {});
    case 'success':
      return jsxRuntime.jsx(ydsIconsReact.Check, {});
    default:
      return jsxRuntime.jsx(ydsIconsReact.Info, {});
  }
};
const BaseNotification = React.forwardRef((_a, ref) => {
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
    other = tslib_es6.__rest(_a, ["icon", "closeIcon", "closeText", "closeButtonAccessibleText", "title", "children", "actions", "hideIcon", "isMultiline", "onClose", "variant", "level", "ydsTheme", "notificationType", "contentContainer"]);
  const theme = styledComponents.useTheme();
  const defaultTheme = theme.ydsThemeName === 'custom' ? theme.yds : theme.ydsThemeName;
  return jsxRuntime.jsx(BaseNotification_styles.NotificationBase, Object.assign({
    ref: ref,
    "$level": level,
    "$variant": variant,
    "$notificationType": notificationType
  }, other, {
    children: jsxRuntime.jsx(ThemeProvider.YdsThemeProvider, {
      theme: ydsTheme !== null && ydsTheme !== void 0 ? ydsTheme : defaultTheme,
      children: jsxRuntime.jsx(ContentContainer, {
        children: jsxRuntime.jsxs(BaseNotification_styles.NotificationGrid, {
          "data-testid": "notification-grid",
          "$notificationType": notificationType,
          "$hasIcon": !hideIcon && !!icon,
          "$hasActions": !!actions,
          "$hasClose": !!onClose,
          children: [!hideIcon && icon && jsxRuntime.jsx(BaseNotification_styles.NotificationIcon, {
            "$notificationType": notificationType,
            children: icon
          }), jsxRuntime.jsx(BaseNotification_styles.NotificationContent, {
            children: jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [title && jsxRuntime.jsx(BaseNotification_styles.NotificationTitle, {
                "$isMultiline": isMultiline,
                "$hasChildren": !!children,
                children: title
              }), jsxRuntime.jsx(BaseNotification_styles.NotificationText, {
                "$isMultiline": isMultiline,
                children: children
              })]
            })
          }), onClose && jsxRuntime.jsx(BaseNotification_styles.NotificationCloseContainer, {
            "$notificationType": notificationType,
            children: jsxRuntime.jsx(BaseNotification_styles.NotificationCloseButton, {
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
          }), actions && jsxRuntime.jsx(BaseNotification_styles.NotificationActionsContainer, {
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

exports.BaseNotification = BaseNotification;
exports.getIcon = getIcon;
