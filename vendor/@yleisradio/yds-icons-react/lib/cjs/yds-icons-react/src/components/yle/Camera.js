"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Camera = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M9 2a1 1 0 0 0-.832.445L6.465 5H3a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-3.465l-1.703-2.555A1 1 0 0 0 15 2zM7.832 6.555 9.535 4h4.93l1.703 2.555A1 1 0 0 0 17 7h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4a1 1 0 0 0 .832-.445", clipRule: "evenodd" })] })));
};
exports.Camera = Camera;
