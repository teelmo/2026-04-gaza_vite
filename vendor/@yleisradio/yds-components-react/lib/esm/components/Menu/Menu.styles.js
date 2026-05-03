import { styled } from 'styled-components';

const MenuBase = styled.ul.withConfig({
  componentId: "ydscr__sc-ywdej5-0"
})(["position:absolute;background-color:", ";box-shadow:0 0 16px rgba(0,0,0,0.15);border-radius:8px;padding:", ";margin:0;list-style-type:none;z-index:1000;transform:translateX(-100%);outline:0;-webkit-font-smoothing:antialiased;width:max-content;max-width:calc(100vw - 16px);", ""], ({
  theme
}) => theme.yds.BACKGROUND_DROPDOWN, ({
  $menuSize
}) => $menuSize === 'md' ? '8px 0' : '4px 0', ({
  $minWidth
}) => $minWidth && `min-width: ${$minWidth}px`);

export { MenuBase };
