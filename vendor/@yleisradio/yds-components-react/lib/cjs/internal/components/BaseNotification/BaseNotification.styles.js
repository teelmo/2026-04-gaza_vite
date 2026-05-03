'use strict';

var styledComponents = require('styled-components');
var Button = require('../../../components/Button/Button.js');
var font = require('../../../helpers/font.js');
var ydsThemeUnit = require('../../../helpers/ydsThemeUnit.js');

const backgroundColor = ({
  variant,
  level,
  theme
}) => {
  var _a, _b;
  const backgroundColorMap = {
    info: {
      primary: theme.BACKGROUND_INFO_PRIMARY,
      secondary: theme.BACKGROUND_INFO_SECONDARY,
      text: 'transparent'
    },
    success: {
      primary: theme.BACKGROUND_SUCCESS,
      secondary: theme.BACKGROUND_SUCCESS,
      text: 'transparent'
    },
    warning: {
      primary: theme.BACKGROUND_WARNING,
      secondary: theme.BACKGROUND_WARNING,
      text: 'transparent'
    },
    error: {
      primary: theme.BACKGROUND_ERROR,
      secondary: theme.BACKGROUND_ERROR,
      text: 'transparent'
    }
  };
  return (_b = (_a = backgroundColorMap[level]) === null || _a === void 0 ? void 0 : _a[variant]) !== null && _b !== void 0 ? _b : 'transparent';
};
const getColor = ({
  theme,
  level,
  variant
}) => {
  var _a, _b;
  const colorMap = {
    info: {
      primary: theme.TEXT_DARK,
      secondary: theme.TEXT_DEFAULT,
      text: theme.TEXT_DEFAULT
    },
    success: {
      primary: theme.TEXT_DARK,
      secondary: theme.TEXT_DARK,
      text: theme.TEXT_DEFAULT
    },
    warning: {
      primary: theme.TEXT_DARK,
      secondary: theme.TEXT_DARK,
      text: theme.TEXT_DEFAULT
    },
    error: {
      primary: theme.TEXT_DARK,
      secondary: theme.TEXT_DARK,
      text: theme.TEXT_DEFAULT
    }
  };
  return (_b = (_a = colorMap[level]) === null || _a === void 0 ? void 0 : _a[variant]) !== null && _b !== void 0 ? _b : theme.TEXT_DARK;
};
const getInlineGridLayout = (hasIcon, hasActions, hasClose) => {
  const columns = [];
  const areasRow1 = [];
  const areasRow2 = [];
  // handle icon positioning
  if (hasIcon) {
    columns.push('auto');
    areasRow1.push('icon');
  }
  // content is always present
  columns.push('1fr');
  areasRow1.push('content');
  // handle close button positioning
  if (hasClose) {
    columns.push('auto');
    areasRow1.push('close');
  }
  // handle actions positioning
  if (hasActions) {
    if (hasIcon) {
      areasRow2.push('.');
    }
    if (hasClose) {
      areasRow2.push('.');
    }
    areasRow2.push('actions');
  }
  const columnsString = columns.join(' ');
  let areasString = `'${areasRow1.filter(Boolean).join(' ')}'`;
  if (areasRow2.length > 0) {
    areasString = areasString.concat(`\n'${areasRow2.filter(Boolean).join(' ')}'`);
  }
  return styledComponents.css`
    grid-template-areas: ${areasString};
    grid-template-columns: ${columnsString};
  `;
};
const getBannerGridLayout = (hasIcon, hasActions, hasClose) => {
  const desktopAreas = [];
  const columns = [];
  const mobileAreasRow1 = [];
  const mobileAreasRow2 = [];
  // handle icon positioning
  if (hasIcon) {
    columns.push('auto');
    desktopAreas.push('icon');
    mobileAreasRow1[0] = 'icon';
    if (hasActions) {
      mobileAreasRow2[0] = '.';
    }
  }
  // content is always present
  columns.push('1fr');
  desktopAreas.push('content');
  mobileAreasRow1[1] = 'content';
  // handle actions positioning
  if (hasActions) {
    columns.push('auto');
    desktopAreas.push('actions');
    mobileAreasRow2[1] = 'actions';
  }
  // handle close button positioning
  if (hasClose) {
    columns.push('auto');
    desktopAreas.push('close');
    mobileAreasRow1[2] = 'close';
    if (hasActions) {
      mobileAreasRow2[2] = 'close';
    }
  }
  const desktopAreasString = `'${desktopAreas.join(' ')}'`;
  const columnsString = columns.join(' ');
  let mobileAreasString = `'${mobileAreasRow1.filter(Boolean).join(' ')}'`;
  if (mobileAreasRow2.length > 0) {
    mobileAreasString = mobileAreasString.concat(`\n'${mobileAreasRow2.filter(Boolean).join(' ')}'`);
  }
  return styledComponents.css`
    grid-template-areas: ${mobileAreasString};
    grid-template-columns: ${columnsString};

    @container (min-width: 768px) {
      grid-template-areas: ${desktopAreasString};
      grid-template-columns: ${columnsString};
    }
  `;
};
const getToastGridLayout = (hasIcon, hasClose) => {
  if (hasIcon && hasClose) {
    return styledComponents.css`
      grid-template-areas: 'icon content close';
      grid-template-columns: auto 1fr auto;
    `;
  }
  if (hasIcon && !hasClose) {
    return styledComponents.css`
      grid-template-areas: 'icon content';
      grid-template-columns: auto 1fr;
    `;
  }
  if (!hasIcon && hasClose) {
    return styledComponents.css`
      grid-template-areas: 'content close';

      grid-template-columns: 1fr auto;
    `;
  }
  return styledComponents.css`
    grid-template-areas: 'content';
    grid-template-columns: 1fr;
  `;
};
const getGridLayout = (notificationType, hasIcon, hasActions, hasClose) => {
  if (notificationType === 'inline') {
    return getInlineGridLayout(hasIcon, hasActions, hasClose);
  }
  if (notificationType === 'banner') {
    return getBannerGridLayout(hasIcon, hasActions, hasClose);
  }
  if (notificationType === 'toast') {
    return getToastGridLayout(hasIcon, hasClose);
  }
};
const NotificationBase = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-0"
})(["border-radius:8px;background-color:", ";", " padding:16px;color:", ";", ""], ({
  theme,
  $level,
  $variant
}) => backgroundColor({
  level: $level,
  variant: $variant,
  theme: theme.yds
}), ({
  theme
}) => font.fontStyles({
  theme,
  size: 'sm'
}), ({
  theme,
  $level,
  $variant
}) => getColor({
  level: $level,
  variant: $variant,
  theme: theme.yds
}), ({
  $notificationType
}) => $notificationType === 'banner' ? styledComponents.css`
          container-type: inline-size;
          display: grid;
          align-items: center;
          min-height: 64px;
          border-radius: 0;
        ` : '');
const NotificationGrid = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-1"
})(["display:grid;", " grid-column-gap:12px;grid-row-gap:", ";"], ({
  $notificationType,
  $hasIcon,
  $hasActions,
  $hasClose
}) => getGridLayout($notificationType, $hasIcon, $hasActions, $hasClose), ({
  $notificationType
}) => $notificationType === 'banner' ? '16px' : '20px');
const NotificationTitle = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-2"
})(["display:", ";font-weight:700;margin-right:", ";"], ({
  $isMultiline
}) => $isMultiline ? 'block' : 'inline-block', ({
  $isMultiline,
  $hasChildren
}) => !$isMultiline && $hasChildren ? '5px' : 0);
const NotificationContent = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-3"
})(["grid-area:content;align-self:center;"]);
const NotificationText = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-4"
})(["display:", ";"], ({
  $isMultiline
}) => $isMultiline ? 'block' : 'inline-block');
const NotificationIcon = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-5"
})(["grid-area:icon;align-self:start;& svg{width:", ";height:", ";display:block;}", ""], ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('24px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  theme
}) => ydsThemeUnit.ydsThemeUnit('24px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit), ({
  $notificationType
}) => $notificationType === 'banner' ? styledComponents.css`
          @container (min-width: 768px) {
            min-height: 32px;
            padding: 4px 0;
          }
        ` : '');
const NotificationCloseContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-6"
})(["grid-area:close;justify-self:end;align-self:", ";display:flex;height:", ";min-height:24px;"], ({
  $notificationType
}) => $notificationType === 'toast' ? 'center' : 'start', ({
  $notificationType
}) => $notificationType === 'banner' ? '100%' : 'auto');
const NotificationCloseButton = styledComponents.styled(Button.Button).withConfig({
  componentId: "ydscr__sc-ogfirk-7"
})(["border:none;min-height:0;min-width:0;padding-top:0;padding-bottom:0;color:", ";&:focus{outline-color:", ";}"], ({
  theme,
  $level,
  $notificationVariant
}) => getColor({
  level: $level,
  variant: $notificationVariant,
  theme: theme.yds
}), ({
  theme,
  $level,
  $notificationVariant
}) => $notificationVariant !== 'text' ? getColor({
  level: $level,
  variant: $notificationVariant,
  theme: theme.yds
}) : '');
const NotificationActionsContainer = styledComponents.styled.div.withConfig({
  componentId: "ydscr__sc-ogfirk-8"
})(["grid-area:actions;display:flex;flex-direction:row;justify-content:", ";& button:focus{outline-color:", ";}@container (min-width:768px){justify-content:flex-end;align-self:center;}"], ({
  $notificationType
}) => $notificationType === 'banner' ? 'flex-start' : 'flex-end', ({
  theme,
  $level,
  $notificationVariant
}) => $notificationVariant !== 'text' ? getColor({
  level: $level,
  variant: $notificationVariant,
  theme: theme.yds
}) : '');

exports.NotificationActionsContainer = NotificationActionsContainer;
exports.NotificationBase = NotificationBase;
exports.NotificationCloseButton = NotificationCloseButton;
exports.NotificationCloseContainer = NotificationCloseContainer;
exports.NotificationContent = NotificationContent;
exports.NotificationGrid = NotificationGrid;
exports.NotificationIcon = NotificationIcon;
exports.NotificationText = NotificationText;
exports.NotificationTitle = NotificationTitle;
