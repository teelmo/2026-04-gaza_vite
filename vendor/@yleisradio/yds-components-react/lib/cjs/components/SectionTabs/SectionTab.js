'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var SectionTabContext = require('./SectionTabContext.js');
var SectionTabs_styles = require('./SectionTabs.styles.js');

const SectionTab = _a => {
  var _b;
  var {
      index,
      disabled,
      onClick,
      children,
      isActiveUncontrolled
    } = _a,
    rest = tslib_es6.__rest(_a, ["index", "disabled", "onClick", "children", "isActiveUncontrolled"]);
  const {
    activeTab,
    setActiveTab
  } = (_b = SectionTabContext.useSectionTabContext()) !== null && _b !== void 0 ? _b : {};
  const handleTabClick = index => {
    if (disabled) {
      return;
    }
    if (setActiveTab) {
      setActiveTab(index);
    }
    if (onClick) {
      onClick(index);
    }
  };
  return jsxRuntime.jsx(SectionTabs_styles.TabButton, Object.assign({
    id: `section-tab-${index}`,
    role: "tab",
    tabIndex: activeTab === index ? 0 : -1,
    "$active": isActiveUncontrolled || activeTab === index,
    "$isActiveUncontrolled": isActiveUncontrolled,
    disabled: disabled,
    onClick: () => handleTabClick(index),
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-selected": activeTab === index,
    "aria-controls": `section-tab-content-${index}`
  }, rest, {
    children: children
  }));
};

exports.SectionTab = SectionTab;
