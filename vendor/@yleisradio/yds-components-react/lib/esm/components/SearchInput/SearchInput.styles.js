import { styled } from 'styled-components';
import { InputButtonIcon } from '../TextInput/TextInput.styles.js';

const SearchInputSubmit = styled(InputButtonIcon).withConfig({
  componentId: "ydscr__sc-wp7lf3-0"
})(({
  theme
}) => ({
  backgroundColor: theme.yds.ACTION_PRIMARY,
  color: theme.yds.TEXT_NEGATIVE,
  width: '44px',
  borderRadius: '0 6px 6px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  padding: 0,
  '-webkit-tap-highlight-color': 'transparent',
  '&:hover': {
    backgroundColor: theme.yds.ACTION_PRIMARY_VARIANT
  },
  '&:active': {
    backgroundColor: theme.yds.ACTION_PRIMARY_VARIANT
  },
  '&[aria-disabled="true"]': {
    backgroundColor: theme.yds.ACTION_DISABLED,
    color: theme.yds.TEXT_DISABLED
  },
  '&:focus-visible .yds-spinner-wrapper svg': {
    outline: 'none'
  },
  '&:focus-visible .yds-spinner-wrapper': {
    borderRadius: '2px',
    outline: `3px solid ${theme.yds.BORDER_PRIMARY_FOCUS}`,
    outlineOffset: '2px'
  },
  '&[aria-disabled="true"]  .yds-spinner-wrapper path': {
    stroke: theme.yds.TEXT_DISABLED
  },
  '.yds-spinner-wrapper path': {
    stroke: theme.yds.TEXT_NEGATIVE
  }
}));

export { SearchInputSubmit };
