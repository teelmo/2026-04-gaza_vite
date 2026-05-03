'use strict';

var React = require('react');

const ButtonGroupContext = React.createContext({
  activeButtons: new Set(),
  toggleButton: () => {},
  variant: 'primary',
  multiple: false,
  size: 'md',
  showIcon: false
});
const useButtonGroupContext = () => {
  const context = React.useContext(ButtonGroupContext);
  if (!context) {
    throw new Error('ButtonGroup Button used outside of ButtonGroupContext');
  }
  return context;
};

exports.ButtonGroupContext = ButtonGroupContext;
exports.useButtonGroupContext = useButtonGroupContext;
