'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Dialog_styles = require('./Dialog.styles.js');
var Button = require('../Button/Button.js');

/**
 * Dialog component for displaying dialogs with title, content, and actions.
 *
 * @param {string} [props.title] - Dialog title text
 * @param {React.ReactNode} [props.schildren] - Dialog content
 * @param {React.ReactNode} [props.actions] - Action buttons that handle user responses
 *
 */
const Dialog = _a => {
  var {
      title,
      titleAs = 'h2',
      illustrativeIcon,
      size = 'md',
      children,
      actions
    } = _a,
    rest = tslib_es6.__rest(_a, ["title", "titleAs", "illustrativeIcon", "size", "children", "actions"]);
  const ref = React.useRef(null);
  const [showTopBorder, setShowTopBorder] = React.useState(false);
  const [showBottomBorder, setShowBottomBorder] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleScroll = () => {
      setShowTopBorder(el.scrollTop > 0);
      setShowBottomBorder(el.scrollTop + el.clientHeight + 2 < el.scrollHeight);
    };
    handleScroll();
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);
  const extendActions = (children, size) => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }
      if (child.type === Button.Button) {
        return React.cloneElement(child, {
          size
        });
      }
      if (child.props && child.props.children) {
        return React.cloneElement(child, {}, extendActions(child.props.children, size));
      }
      return child;
    });
  };
  const extendedActions = actions ? extendActions(actions, size) : null;
  return jsxRuntime.jsxs(Dialog_styles.StyledDialog, Object.assign({
    "$hasIllustrativeIcon": !!illustrativeIcon
  }, rest, {
    children: [!!illustrativeIcon && jsxRuntime.jsx(Dialog_styles.DialogIcon, {
      children: illustrativeIcon
    }), jsxRuntime.jsx(Dialog_styles.DialogTitle, {
      as: titleAs,
      "$hasIllustrativeIcon": !!illustrativeIcon,
      "$size": size,
      children: title
    }), jsxRuntime.jsx(Dialog_styles.DialogContent, {
      ref: ref,
      "$showTopBorder": showTopBorder,
      "$showBottomBorder": showBottomBorder,
      children: children
    }), jsxRuntime.jsx(Dialog_styles.FooterContainer, {
      children: jsxRuntime.jsx(Dialog_styles.DialogFooter, {
        "$hasIllustrativeIcon": !!illustrativeIcon,
        children: extendedActions
      })
    })]
  }));
};

exports.Dialog = Dialog;
