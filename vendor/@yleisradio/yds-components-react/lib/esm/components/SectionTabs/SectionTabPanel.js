import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useSectionTabContext } from './SectionTabContext.js';

const SectionTabPanel = _a => {
  var _b;
  var {
      children,
      index
    } = _a,
    rest = __rest(_a, ["children", "index"]);
  const {
    activeTab
  } = (_b = useSectionTabContext()) !== null && _b !== void 0 ? _b : {};
  if (activeTab !== index) {
    return null;
  }
  return jsx("div", Object.assign({
    role: "tabpanel",
    id: `section-tab-content-${activeTab}`,
    "aria-labelledby": `section-tab-${activeTab}`
  }, rest, {
    children: children
  }));
};

export { SectionTabPanel };
