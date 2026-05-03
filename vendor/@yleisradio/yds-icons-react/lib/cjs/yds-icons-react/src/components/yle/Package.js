"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Package = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 1.002a3 3 0 0 0-1.498.4L7.306 3.23a1 1 0 0 0-.553.316l-3.25 1.857-.003.002a3 3 0 0 0-.937.848 1 1 0 0 0-.25.414A3 3 0 0 0 2 8v8.002a3 3 0 0 0 1.5 2.595l.004.002 6.996 3.998.002.001c.317.183.664.305 1.023.363a1 1 0 0 0 .95 0c.36-.058.706-.18 1.023-.363h.002l6.996-3.999.004-.002a3 3 0 0 0 1.5-2.595V8a3 3 0 0 0-.314-1.333 1 1 0 0 0-.249-.413 3 3 0 0 0-.937-.849l-7-4-.002-.001a3 3 0 0 0-1.498-.4Zm1 19.576 6.5-3.714h.002a1 1 0 0 0 .498-.865V8.538l-7 4.049zm-2-7.991-7-4.05V16a1 1 0 0 0 .498.864l.002.001 6.5 3.714v-7.991Zm1.5-9.45 6.461 3.691-2.456 1.42-6.944-4.004 1.935-1.106.004-.002a1 1 0 0 1 1 0Zm-.5 7.718 2.507-1.45L7.55 5.393 5.039 6.828l6.96 4.027Z", clipRule: "evenodd" })] })));
};
exports.Package = Package;
