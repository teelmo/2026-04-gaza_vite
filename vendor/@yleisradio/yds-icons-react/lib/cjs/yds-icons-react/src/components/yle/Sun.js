"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sun = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Sun = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1-7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm7.487 3.927a1 1 0 0 0-1.414-1.414l-1.42 1.42a1 1 0 0 0 1.414 1.414zM1 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm19 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M6.347 19.067a1 1 0 1 0-1.414-1.414l-1.42 1.42a1 1 0 1 0 1.414 1.414zm11.306-1.414a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M3.513 3.513a1 1 0 0 1 1.414 0l1.42 1.42a1 1 0 0 1-1.414 1.414l-1.42-1.42a1 1 0 0 1 0-1.414", clipRule: "evenodd" })] })));
};
exports.Sun = Sun;
