import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useSectionTabContext } from './SectionTabContext.js';
import { TabButton } from './SectionTabs.styles.js';

const SectionTab = _a => {
  var _b;
  var {
      index,
      disabled,
      onClick,
      children,
      isActiveUncontrolled
    } = _a,
    rest = __rest(_a, ["index", "disabled", "onClick", "children", "isActiveUncontrolled"]);
  const {
    activeTab,
    setActiveTab
  } = (_b = useSectionTabContext()) !== null && _b !== void 0 ? _b : {};
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
  return jsx(TabButton, Object.assign({
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

export { SectionTab };
