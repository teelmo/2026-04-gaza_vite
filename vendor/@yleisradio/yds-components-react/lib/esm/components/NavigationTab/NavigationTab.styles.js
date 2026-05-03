import { styled } from 'styled-components';
import { radius, transition } from '@yleisradio/yds-core';
import { fontStyles, FontStyleModifier } from '../../helpers/font.js';
import { Badge } from '../Badge/Badge.js';

const StyledNavigation = styled.nav.withConfig({
  componentId: "ydscr__sc-8p5o59-0"
})(["height:100%;"]);
const StyledNavigationTabList = styled.ul.withConfig({
  componentId: "ydscr__sc-8p5o59-1"
})(["display:flex;padding:0;margin:0;height:100%;align-items:center;gap:", ";justify-content:", ";"], ({
  $removePadding
}) => $removePadding ? '24px' : '0', ({
  $align
}) => $align === 'center' ? 'center' : 'flex-start');
const TabContent = styled.span.withConfig({
  componentId: "ydscr__sc-8p5o59-2"
})(["border-radius:", ";"], radius.SMALL);
const BadgeContainer = styled(Badge).withConfig({
  componentId: "ydscr__sc-8p5o59-3"
})(["position:absolute;display:flex;margin-top:-16px;right:", ";"], ({
  $removePadding
}) => $removePadding ? '-10px' : '6px');
const TabListItem = styled.li.withConfig({
  componentId: "ydscr__sc-8p5o59-4"
})(["list-style:none;display:flex;height:100%;&:nth-of-type(1) > a{margin-left:0;}&:nth-last-of-type(1) > a{margin-right:0;}"]);
const TabItem = styled.a.withConfig({
  componentId: "ydscr__sc-8p5o59-5"
})(["display:flex;height:100%;align-items:center;justify-content:center;gap:8px;text-align:center;padding:0 ", ";margin:0 ", ";position:relative;color:", ";background:none;border:none;text-decoration:none;", ";&:focus{outline:none;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{.tab-content{outline:3px solid ", ";outline-offset:2px;}}}&::after{content:'';position:absolute;bottom:0;left:0;width:100%;height:3px;background-color:", ";transform:", ";transition:transform ", " ", ";}"], ({
  $removePadding
}) => $removePadding ? 0 : '16px', ({
  $removePadding
}) => $removePadding ? '12px' : 0, ({
  theme
}) => theme.yds.TEXT_DEFAULT, ({
  theme
}) => fontStyles({
  theme,
  size: 'sm',
  modifier: FontStyleModifier.BOLD
}), ({
  theme
}) => theme.yds.FEEDBACK_HIGHLIGHT, ({
  theme
}) => theme.yds.FEEDBACK_HIGHLIGHT, props => props.$selected ? 'scaleX(1)' : 'scaleX(0)', transition.DURATION_XS, transition.EASING_EXP);

export { BadgeContainer, StyledNavigation, StyledNavigationTabList, TabContent, TabItem, TabListItem };
