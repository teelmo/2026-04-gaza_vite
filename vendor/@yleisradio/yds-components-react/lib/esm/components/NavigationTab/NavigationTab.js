import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { TabListItem, TabItem, TabContent, BadgeContainer } from './NavigationTab.styles.js';

const NavigationTab = _a => {
  var {
      id,
      removePadding = false,
      onTabClick,
      selected = false,
      children,
      badge
    } = _a,
    rest = __rest(_a, ["id", "removePadding", "onTabClick", "selected", "children", "badge"]);
  const handleTabClick = () => {
    if (onTabClick) {
      onTabClick(id);
    }
  };
  return jsx(TabListItem, {
    children: jsxs(TabItem, Object.assign({
      id: id,
      "$selected": selected,
      "$removePadding": removePadding,
      onClick: handleTabClick,
      "aria-current": selected ? 'page' : undefined
    }, rest, {
      children: [jsx(TabContent, {
        className: "tab-content",
        children: children
      }), badge && jsx(BadgeContainer, {
        "$removePadding": removePadding,
        size: "sm",
        color: "highlight"
      })]
    }))
  });
};

export { NavigationTab };
