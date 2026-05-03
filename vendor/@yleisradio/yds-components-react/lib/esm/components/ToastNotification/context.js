import { createContext, useContext } from 'react';

const ToastContext = createContext({
  notifications: [],
  toast: () => {}
});
const useToast = () => useContext(ToastContext).toast;

export { ToastContext, useToast };
