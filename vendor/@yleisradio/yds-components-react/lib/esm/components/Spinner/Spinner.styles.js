import { styled, keyframes } from 'styled-components';
import { fontStyles } from '../../helpers/font.js';

const SpinnerWrapper = styled.div.withConfig({
  componentId: "ydscr__sc-1vjbycj-0"
})(["display:inline-flex;align-items:center;flex-direction:column;color:", ";"], ({
  $variant,
  theme
}) => $variant === 'default-negative' || $variant === 'highlight-negative' ? theme.yds.TEXT_NEGATIVE : theme.yds.TEXT_DEFAULT);
const rotate = keyframes(["from{transform:rotate(0);}to{transform:rotate(360deg);}"]);
const SpinnerBase = styled.svg.withConfig({
  componentId: "ydscr__sc-1vjbycj-1"
})(["animation:", " linear infinite;animation-duration:", ";width:", ";"], rotate, ({
  $size
}) => $size === 'lg' ? '1000ms' : '720ms', ({
  $size
}) => $size === 'lg' ? '72px' : $size === 'sm' ? '24px' : '48px');
const SpinnerBackground = styled.circle.withConfig({
  componentId: "ydscr__sc-1vjbycj-2"
})(["stroke:", ";"], ({
  $variant,
  $colors,
  theme
}) => ($colors === null || $colors === void 0 ? void 0 : $colors.background) ? undefined : $variant === 'default-negative' || $variant === 'highlight-negative' ? theme.yds.SPINNER_BACKGROUND_NEGATIVE : theme.yds.SPINNER_BACKGROUND_DEFAULT);
const SpinnerWheel = styled.path.withConfig({
  componentId: "ydscr__sc-1vjbycj-3"
})(["stroke:", ";"], ({
  $variant,
  $colors,
  theme
}) => ($colors === null || $colors === void 0 ? void 0 : $colors.spinner) ? undefined : $variant === 'default-negative' ? theme.yds.SPINNER_NEGATIVE : $variant === 'highlight-negative' ? theme.yds.SPINNER_HIGHLIGHT_NEGATIVE : $variant === 'highlight' ? theme.yds.SPINNER_HIGHLIGHT_DEFAULT : theme.yds.SPINNER_DEFAULT);
const SpinnerLabel = styled.div.withConfig({
  componentId: "ydscr__sc-1vjbycj-4"
})(["", ";margin-top:4px;"], ({
  theme
}) => fontStyles({
  theme,
  size: 'sm'
}));

export { SpinnerBackground, SpinnerBase, SpinnerLabel, SpinnerWheel, SpinnerWrapper };
