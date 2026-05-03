"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Phone = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M7.1 1H4.11a3.005 3.005 0 0 0-2.84 2.043 3 3 0 0 0-.145 1.227 20.8 20.8 0 0 0 3.227 9.124 20.5 20.5 0 0 0 6.303 6.3 20.8 20.8 0 0 0 9.058 3.22A3 3 0 0 0 23 19.916V16.92a3 3 0 0 0-2.58-3.02 12 12 0 0 1-2.6-.647 3 3 0 0 0-1.68-.125l-.208.052c-.48.14-.918.396-1.275.75l-.721.718-.119-.074a15 15 0 0 1-4.39-4.391l-.076-.12.716-.716a3 3 0 0 0 .68-3.169A11.8 11.8 0 0 1 10.1 3.59 3 3 0 0 0 7.1 1M4.111 3h3a1 1 0 0 1 1.01.86 13.7 13.7 0 0 0 .752 3.02 1 1 0 0 1-.224 1.057L7.383 9.203a1 1 0 0 0-.162 1.201 17 17 0 0 0 6.375 6.375 1 1 0 0 0 1.201-.162l1.27-1.27a.99.99 0 0 1 1.051-.22c.98.365 1.997.618 3.031.755A1 1 0 0 1 21 16.896v3.024a1 1 0 0 1-.324.745 1 1 0 0 1-.766.26 18.8 18.8 0 0 1-8.176-2.914 18.5 18.5 0 0 1-5.7-5.697 18.8 18.8 0 0 1-2.92-8.24A1 1 0 0 1 4.111 3" })] })));
};
exports.Phone = Phone;
