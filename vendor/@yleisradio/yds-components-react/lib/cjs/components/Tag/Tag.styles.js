'use strict';

var styledComponents = require('styled-components');
var ydsCore = require('@yleisradio/yds-core');
var font = require('../../helpers/font.js');

const isTextTransform = value => ['capitalize', 'full-size-kana', 'full-width', 'lowercase', 'uppercase', 'none'].includes(value);
const getTextTransform = typographyToken => typeof typographyToken === 'string' && isTextTransform(typographyToken) ? typographyToken : undefined;
const glow = styledComponents.keyframes`
  0% {
    transform: scaleX(1);
    opacity: 0;
  }
  42% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleY(1.6) scaleX(1.3);
    opacity: 0;
  }
`;
const getBackgroundColor = ({
  theme,
  variant
}) => {
  switch (variant) {
    case 'live':
    case 'rightnow':
    case 'online':
    case 'chat':
      return theme.TAG_LIVE;
    case 'opinion':
      return theme.TAG_OPINION;
    case 'ylecorporate':
      return theme.TAG_YLE_CORPORATE;
    case 'neutral':
      return theme.TAG_NEUTRAL;
    case 'default':
    default:
      return theme.ACTION_PRIMARY;
  }
};
const getTextColor = ({
  theme,
  variant
}) => {
  switch (variant) {
    case 'live':
    case 'rightnow':
    case 'online':
    case 'chat':
      return theme.TEXT_FEEDBACK_LIVE;
    case 'opinion':
    case 'ylecorporate':
      return theme.TEXT_LIGHT_HIGH_CONTRAST;
    case 'neutral':
      return theme.TEXT_DEFAULT;
    case 'default':
    default:
      return theme.TEXT_NEGATIVE;
  }
};
const AnimatedTag = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-13ensuq-0"
})(["@media (prefers-reduced-motion:no-preference){&::before{position:absolute;inset:5px;border-radius:2px;box-shadow:", ";animation:2.4s cubic-bezier(0.455,0.03,0.515,0.955) 0s infinite normal none running ", ";}}"], ({
  $variant,
  theme
}) => `0 0 1px 5px
      ${getBackgroundColor({
  theme: theme.yds,
  variant: $variant
})}`, glow);
const TagBase = styledComponents.styled(AnimatedTag).withConfig({
  componentId: "ydscr__sc-13ensuq-1"
})(({
  theme,
  $size,
  $variant,
  $preventTransformUppercase,
  $animate
}) => Object.assign(Object.assign({
  display: 'inline-block',
  backgroundColor: getBackgroundColor({
    theme: theme.yds,
    variant: $variant
  }),
  color: getTextColor({
    theme: theme.yds,
    variant: $variant
  })
}, font.fontStylesAsObject({
  theme,
  size: 'xs',
  modifier: font.FontStyleModifier.BOLD_AC
})), {
  textTransform: $preventTransformUppercase ? 'none' : getTextTransform(ydsCore.typography.DEFAULT_XS_BOLD_AC_TEXT_CASE),
  borderRadius: ydsCore.radius.MEDIUM,
  padding: $size === 'sm' ? '1px 8px' : '3px 8px',
  maxHeight: $size === 'sm' ? 'calc(1.5em + 2px)' : 'calc(1.5em + 6px)',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  /* This is needed to allow animation glow overflowing from Live tag */
  overflow: $variant === 'live' && $animate === true ? 'visible' : 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: $variant === 'live' && $animate === true ? '""' : ''
  }
}));

exports.AnimatedTag = AnimatedTag;
exports.TagBase = TagBase;
