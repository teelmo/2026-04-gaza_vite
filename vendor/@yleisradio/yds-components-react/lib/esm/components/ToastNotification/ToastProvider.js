import { jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { ToastContext } from './context.js';
import { useReducedMotion } from '../../internal/utils/motion.js';

let notificationId = 0;
const ToastProvider = ({
  children
}) => {
  const [notifications, setNotifications] = useState([]);
  const prefersReducedMotion = useReducedMotion();
  const toast = useCallback(props => {
    const toastId = notificationId++;
    const remove = () => {
      setNotifications(ns => ns.filter(n => n.toastId !== toastId));
    };
    const removeWithMotion = () => {
      setNotifications(ns => ns.map(n => n.toastId !== toastId ? n : Object.assign(Object.assign({}, n), {
        isExiting: true,
        onToastTransitionEnd: remove
      })));
    };
    const onClose = prefersReducedMotion ? remove : removeWithMotion;
    setNotifications(ns => [Object.assign(Object.assign({}, props), {
      toastId,
      onClose,
      isExiting: false
    }), ...ns]);
  }, [prefersReducedMotion]);
  return jsx(ToastContext.Provider, {
    value: {
      notifications,
      toast
    },
    children: children
  });
};

export { ToastProvider };
