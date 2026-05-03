'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var context = require('./context.js');
var motion = require('../../internal/utils/motion.js');

let notificationId = 0;
const ToastProvider = ({
  children
}) => {
  const [notifications, setNotifications] = React.useState([]);
  const prefersReducedMotion = motion.useReducedMotion();
  const toast = React.useCallback(props => {
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
  return jsxRuntime.jsx(context.ToastContext.Provider, {
    value: {
      notifications,
      toast
    },
    children: children
  });
};

exports.ToastProvider = ToastProvider;
