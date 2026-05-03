import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from '@yleisradio/yds-icons-react';
import { AccordionBase, AccordionTitle, AccordionTitleText, AccordionContent, AccordionList, AccordionIconWrapper } from './Accordion.styles.js';
import { generateId } from '../../internal/utils/generateId.js';

const AccordionItem = _a => {
  var {
      id = generateId('accordion-item'),
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
    other = __rest(_a, ["id", "variant", "size", "title", "defaultOpen", "isDisabled", "children", "contentProps", "removePadding", "iconAlign"]);
  const [open, setOpen] = useState(defaultOpen);
  const itemKey = id ? id.replace(' ', '-') : '';
  const noBorder = variant === 'noBorder';
  const contentPadding = noBorder || removePadding ? 'vertical' : contentProps.padding;
  const renderIcon = () => {
    return jsx(AccordionIconWrapper, {
      "$iconAlign": iconAlign,
      children: open ? jsx(ChevronUp, {}) : jsx(ChevronDown, {})
    });
  };
  return jsxs(AccordionBase, Object.assign({}, other, {
    "$noBorder": noBorder,
    children: [jsxs(AccordionTitle, {
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
      children: [iconAlign === 'start' && renderIcon(), jsx(AccordionTitleText, {
        children: title
      }), iconAlign === 'end' && renderIcon()]
    }), jsx(AccordionContent, Object.assign({
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
    other = __rest(_a, ["children"]);
  return jsx(AccordionList, Object.assign({}, other, {
    children: children
  }));
};

export { Accordion, AccordionItem };
