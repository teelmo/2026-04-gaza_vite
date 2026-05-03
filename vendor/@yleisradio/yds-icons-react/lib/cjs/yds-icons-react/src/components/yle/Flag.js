"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Flag = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, d: "M3 3a1 1 0 0 1 .293-.707c.22-.22.614-.483 1.21-.721C5.407 1.21 6.564 1 8 1c1.25 0 2.15.215 3.71.812l.962.379.547.21.25.091.458.157C14.723 2.906 15.3 3 16 3c1.189 0 2.094-.165 2.754-.428l.12-.05.192-.09.074-.04.104-.062a.4.4 0 0 0 .049-.037l.085-.076C20.015 1.703 21 2.147 21 3v12a1 1 0 0 1-.293.707c-.22.22-.614.483-1.21.721-.903.362-2.06.572-3.497.572-1.25 0-2.15-.215-3.71-.812l-.962-.379-.547-.21-.25-.091-.458-.157C9.277 15.094 8.7 15 8 15c-1.189 0-2.094.165-2.754.428l-.12.05-.126.059V22a1 1 0 0 1-1.993.117L3 22zm5 0c-1.189 0-2.094.165-2.754.428q-.128.052-.224.097L5 3.536v9.86l.229-.066c.688-.188 1.491-.303 2.418-.326L8 13c1.25 0 2.15.215 3.71.812l.962.379.547.21.25.091.458.157C14.723 14.906 15.3 15 16 15c1.189 0 2.094-.165 2.754-.428q.128-.052.224-.097l.022-.012v-9.86l-.229.067c-.687.188-1.491.303-2.418.326L16 5c-1.25 0-2.15-.215-3.71-.812l-.962-.379-.547-.21-.25-.091-.458-.157C9.277 3.094 8.7 3 8 3" })] })));
};
exports.Flag = Flag;
