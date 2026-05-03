'use strict';

var React = require('react');

const DropdownMenuGroupContext = React.createContext({
  menuSize: 'md',
  variant: 'primary',
  size: 'md'
});
const useDropdownMenuGroupContext = () => {
  const context = React.useContext(DropdownMenuGroupContext);
  if (!context) {
    throw new Error('DropdownMenuGroup.DropdownMenu used outside of DropdownMenuGroupContext');
  }
  return context;
};

exports.DropdownMenuGroupContext = DropdownMenuGroupContext;
exports.useDropdownMenuGroupContext = useDropdownMenuGroupContext;
