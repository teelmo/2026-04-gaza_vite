import { createContext, useContext } from 'react';

const DropdownMenuGroupContext = createContext({
  menuSize: 'md',
  variant: 'primary',
  size: 'md'
});
const useDropdownMenuGroupContext = () => {
  const context = useContext(DropdownMenuGroupContext);
  if (!context) {
    throw new Error('DropdownMenuGroup.DropdownMenu used outside of DropdownMenuGroupContext');
  }
  return context;
};

export { DropdownMenuGroupContext, useDropdownMenuGroupContext };
