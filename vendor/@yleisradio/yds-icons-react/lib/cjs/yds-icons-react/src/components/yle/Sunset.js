"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sunset = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Sunset = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12 1c.552 0 1 .348 1 .778v4.808l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 6.586V1.778c0-.43.448-.778 1-.778m8.487 8.513a1 1 0 0 1 0 1.414l-1.42 1.42a1 1 0 0 1-1.414-1.414l1.42-1.42a1 1 0 0 1 1.414 0M12 12a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 1 1 8 0 1 1 0 1 0 2 0 6 6 0 0 0-6-6m9 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM1 21a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2zm-1-3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m4.927-8.487a1 1 0 0 0-1.414 1.414l1.42 1.42a1 1 0 0 0 1.414-1.414z" })] })));
};
exports.Sunset = Sunset;
