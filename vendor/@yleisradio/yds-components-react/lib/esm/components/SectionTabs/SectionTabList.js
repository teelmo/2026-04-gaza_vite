import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useSectionTabContext } from './SectionTabContext.js';
import { StyledTabList } from './SectionTabs.styles.js';
import { transition } from '@yleisradio/yds-core';

const SectionTabList = _a => {
  var _b;
  var {
      children,
      enableTransitions
    } = _a,
    rest = __rest(_a, ["children", "enableTransitions"]);
  const {
    activeTab,
    setActiveTab
  } = (_b = useSectionTabContext()) !== null && _b !== void 0 ? _b : {};
  const tabListRef = useRef();
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [isInitialRender, setIsInitialRender] = useState(true);
  const handleTabChange = index => {
    var _a;
    setActiveTab(index);
    (_a = tabListRef.current.children[index]) === null || _a === void 0 ? void 0 : _a.focus();
  };
  const findNextActiveTab = (index, direction) => {
    var _a;
    const tabListLength = tabListRef.current.children.length;
    const nextIndex = (index + (direction === 'right' ? 1 : -1 + tabListLength)) % tabListLength;
    if ((_a = tabListRef.current.children[nextIndex]) === null || _a === void 0 ? void 0 : _a.disabled) {
      return findNextActiveTab(nextIndex, direction);
    }
    return nextIndex;
  };
  const handleKeyDown = event => {
    if (event.key === 'ArrowRight') {
      const nextIndex = findNextActiveTab(activeTab, 'right');
      handleTabChange(nextIndex);
    } else if (event.key === 'ArrowLeft') {
      const prevIndex = findNextActiveTab(activeTab, 'left');
      handleTabChange(prevIndex);
    }
  };
  const updateBackgroundStyle = useCallback(() => {
    var _a;
    const activeTabElement = (_a = tabListRef.current) === null || _a === void 0 ? void 0 : _a.children[activeTab];
    if (activeTabElement) {
      const shouldDisableTransition = enableTransitions === false || enableTransitions === undefined && isInitialRender;
      setBackgroundStyle({
        width: activeTabElement === null || activeTabElement === void 0 ? void 0 : activeTabElement.offsetWidth,
        transform: `translateX(${activeTabElement === null || activeTabElement === void 0 ? void 0 : activeTabElement.offsetLeft}px)`,
        transitionDuration: shouldDisableTransition ? transition.DURATION_INSTANT : transition.DURATION_S
      });
    }
  }, [activeTab, isInitialRender, enableTransitions]);
  useEffect(() => {
    updateBackgroundStyle();
    window.addEventListener('resize', updateBackgroundStyle);
    return () => {
      window.removeEventListener('resize', updateBackgroundStyle);
    };
  }, [activeTab, updateBackgroundStyle]);
  useEffect(() => {
    // Only auto-enable transitions if prop is not explicitly set
    if (isInitialRender && enableTransitions === undefined) {
      requestAnimationFrame(() => {
        setIsInitialRender(false);
      });
    }
  }, [isInitialRender, enableTransitions]);
  return jsx(StyledTabList, Object.assign({
    role: "tablist",
    ref: tabListRef,
    onKeyDown: handleKeyDown,
    "$slidingBackgroundStyle": backgroundStyle
  }, rest, {
    children: children
  }));
};

export { SectionTabList };
