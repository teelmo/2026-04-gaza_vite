"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudLightning = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const CloudLightning = (_a) => {
    var { title = undefined, titleId = undefined, width = '26', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 26 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M12.906.485a9 9 0 0 0-7.27 16.39 1 1 0 1 0 .968-1.75A7 7 0 1 1 16.772 7.25a1 1 0 0 0 .968.75H19l.228.006a4 4 0 0 1 .573 7.914 1 1 0 1 0 .398 1.96 6 6 0 0 0 2.828-10.333l-.211-.181A6 6 0 0 0 18.999 6h-.521l-.083-.23A9 9 0 0 0 12.906.486Zm1.649 9.683a1 1 0 0 0-1.387.277l-4 6-.057.097A1 1 0 0 0 10 18h4.13l-2.962 4.445-.06.101a1 1 0 0 0 1.724 1.009l4-6 .057-.096A1 1 0 0 0 16 16h-4.132l2.964-4.445.06-.101a1 1 0 0 0-.337-1.286" })] })));
};
exports.CloudLightning = CloudLightning;
