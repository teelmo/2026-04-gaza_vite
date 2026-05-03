import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Close } from '@yleisradio/yds-icons-react';
import { StyledTagFilter, TagFilterContent, TagFilterButton } from './TagFilter.styles.js';

const TagFilter = _a => {
  var {
      size,
      onClose,
      text,
      closeText = 'Poista valinta'
    } = _a,
    rest = __rest(_a, ["size", "onClose", "text", "closeText"]);
  return jsxs(StyledTagFilter, Object.assign({
    "$size": size
  }, rest, {
    children: [jsx(TagFilterContent, {
      children: text
    }), jsx(TagFilterButton, {
      onClick: onClose,
      "aria-label": closeText,
      type: "button",
      "$size": size,
      children: jsx(Close, {
        "aria-hidden": "true"
      })
    })]
  }));
};

export { TagFilter };
