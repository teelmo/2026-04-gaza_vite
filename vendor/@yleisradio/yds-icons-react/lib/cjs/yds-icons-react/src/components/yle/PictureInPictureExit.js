"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureInPictureExit = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PictureInPictureExit = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M18.724 5.302c-.22-.177-.559-.302-.946-.302H11a1 1 0 1 1 0-2h6.778c.791 0 1.583.25 2.196.74C20.592 4.235 21 4.96 21 5.778V12h.7c.345 0 .675.136.92.377.243.24.38.568.38.909v6.428c0 .341-.137.668-.38.91a1.3 1.3 0 0 1-.92.376H11.3c-.345 0-.675-.136-.92-.377a1.28 1.28 0 0 1-.38-.909V19H4.222c-.791 0-1.583-.25-2.196-.74C1.408 17.765 1 17.04 1 16.222V13a1 1 0 1 1 2 0v3.222c0 .125.06.304.276.476.22.177.559.302.946.302H10v-3.714c0-.341.137-.668.38-.91.245-.24.575-.376.92-.376H19V5.778c0-.125-.06-.304-.276-.476M7 5a1 1 0 0 0 0-2H2a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V6.414l4.793 4.793a1 1 0 0 0 1.414-1.414L4.414 5z" })] })));
};
exports.PictureInPictureExit = PictureInPictureExit;
