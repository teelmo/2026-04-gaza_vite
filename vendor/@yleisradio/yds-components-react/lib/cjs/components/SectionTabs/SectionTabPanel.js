'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var SectionTabContext = require('./SectionTabContext.js');

const SectionTabPanel = _a => {
  var _b;
  var {
      children,
      index
    } = _a,
    rest = tslib_es6.__rest(_a, ["children", "index"]);
  const {
    activeTab
  } = (_b = SectionTabContext.useSectionTabContext()) !== null && _b !== void 0 ? _b : {};
  if (activeTab !== index) {
    return null;
  }
  return jsxRuntime.jsx("div", Object.assign({
    role: "tabpanel",
    id: `section-tab-content-${activeTab}`,
    "aria-labelledby": `section-tab-${activeTab}`
  }, rest, {
    children: children
  }));
};

exports.SectionTabPanel = SectionTabPanel;
