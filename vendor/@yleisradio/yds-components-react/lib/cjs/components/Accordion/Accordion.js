'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ydsIconsReact = require('@yleisradio/yds-icons-react');
var Accordion_styles = require('./Accordion.styles.js');
var generateId = require('../../internal/utils/generateId.js');

const AccordionItem = _a => {
  var {
      id = generateId.generateId('accordion-item'),
      variant = 'default',
      size = 'md',
      title,
      defaultOpen = false,
      isDisabled = false,
      children,
      contentProps = {},
      removePadding,
      iconAlign = 'end'
    } = _a,
    other = tslib_es6.__rest(_a, ["id", "variant", "size", "title", "defaultOpen", "isDisabled", "children", "contentProps", "removePadding", "iconAlign"]);
  const [open, setOpen] = React.useState(defaultOpen);
  const itemKey = id ? id.replace(' ', '-') : '';
  const noBorder = variant === 'noBorder';
  const contentPadding = noBorder || removePadding ? 'vertical' : contentProps.padding;
  const renderIcon = () => {
    return jsxRuntime.jsx(Accordion_styles.AccordionIconWrapper, {
      "$iconAlign": iconAlign,
      children: open ? jsxRuntime.jsx(ydsIconsReact.ChevronUp, {}) : jsxRuntime.jsx(ydsIconsReact.ChevronDown, {})
    });
  };
  return jsxRuntime.jsxs(Accordion_styles.AccordionBase, Object.assign({}, other, {
    "$noBorder": noBorder,
    children: [jsxRuntime.jsxs(Accordion_styles.AccordionTitle, {
      onClick: () => {
        setOpen(!open);
      },
      "$isDisabled": isDisabled,
      disabled: isDisabled,
      "$size": size,
      "$noBorder": noBorder,
      "$removePadding": removePadding,
      "$iconAlign": iconAlign,
      "aria-expanded": open,
      id: itemKey ? itemKey + '-trigger' : undefined,
      "aria-controls": itemKey ? itemKey + '-content' : undefined,
      children: [iconAlign === 'start' && renderIcon(), jsxRuntime.jsx(Accordion_styles.AccordionTitleText, {
        children: title
      }), iconAlign === 'end' && renderIcon()]
    }), jsxRuntime.jsx(Accordion_styles.AccordionContent, Object.assign({
      "$isDisabled": isDisabled,
      "$isOpen": open,
      "$padding": contentPadding,
      "$size": size,
      id: itemKey ? itemKey + '-content' : undefined,
      "aria-labelledby": itemKey ? itemKey + '-trigger' : undefined
    }, contentProps, {
      children: children
    }))]
  }));
};
const Accordion = _a => {
  var {
      children
    } = _a,
    other = tslib_es6.__rest(_a, ["children"]);
  return jsxRuntime.jsx(Accordion_styles.AccordionList, Object.assign({}, other, {
    children: children
  }));
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
