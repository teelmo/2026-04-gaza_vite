import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { StyledNavigation, StyledNavigationTabList } from './NavigationTab.styles.js';
import { Children, isValidElement, cloneElement } from 'react';

const NavigationTabList = _a => {
  var {
      align = 'start',
      removePadding = false,
      onTabClick,
      children
    } = _a,
    rest = __rest(_a, ["align", "removePadding", "onTabClick", "children"]);
  const extendedChildren = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        removePadding,
        onTabClick
      });
    }
    return child;
  });
  return jsx(StyledNavigation, Object.assign({}, rest, {
    children: jsx(StyledNavigationTabList, {
      "$align": align,
      children: extendedChildren
    })
  }));
};

export { NavigationTabList };
