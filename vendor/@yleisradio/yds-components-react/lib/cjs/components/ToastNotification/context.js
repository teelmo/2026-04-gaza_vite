'use strict';

var React = require('react');

const ToastContext = React.createContext({
  notifications: [],
  toast: () => {}
});
const useToast = () => React.useContext(ToastContext).toast;

exports.ToastContext = ToastContext;
exports.useToast = useToast;
