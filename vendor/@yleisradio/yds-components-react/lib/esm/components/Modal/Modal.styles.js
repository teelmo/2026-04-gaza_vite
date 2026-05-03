import { createGlobalStyle, styled } from 'styled-components';
import { radius } from '@yleisradio/yds-core';
import { Button } from '../Button/Button.js';

const DisableBodyScroll = createGlobalStyle`
  :root {
    &:has(dialog[open]) {
      scrollbar-gutter: stable;
    }
  }

  body {
    &:has(dialog[open]) {
      overflow-y: hidden !important;
      touch-action: none;
    }
  }
`;
const StyledModal = styled.dialog.withConfig({
  componentId: "ydscr__sc-566kpp-0"
})(["justify-content:center;align-items:", ";background:transparent;border:none;min-height:100%;max-height:", ";max-width:none;position:fixed;margin:0 auto;padding:16px;overflow-x:hidden;overflow-y:", ";color:inherit;&[open]{display:flex;}&::backdrop{background-color:", ";}"], ({
  $scrollBehavior
}) => $scrollBehavior === 'body' ? 'flex-start' : 'center', ({
  $scrollBehavior
}) => $scrollBehavior === 'body' ? '100%' : 'none', ({
  $scrollBehavior
}) => $scrollBehavior === 'body' ? 'auto' : 'visible', ({
  theme
}) => theme.yds.BACKGROUND_DIALOG_OVERLAY);
const ModalContent = styled.div.withConfig({
  componentId: "ydscr__sc-566kpp-1"
})(["display:flex;background:", ";color:", ";position:relative;padding:0;min-width:320px;max-width:560px;box-shadow:var(--yds-shadow-lg);border-radius:", ";overflow:hidden;max-height:", ";margin:", ";"], ({
  theme
}) => theme.yds.BACKGROUND_DIALOG, ({
  theme
}) => theme.yds.TEXT_DEFAULT, radius.LARGE, ({
  $scrollBehavior
}) => $scrollBehavior === 'content' ? '90vh' : 'none', ({
  $scrollBehavior
}) => $scrollBehavior === 'body' ? 'auto' : '0');
const CloseButton = styled(Button).withConfig({
  componentId: "ydscr__sc-566kpp-2"
})(["position:absolute;top:24px;right:8px;"]);

export { CloseButton, DisableBodyScroll, ModalContent, StyledModal };
