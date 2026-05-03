"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sport = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Sport = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1M8.38 3.76c.9 2.04.92 4.22-.04 5.89-1.06 1.83-2.9 2.93-5.3 3.01q-.03-.33-.03-.66c0-3.68 2.21-6.84 5.38-8.24zM3.39 14.61c2.88-.29 5.38-1.71 6.68-3.96 1.25-2.17 1.28-4.92.21-7.48C10.84 3.06 11.41 3 12 3a9 9 0 0 1 8.56 6.22c-2.67.4-4.95 1.79-6.18 3.92-1.27 2.2-1.28 4.99-.17 7.58-.71.18-1.44.28-2.21.28-4.06 0-7.49-2.69-8.61-6.39m12.66 5.41c-.9-2.04-.91-4.21.06-5.89.93-1.62 2.73-2.66 4.85-2.95.02.27.04.54.04.81 0 3.51-2.02 6.55-4.95 8.03", clipRule: "evenodd" })] })));
};
exports.Sport = Sport;
