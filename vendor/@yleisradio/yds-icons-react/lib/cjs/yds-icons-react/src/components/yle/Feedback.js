"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Feedback = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "m12.502 2 .555.002a9.48 9.48 0 0 1 6.18 2.762A9.5 9.5 0 0 1 22.003 11v.498a9.4 9.4 0 0 1-1.006 4.25 9.5 9.5 0 0 1-12.075 4.55l-.284-.123-5.319 1.774a1 1 0 0 1-1.294-1.159l.029-.106 1.773-5.32-.123-.283a9.4 9.4 0 0 1-.695-3.213l-.006-.368A9.5 9.5 0 0 1 8.25 3.007 9.4 9.4 0 0 1 12.5 2m.469 2h-.472a7.4 7.4 0 0 0-3.35.795A7.5 7.5 0 0 0 5 11.503a7.4 7.4 0 0 0 .792 3.346 1 1 0 0 1 .056.767L4.583 19.42l3.803-1.268a1 1 0 0 1 .645.005l.122.052A7.4 7.4 0 0 0 12.5 19a7.5 7.5 0 0 0 6.708-4.15 7.4 7.4 0 0 0 .793-3.35l.001-.445A7.48 7.48 0 0 0 12.947 4zm.52 3.5c0-.552-.445-1-.994-1a1 1 0 0 0-.995 1v4c0 .552.445 1 .995 1s.995-.448.995-1zm-.991 6.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 0 0 0-2.5z", clipRule: "evenodd" })] })));
};
exports.Feedback = Feedback;
