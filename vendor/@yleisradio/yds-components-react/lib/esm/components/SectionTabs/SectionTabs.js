import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { SectionTabContext } from './SectionTabContext.js';
import { TabContainer } from './SectionTabs.styles.js';

const SectionTabs = _a => {
  var {
      onTabChange,
      children,
      defaultTab = 0,
      tab
    } = _a,
    rest = __rest(_a, ["onTabChange", "children", "defaultTab", "tab"]);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const handleTabChange = useCallback(newTab => {
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
  useEffect(() => {
    if (tab !== undefined && tab !== activeTab) {
      handleTabChange(tab);
    }
  }, [activeTab, tab, handleTabChange]);
  return jsx(SectionTabContext.Provider, {
    value: {
      activeTab,
      setActiveTab: handleTabChange
    },
    children: jsx(TabContainer, Object.assign({}, rest, {
      children: children
    }))
  });
};

export { SectionTabs };
