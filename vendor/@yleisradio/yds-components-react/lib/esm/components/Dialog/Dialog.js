import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect, Children, isValidElement, cloneElement } from 'react';
import { StyledDialog, DialogIcon, DialogTitle, DialogContent, FooterContainer, DialogFooter } from './Dialog.styles.js';
import { Button } from '../Button/Button.js';

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
    rest = __rest(_a, ["title", "titleAs", "illustrativeIcon", "size", "children", "actions"]);
  const ref = useRef(null);
  const [showTopBorder, setShowTopBorder] = useState(false);
  const [showBottomBorder, setShowBottomBorder] = useState(false);
  useEffect(() => {
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
    return Children.map(children, child => {
      if (!isValidElement(child)) {
        return child;
      }
      if (child.type === Button) {
        return cloneElement(child, {
          size
        });
      }
      if (child.props && child.props.children) {
        return cloneElement(child, {}, extendActions(child.props.children, size));
      }
      return child;
    });
  };
  const extendedActions = actions ? extendActions(actions, size) : null;
  return jsxs(StyledDialog, Object.assign({
    "$hasIllustrativeIcon": !!illustrativeIcon
  }, rest, {
    children: [!!illustrativeIcon && jsx(DialogIcon, {
      children: illustrativeIcon
    }), jsx(DialogTitle, {
      as: titleAs,
      "$hasIllustrativeIcon": !!illustrativeIcon,
      "$size": size,
      children: title
    }), jsx(DialogContent, {
      ref: ref,
      "$showTopBorder": showTopBorder,
      "$showBottomBorder": showBottomBorder,
      children: children
    }), jsx(FooterContainer, {
      children: jsx(DialogFooter, {
        "$hasIllustrativeIcon": !!illustrativeIcon,
        children: extendedActions
      })
    })]
  }));
};

export { Dialog };
