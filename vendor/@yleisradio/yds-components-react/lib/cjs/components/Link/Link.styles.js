'use strict';

var styledComponents = require('styled-components');

const StyledLink = styledComponents.styled.a.withConfig({
  componentId: "ydscr__sc-a1qpw1-0"
})(["display:", ";align-items:center;gap:4px;color:", ";text-decoration:underline;-webkit-tap-highlight-color:transparent;margin:0 -2px;padding:0 2px;&:hover{background:", ";}&:focus{outline:3px solid ", ";outline-offset:2px;border-radius:1px;}@supports selector(:focus-visible){&:focus{outline:none;}&:focus-visible{outline:3px solid ", ";outline-offset:2px;border-radius:1px;}}"], ({
  $isExternal
}) => $isExternal ? 'inline-flex' : 'inline', ({
  theme
}) => theme.yds.TEXT_LINK, ({
  theme
}) => theme.yds.ACTION_SECONDARY_VARIANT, ({
  theme
}) => theme.yds.BORDER_PRIMARY_FOCUS, ({
  theme
}) => theme.yds.BORDER_PRIMARY_FOCUS);
const IconWrapper = styledComponents.styled.span.withConfig({
  componentId: "ydscr__sc-a1qpw1-1"
})(["display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;svg{display:block;width:1.25em;height:1.25em;}"]);

exports.IconWrapper = IconWrapper;
exports.StyledLink = StyledLink;
