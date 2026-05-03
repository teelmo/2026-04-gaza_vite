import { createGlobalStyle, styled } from 'styled-components';
import { radius, transition } from '@yleisradio/yds-core';
import { Button } from '../Button/Button.js';
import { fontStyles, FontStyleModifier } from '../../helpers/font.js';

const DisableBodyScroll = createGlobalStyle(["body{&:has(dialog[open]){overflow-y:hidden !important;touch-action:none;}}"]);
const DragHandle = styled.button.withConfig({
  componentId: "ydscr__sc-1l43bzx-0"
})(["display:flex;justify-content:center;margin-top:8px;margin-bottom:4px;position:relative;background:none;border:none;padding:0;&:before{position:absolute;height:40px;width:100%;transform:translateY(-50%);content:'';}&::after{content:'';display:block;width:44px;height:4px;background:", ";border-radius:4px;}"], ({
  theme
}) => theme.yds.TEXT_MEDIUM_EMPHASIS);
const BottomSheetHeader = styled.div.withConfig({
  componentId: "ydscr__sc-1l43bzx-1"
})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;"]);
const BottomSheetTitle = styled.h2.withConfig({
  componentId: "ydscr__sc-1l43bzx-2"
})(["", ";margin-top:0;margin-bottom:0;padding:24px ", " 16px 24px;"], ({
  theme
}) => fontStyles({
  theme,
  size: 'xl',
  modifier: FontStyleModifier.BOLD
}), ({
  $dragToClose
}) => $dragToClose ? '24px' : '64px');
const CloseButton = styled(Button).withConfig({
  componentId: "ydscr__sc-1l43bzx-3"
})(["position:absolute;top:16px;right:8px;"]);
const BottomSheetContent = styled.div.withConfig({
  componentId: "ydscr__sc-1l43bzx-4"
})(["overflow-y:hidden;display:flex;> *{overflow-y:auto;}"]);
const BottomSheetContainer = styled.div.withConfig({
  componentId: "ydscr__sc-1l43bzx-5"
})(["display:flex;flex-direction:column;background:", ";color:", ";position:relative;box-shadow:var(--yds-shadow-lg);border-radius:", " ", " 0 0;max-height:", ";height:100%;pointer-events:auto;min-width:320px;max-width:560px;transition-property:transform;transition-duration:", ";transition-timing-function:", ";transform:translateY(100%);"], ({
  theme
}) => theme.yds.BACKGROUND_DIALOG, ({
  theme
}) => theme.yds.TEXT_DEFAULT, radius.LARGE, radius.LARGE, ({
  $size
}) => $size === 'compact' ? 'max(300px, 40vh)' : $size === 'expanded' ? 'max(300px, 90vh)' : 'max(300px, 60vh)', transition.DURATION_S, transition.EASING_DEFAULT);
const StyledBottomSheetDialog = styled.dialog.withConfig({
  componentId: "ydscr__sc-1l43bzx-6"
})(["justify-content:", ";align-items:flex-end;background:transparent;border:none;min-height:100%;max-width:100%;width:100%;padding:0;overflow:visible;color:inherit;pointer-events:none;&[open]{position:fixed;bottom:0;display:flex;> ", "{transform:translateY(0);@starting-style{transform:translateY(100%);}}}&::backdrop{background:", ";opacity:", ";}"], ({
  $align
}) => $align === 'left' ? 'flex-start' : $align === 'right' ? 'flex-end' : 'center', BottomSheetContainer, ({
  theme
}) => theme.yds.BACKGROUND_DIALOG_OVERLAY, ({
  $backdropOpacity
}) => $backdropOpacity);

export { BottomSheetContainer, BottomSheetContent, BottomSheetHeader, BottomSheetTitle, CloseButton, DisableBodyScroll, DragHandle, StyledBottomSheetDialog };
