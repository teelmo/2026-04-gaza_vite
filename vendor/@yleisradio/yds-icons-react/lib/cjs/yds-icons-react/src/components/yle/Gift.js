"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Gift = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.061 4.018C12.807 2.662 14.194 1 16.5 1a3.5 3.5 0 0 1 3.162 5H22a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.338A3.5 3.5 0 0 1 7.5 1c2.306 0 3.693 1.662 4.439 3.018l.061.113zM11 8H3v3h8zm-.346-2a8 8 0 0 0-.468-1.018C9.557 3.838 8.694 3 7.5 3a1.5 1.5 0 0 0 0 3zm6.907-.44A1.5 1.5 0 0 1 16.5 6h-3.154c.122-.32.277-.67.468-1.018C14.443 3.838 15.306 3 16.5 3a1.5 1.5 0 0 1 1.06 2.56ZM13 11V8h8v3zm0 10h6v-8h-6zm-2-8v8H5v-8z", clipRule: "evenodd" })] })));
};
exports.Gift = Gift;
