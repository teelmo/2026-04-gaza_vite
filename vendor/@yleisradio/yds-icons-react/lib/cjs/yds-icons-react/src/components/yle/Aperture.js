"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aperture = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Aperture = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M10.836 22.94Q11.41 23 12 23c3.596 0 6.79-1.726 8.797-4.395a1 1 0 0 0 .108-.146A10.95 10.95 0 0 0 23 12a11 11 0 0 0-.94-4.458A11.01 11.01 0 0 0 12 1C8.404 1 5.21 2.726 3.203 5.395a1 1 0 0 0-.107.145A10.95 10.95 0 0 0 1 12a11 11 0 0 0 .94 4.457 11.01 11.01 0 0 0 8.896 6.482ZM11.422 7l2.223-3.85A9 9 0 0 1 19.485 7zM7.38 10l1.435-2.485.017-.028 2.58-4.468a8.98 8.98 0 0 0-6.254 3.133zm-.852 2.524L7.958 15H3.512A9 9 0 0 1 3 12c0-1.43.333-2.781.926-3.981l2.575 4.459zM12.578 17H4.516a9 9 0 0 0 5.839 3.85zm1.155-2h-3.466l-1.732-3 1.732-3h3.466l1.732 3zm1.436 1.512.015-.025L16.62 14l2.222 3.847a8.98 8.98 0 0 1-6.253 3.134zm2.33-4.99 2.575 4.46A9 9 0 0 0 21 12c0-1.052-.18-2.062-.512-3h-4.446l1.43 2.476z", clipRule: "evenodd" })] })));
};
exports.Aperture = Aperture;
