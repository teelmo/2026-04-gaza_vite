"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Latest = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Latest = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M21.004 3.1c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1v4.46c0 .05-.03.09-.03.14-.01.07-.01.14-.04.21s-.069.129-.108.188l-.002.003c-.03.04-.05.09-.08.13 0 .02-.02.02-.02.02a1 1 0 0 1-.139.103l-.04.027q-.03.017-.056.037-.04.032-.085.053c-.043.017-.093.026-.138.035l-.022.005-.048.015a.6.6 0 0 1-.172.034h-4.48c-.55 0-1-.45-1-1s.45-1 1-1h1.84l-1.39-1.26a9.04 9.04 0 0 0-5.43-2.27c-2.01-.13-4.01.42-5.67 1.57a8.986 8.986 0 0 0-3.3 10.62 9 9 0 0 0 3.79 4.51 9 9 0 0 0 11.04-1.42 8.96 8.96 0 0 0 2.53-5.32 1 1 0 0 1 1.1-.88 1 1 0 0 1 .88 1.1c-.27 2.45-1.36 4.74-3.09 6.5s-4 2.89-6.45 3.2-4.93-.21-7.05-1.47a11 11 0 0 1-4.63-5.51c-.88-2.3-.96-4.83-.23-7.19.73-2.35 2.22-4.4 4.26-5.8s4.48-2.07 6.94-1.92c2.46.16 4.8 1.13 6.64 2.78l1.67 1.5zM9.894 7.54c0-.55.45-1 1-1s1 .45 1 1v4.93l3.89 1.95c.5.25.7.85.45 1.34-.25.5-.85.7-1.34.45l-4.45-2.22a.98.98 0 0 1-.55-.89z" })] })));
};
exports.Latest = Latest;
