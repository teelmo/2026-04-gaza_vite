"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moon = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Moon = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.584 11.416a6.06 6.06 0 0 1-.507-7.805 1.01 1.01 0 0 0-.905-1.607 10.101 10.101 0 0 0-6.295 17.12 10.1 10.1 0 0 0 17.119-6.296 1.01 1.01 0 0 0-1.607-.905 6.06 6.06 0 0 1-7.805-.507m-2.406 8.37a8.1 8.1 0 0 1-3.873-2.091A8.082 8.082 0 0 1 9.352 4.464a8.08 8.08 0 0 0 1.803 8.38 8.08 8.08 0 0 0 8.381 1.804 8.085 8.085 0 0 1-9.358 5.138", clipRule: "evenodd" })] })));
};
exports.Moon = Moon;
