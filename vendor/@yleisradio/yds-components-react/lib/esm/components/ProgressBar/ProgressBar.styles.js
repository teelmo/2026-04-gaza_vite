import { keyframes, css, styled } from 'styled-components';
import { spacing, radius } from '@yleisradio/yds-core';
import { fontStylesAsObject, FontStyleModifier } from '../../helpers/font.js';

const getIndicatorColor = ({
  theme,
  status,
  isIndeterminate
}) => {
  if (isIndeterminate) {
    return theme.SPINNER_BACKGROUND_DEFAULT;
  }
  switch (status) {
    case 'success':
      return theme.FEEDBACK_SUCCESS;
    case 'error':
      return theme.SPINNER_ERROR;
    default:
      return theme.SPINNER_HIGHLIGHT_DEFAULT;
  }
};
const stripeMove = keyframes(["0%{background-position:0 0;}100%{background-position:24px 0;}"]);
const indeterminateAnimation = css(["", " 0.6s linear infinite"], stripeMove);
const ProgressBarWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-18fglbh-0"
})({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.SPACING_8,
  width: '100%'
});
const LabelWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-18fglbh-1"
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: spacing.SPACING_12
});
const LabelText = styled.span.withConfig({
  componentId: "ydscr__sc-18fglbh-2"
})(({
  theme
}) => Object.assign({
  flex: 1,
  color: theme.yds.TEXT_DEFAULT
}, fontStylesAsObject({
  theme,
  size: 'md',
  modifier: FontStyleModifier.BOLD
})));
const StatusIcon = styled.span.withConfig({
  componentId: "ydscr__sc-18fglbh-3"
})(({
  theme,
  $status
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  color: $status === 'success' ? theme.yds.FEEDBACK_SUCCESS : theme.yds.FEEDBACK_ERROR
}));
const Track = styled.div.withConfig({
  componentId: "ydscr__sc-18fglbh-4"
})(({
  theme,
  $status
}) => ({
  position: 'relative',
  width: '100%',
  height: 8,
  backgroundColor: $status === 'error' ? theme.yds.SPINNER_BACKGROUND_ERROR : theme.yds.SPINNER_BACKGROUND_DEFAULT,
  borderRadius: radius.MEDIUM,
  overflow: 'hidden'
}));
const Indicator = styled.div.withConfig({
  componentId: "ydscr__sc-18fglbh-5"
})(["position:absolute;top:0;left:0;height:100%;width:", ";border-radius:0;background-color:", ";background-image:", ";background-size:24px 8px;transition:", ";animation:", ";"], ({
  $isIndeterminate,
  $percentage
}) => $isIndeterminate ? '100%' : `${$percentage}%`, ({
  theme,
  $status,
  $isIndeterminate
}) => getIndicatorColor({
  theme: theme.yds,
  status: $status,
  isIndeterminate: $isIndeterminate
}), ({
  $isIndeterminate,
  theme
}) => {
  if (!$isIndeterminate) return 'none';
  const stripeColor = theme.yds.SPINNER_HIGHLIGHT_DEFAULT;
  return `repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 8px,
      ${stripeColor} 8px,
      ${stripeColor} 16px
    )`;
}, ({
  $isIndeterminate
}) => $isIndeterminate ? 'none' : 'width 0.3s ease-out', ({
  $isIndeterminate
}) => $isIndeterminate ? indeterminateAnimation : 'none');
const Description = styled.span.withConfig({
  componentId: "ydscr__sc-18fglbh-6"
})(({
  theme,
  $status
}) => Object.assign({
  color: $status === 'error' ? theme.yds.FEEDBACK_ERROR : theme.yds.TEXT_DEFAULT
}, fontStylesAsObject({
  theme,
  size: 'sm'
})));

export { Description, Indicator, LabelText, LabelWrapper, ProgressBarWrapper, StatusIcon, Track };
