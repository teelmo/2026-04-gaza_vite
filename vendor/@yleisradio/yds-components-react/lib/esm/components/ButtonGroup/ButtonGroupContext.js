import { createContext, useContext } from 'react';

const ButtonGroupContext = createContext({
  activeButtons: new Set(),
  toggleButton: () => {},
  variant: 'primary',
  multiple: false,
  size: 'md',
  showIcon: false
});
const useButtonGroupContext = () => {
  const context = useContext(ButtonGroupContext);
  if (!context) {
    throw new Error('ButtonGroup Button used outside of ButtonGroupContext');
  }
  return context;
};

export { ButtonGroupContext, useButtonGroupContext };
