import { styled } from 'styled-components';
import { MenuBase } from '../Menu/Menu.styles.js';
import { MenuItemBase } from '../MenuItem/MenuItem.styles.js';

const ComboboxContainer = styled.div.withConfig({
  componentId: "ydscr__sc-14mtu0a-0"
})(["position:relative;& .yds-spinner{width:24px;& path{stroke:", "}"], ({
  theme,
  $isDisabled
}) => $isDisabled ? theme.yds.TEXT_DISABLED : theme.yds.TEXT_DEFAULT);
const ComboboxMenu = styled(MenuBase).withConfig({
  componentId: "ydscr__sc-14mtu0a-1"
})(["transform:none;width:100%;margin-top:5px;visibility:", ";max-height:", ";overflow-y:auto;color-scheme:", ";"], ({
  $isOpen
}) => $isOpen ? 'visible' : 'hidden', ({
  $menuMaxHeight
}) => $menuMaxHeight ? $menuMaxHeight : 'unset', ({
  theme
}) => theme.ydsThemeName === 'dark' ? 'dark' : 'light');
const ComboboxMenuItem = styled(MenuItemBase).withConfig({
  componentId: "ydscr__sc-14mtu0a-2"
})(["outline:", ";outline-offset:-4px;padding-left:16px;background-color:transparent;&:hover{background:unset;}&[aria-disabled='true']{color:", ";cursor:not-allowed;}"], ({
  $isHighlighted,
  theme
}) => $isHighlighted ? '2px solid ' + theme.yds.BORDER_PRIMARY_FOCUS : 'none', ({
  theme
}) => theme.yds.TEXT_DISABLED);

export { ComboboxContainer, ComboboxMenu, ComboboxMenuItem };
