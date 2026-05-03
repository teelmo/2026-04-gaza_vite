"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureInPicture = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const PictureInPicture = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M4 3c-.842 0-1.618.383-2.167 1.011A3.46 3.46 0 0 0 1 6.286v11.428c0 .832.288 1.652.833 2.275C2.383 20.617 3.158 21 4 21h16c.842 0 1.618-.383 2.167-1.011A3.46 3.46 0 0 0 23 17.714V6.286a3.46 3.46 0 0 0-.833-2.275C21.617 3.383 20.842 3 20 3zm-.662 2.328C3.54 5.098 3.781 5 4 5h16c.219 0 .46.098.662.328.204.234.338.577.338.958v11.428c0 .381-.134.724-.338.958-.201.23-.443.328-.662.328H4c-.219 0-.46-.098-.662-.328A1.46 1.46 0 0 1 3 17.714V6.286c0-.381.134-.724.338-.958M10.9 17h7.2a.92.92 0 0 0 .636-.251.84.84 0 0 0 .264-.606v-4.286a.84.84 0 0 0-.264-.606A.92.92 0 0 0 18.1 11h-7.2a.92.92 0 0 0-.636.251.84.84 0 0 0-.264.606v4.286c0 .227.095.445.264.606.168.16.397.251.636.251", clipRule: "evenodd" })] })));
};
exports.PictureInPicture = PictureInPicture;
