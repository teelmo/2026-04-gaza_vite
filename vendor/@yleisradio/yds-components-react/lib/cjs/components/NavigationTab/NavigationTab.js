'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var NavigationTab_styles = require('./NavigationTab.styles.js');

const NavigationTab = _a => {
  var {
      id,
      removePadding = false,
      onTabClick,
      selected = false,
      children,
      badge
    } = _a,
    rest = tslib_es6.__rest(_a, ["id", "removePadding", "onTabClick", "selected", "children", "badge"]);
  const handleTabClick = () => {
    if (onTabClick) {
      onTabClick(id);
    }
  };
  return jsxRuntime.jsx(NavigationTab_styles.TabListItem, {
    children: jsxRuntime.jsxs(NavigationTab_styles.TabItem, Object.assign({
      id: id,
      "$selected": selected,
      "$removePadding": removePadding,
      onClick: handleTabClick,
      "aria-current": selected ? 'page' : undefined
    }, rest, {
      children: [jsxRuntime.jsx(NavigationTab_styles.TabContent, {
        className: "tab-content",
        children: children
      }), badge && jsxRuntime.jsx(NavigationTab_styles.BadgeContainer, {
        "$removePadding": removePadding,
        size: "sm",
        color: "highlight"
      })]
    }))
  });
};

exports.NavigationTab = NavigationTab;
