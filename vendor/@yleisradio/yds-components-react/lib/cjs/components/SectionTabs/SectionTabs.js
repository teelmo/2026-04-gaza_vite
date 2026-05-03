'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var SectionTabContext = require('./SectionTabContext.js');
var SectionTabs_styles = require('./SectionTabs.styles.js');

const SectionTabs = _a => {
  var {
      onTabChange,
      children,
      defaultTab = 0,
      tab
    } = _a,
    rest = tslib_es6.__rest(_a, ["onTabChange", "children", "defaultTab", "tab"]);
  const [activeTab, setActiveTab] = React.useState(defaultTab);
  const handleTabChange = React.useCallback(newTab => {
    if (newTab !== activeTab) {
      if (onTabChange) {
        onTabChange({
          previousTab: activeTab,
          currentTab: newTab
        });
      }
      setActiveTab(newTab);
    }
  }, [activeTab, onTabChange]);
  React.useEffect(() => {
    if (tab !== undefined && tab !== activeTab) {
      handleTabChange(tab);
    }
  }, [activeTab, tab, handleTabChange]);
  return jsxRuntime.jsx(SectionTabContext.SectionTabContext.Provider, {
    value: {
      activeTab,
      setActiveTab: handleTabChange
    },
    children: jsxRuntime.jsx(SectionTabs_styles.TabContainer, Object.assign({}, rest, {
      children: children
    }))
  });
};

exports.SectionTabs = SectionTabs;
