"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatestActive = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LatestActive = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M22.01 2.1H22c-.55 0-1 .45-1 1v2.2l-1.67-1.5a11 11 0 0 0-6.64-2.78c-2.46-.15-4.9.52-6.94 1.92s-3.53 3.45-4.26 5.8c-.73 2.36-.65 4.89.23 7.19s2.51 4.24 4.63 5.51c2.12 1.26 4.6 1.78 7.05 1.47s4.72-1.44 6.45-3.2 2.82-4.05 3.09-6.5a1 1 0 0 0-.88-1.1 1 1 0 0 0-1.1.88 8.96 8.96 0 0 1-2.53 5.32 9 9 0 0 1-11.04 1.42 9 9 0 0 1-3.79-4.51A8.986 8.986 0 0 1 6.9 4.6a8.94 8.94 0 0 1 5.67-1.57c2.01.13 3.93.93 5.43 2.27l1.39 1.26h-1.84c-.55 0-1 .45-1 1s.45 1 1 1h4.48c.08 0 .15-.03.22-.05h.02s.1-.02.14-.04c.03-.01.06-.03.08-.05.02-.01.04-.03.05-.04l.04-.03s.1-.06.14-.1c0 0 .02 0 .02-.02 0-.01.02-.03.03-.04.02-.03.03-.06.05-.09.04-.06.08-.12.11-.19s.03-.14.04-.21c0-.02 0-.05.02-.07 0-.02.01-.05.01-.07V3.1c0-.55-.45-1-1-1zm-6.4 3.5a7.2 7.2 0 0 0-3.5-.89 7.28 7.28 0 1 0 7.28 7.28c0-.58-.08-1.15-.2-1.69h-1.95c-1.46 0-2.64-1.18-2.64-2.64 0-.84.4-1.58 1.01-2.06m.13 8.83c.49.24.69.84.45 1.33-.25.49-.85.69-1.34.45l-4.45-2.22a1 1 0 0 1-.55-.89V7.54c0-.55.45-1 1-1s1 .45 1 1v4.94z", clipRule: "evenodd" })] })));
};
exports.LatestActive = LatestActive;
