"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bug = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Bug = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M15.293 1.293a1 1 0 1 1 1.414 1.414l-1.263 1.262c.36.61.556 1.31.556 2.03v.42a5 5 0 0 1 1.889 1.44A3 3 0 0 0 20 5a1 1 0 0 1 2 0 5 5 0 0 1-3.186 4.652c.121.435.186.887.186 1.347v1h3a1 1 0 1 1 0 2h-3l-.009.347a7 7 0 0 1-.37 1.918A5 5 0 0 1 22 21.002 1 1 0 0 1 20 21a3 3 0 0 0-2.311-2.923 7 7 0 0 1-.739.874A7 7 0 0 1 12 21l-.347-.009a7 7 0 0 1-5.342-2.915A3 3 0 0 0 4 21a1 1 0 0 1-2 0 5 5 0 0 1 3.378-4.736 7 7 0 0 1-.37-1.918L5 14H2a1 1 0 0 1 0-2h3v-1c0-.46.064-.912.186-1.347A5 5 0 0 1 2 5.001a1 1 0 0 1 2-.002 3 3 0 0 0 2.11 2.86A5 5 0 0 1 8 6.42V6c0-.72.195-1.42.555-2.03L7.293 2.707a1 1 0 1 1 1.414-1.414l1.262 1.262a4 4 0 0 1 4.061 0zM10 8a3 3 0 0 0-3 3v3c0 .865.225 1.706.642 2.447q.04.06.072.126A5 5 0 0 0 11 18.898V11a1 1 0 1 1 2 0v7.898a5 5 0 0 0 3.285-2.325 1 1 0 0 1 .076-.134A5 5 0 0 0 17 14v-3a3 3 0 0 0-3-3zm2-4a2 2 0 0 0-1.404.576l-.01.01-.01.01A2 2 0 0 0 10 6h4a2 2 0 0 0-.577-1.404l-.01-.01-.01-.01A2 2 0 0 0 12 4" })] })));
};
exports.Bug = Bug;
