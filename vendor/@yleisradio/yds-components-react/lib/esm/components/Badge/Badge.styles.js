import { styled } from 'styled-components';
import { typography, radius } from '@yleisradio/yds-core';
import { ydsThemeUnit } from '../../helpers/ydsThemeUnit.js';

const getBackgroundColor = ({
  theme,
  color
}) => {
  switch (color) {
    case 'highlight':
      return theme.TAG_LIVE;
    case 'negative':
      return theme.BACKGROUND;
    case 'default':
    default:
      return theme.ACTION_PRIMARY;
  }
};
const getBorderColor = ({
  theme,
  color
}) => {
  switch (color) {
    case 'negative':
      return theme.BORDER;
    case 'default':
    case 'highlight':
    default:
      return theme.BORDER_NEGATIVE;
  }
};
const getTextColor = ({
  theme,
  color
}) => {
  switch (color) {
    case 'highlight':
      return theme.TEXT_FEEDBACK_LIVE;
    case 'negative':
      return theme.TEXT_DEFAULT;
    case 'default':
    default:
      return theme.TEXT_NEGATIVE;
  }
};
const getSize = ({
  size
}) => {
  switch (size) {
    case 'sm':
      return '6px';
    case 'md':
      return '8px';
    case 'lg':
      return '16px';
    case 'xl':
      return '24px';
    default:
      return '16px';
  }
};
const BadgeBase = styled('span').withConfig({
  componentId: "ydscr__sc-1ltz9tt-0"
})(({
  theme,
  $size,
  $color,
  $variant
}) => ({
  display: 'inline-flex',
  backgroundColor: getBackgroundColor({
    theme: theme.yds,
    color: $color
  }),
  color: getTextColor({
    theme: theme.yds,
    color: $color
  }),
  fontFamily: `"${typography.DEFAULT_XS_BOLD_AC_FONT_FAMILY}", "Open Sans", sans-serif`,
  fontWeight: typography.DEFAULT_XS_BOLD_AC_FONT_WEIGHT,
  fontSize: $size === 'xl' ? ydsThemeUnit('14px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : $size === 'lg' ? ydsThemeUnit('11px', theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit) : 0,
  fontStyle: typography.DEFAULT_XS_BOLD_AC_FONT_STYLE,
  lineHeight: 1,
  borderRadius: radius.FULL,
  minWidth: ydsThemeUnit(getSize({
    size: $size
  }), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  border: $variant === 'secondary' && ($size === 'xl' || $size === 'lg') ? `2px solid ${getBorderColor({
    theme: theme.yds,
    color: $color
  })}` : 'none',
  height: ydsThemeUnit(getSize({
    size: $size
  }), theme.ydsThemeProps.unit, theme.ydsThemeProps.baseUnit),
  padding: $size === 'xl' && $variant === 'primary' ? '0 6px' : $size === 'lg' && $variant === 'primary' || $size === 'xl' && $variant === 'secondary' ? '0 4px' : $size === 'lg' && $variant === 'secondary' ? '0 2px' : '0',
  alignItems: 'center',
  justifyContent: 'center'
}));

export { BadgeBase };
