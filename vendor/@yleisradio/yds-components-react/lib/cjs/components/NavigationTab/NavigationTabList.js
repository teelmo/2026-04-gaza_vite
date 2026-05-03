'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var NavigationTab_styles = require('./NavigationTab.styles.js');
var React = require('react');

const NavigationTabList = _a => {
  var {
      align = 'start',
      removePadding = false,
      onTabClick,
      children
    } = _a,
    rest = tslib_es6.__rest(_a, ["align", "removePadding", "onTabClick", "children"]);
  const extendedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        removePadding,
        onTabClick
      });
    }
    return child;
  });
  return jsxRuntime.jsx(NavigationTab_styles.StyledNavigation, Object.assign({}, rest, {
    children: jsxRuntime.jsx(NavigationTab_styles.StyledNavigationTabList, {
      "$align": align,
      children: extendedChildren
    })
  }));
};

exports.NavigationTabList = NavigationTabList;
