'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const getBackgroundColor = (theme, variant) => {
  switch (variant) {
    case 'text':
      return 'transparent';
    case 'secondary':
      return theme.TAG_SECONDARY_ACTION;
    case 'primary':
    default:
      return theme.TAG_PRIMARY_ACTION;
  }
};
const getHoverBackgroundColor = (theme, variant, removePadding) => {
  if (removePadding) {
    return getBackgroundColor(theme, variant);
  }
  switch (variant) {
    case 'text':
      return theme.TAG_SECONDARY_ACTION_VARIANT;
    case 'secondary':
      return theme.TAG_SECONDARY_ACTION_VARIANT;
    case 'primary':
    default:
      return theme.TAG_PRIMARY_ACTION_VARIANT;
  }
};
const getTextColor = (theme, variant) => {
  switch (variant) {
    case 'text':
      return theme.TEXT_DEFAULT;
    case 'secondary':
      return theme.TEXT_DEFAULT;
    case 'primary':
    default:
      return theme.TEXT_NEGATIVE;
  }
};
const getTagLinkBaseStyles = ({
  theme,
  $variant,
  $removePadding,
  $numberOfLines
}) => Object.assign(Object.assign({
  display: $numberOfLines && $numberOfLines > 0 ? '-webkit-inline-box' : 'inline-block',
  backgroundColor: getBackgroundColor(theme.yds, $variant),
  color: getTextColor(theme.yds, $variant),
  padding: $removePadding && $variant === 'text' ? 0 : '3px 12px 3px',
  '-webkit-tap-highlight-color': 'transparent',
  borderRadius: $removePadding && $variant === 'text' ? ydsCore.radius.SMALL : ydsCore.radius.FULL
}, font.fontStylesAsObject({
  theme,
  size: 'xs',
  modifier: font.FontStyleModifier.BOLD_AC
})), {
  letterSpacing: ydsCore.typography.DEFAULT_XS_BOLD_LETTER_SPACING,
  textDecoration: 'none',
  '-webkit-line-clamp': $numberOfLines > 0 ? `${$numberOfLines}` : '',
  '-webkit-box-orient': $numberOfLines > 0 ? 'vertical' : '',
  overflow: 'hidden'
});
const TagLinkBase = styledComponents.styled.a.withConfig({
  componentId: "ydscr__sc-w5hh4y-0"
})(({
  theme,
  $variant,
  $removePadding,
  $numberOfLines
}) => Object.assign(Object.assign({}, getTagLinkBaseStyles({
  theme,
  $variant,
  $removePadding,
  $numberOfLines
})), {
  /* types were breaking if this is on the base */
  wordBreak: $numberOfLines === 1 ? 'break-all' : 'initial',
  '&:hover': {
    backgroundColor: getHoverBackgroundColor(theme.yds, $variant, $removePadding)
  },
  '@supports selector(:focus-visible)': {
    '&:focus': {
      outline: 'none'
    },
    '&:focus-visible': {
      outline: `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`,
      outlineOffset: '2px',
      borderRadius: $removePadding && $variant === 'text' ? ydsCore.radius.SMALL : ydsCore.radius.FULL
    }
  }
}));
const TagLinkBaseNonInteractive = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-w5hh4y-1"
})(({
  theme,
  $variant,
  $removePadding,
  $numberOfLines
}) => Object.assign(Object.assign({}, getTagLinkBaseStyles({
  theme,
  $variant,
  $removePadding,
  $numberOfLines
})), {
  wordBreak: $numberOfLines === 1 ? 'break-all' : 'initial'
}));

exports.TagLinkBase = TagLinkBase;
exports.TagLinkBaseNonInteractive = TagLinkBaseNonInteractive;
