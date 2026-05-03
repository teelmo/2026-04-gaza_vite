"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitter = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Twitter = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M23 5.13a9.3 9.3 0 0 1-2.599.718 4.5 4.5 0 0 0 1.984-2.51 9 9 0 0 1-2.86 1.1A4.5 4.5 0 0 0 16.231 3c-2.497 0-4.507 2.04-4.507 4.543 0 .36.03.706.104 1.036-3.75-.185-7.067-1.994-9.296-4.751a4.6 4.6 0 0 0-.618 2.296c0 1.573.805 2.967 2.004 3.774a4.4 4.4 0 0 1-2.038-.56v.05a4.555 4.555 0 0 0 3.614 4.463c-.368.101-.768.15-1.183.15-.289 0-.58-.017-.854-.078.585 1.799 2.243 3.121 4.215 3.164a9.02 9.02 0 0 1-5.593 1.937c-.262 0-.379.364-.148.488A12.65 12.65 0 0 0 7.92 21c8.3 0 12.837-6.923 12.837-12.924q-.001-.3-.017-.587A9 9 0 0 0 23 5.13" })] })));
};
exports.Twitter = Twitter;
