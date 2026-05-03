"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Location = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m1.445 13.832h1.111l.002-.002.007-.005.023-.015.082-.057q.109-.074.302-.214a31.4 31.4 0 0 0 4.254-3.727C19.516 17.397 22 13.903 22 10a10 10 0 0 0-20 0c0 3.902 2.484 7.396 4.774 9.813a31.4 31.4 0 0 0 4.254 3.726 19 19 0 0 0 .384.27l.023.016.007.005zM6.343 4.343A8 8 0 0 1 20 10c0 3.098-2.016 6.104-4.226 8.437A29.4 29.4 0 0 1 12 21.773a29.4 29.4 0 0 1-3.774-3.335C6.016 16.103 4 13.097 4 10a8 8 0 0 1 2.343-5.657m5.102 19.489h1.11a1 1 0 0 1-1.11 0", clipRule: "evenodd" })] })));
};
exports.Location = Location;
