"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whatsapp = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Whatsapp = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M15.753 13.259c-.412-.247-.941-.518-1.412-.318-.364.153-.6.73-.835 1.024-.118.153-.27.176-.459.094-1.376-.553-2.435-1.47-3.2-2.741-.13-.2-.106-.353.047-.541.236-.271.518-.577.577-.942.059-.364-.106-.788-.26-1.117-.187-.412-.41-1.012-.823-1.247-.388-.212-.882-.094-1.223.188-.588.482-.87 1.223-.859 1.976 0 .212.024.424.082.624.118.494.342.953.6 1.388.189.33.4.647.624.953a10 10 0 0 0 2.717 2.53c.53.329 1.106.611 1.695.811.659.224 1.259.447 1.976.306.753-.141 1.494-.612 1.788-1.33.083-.211.13-.458.083-.682-.106-.47-.741-.74-1.118-.976M2 22l1.439-5.353A9.84 9.84 0 0 1 2.2 11.871C2.2 6.435 6.634 2 12.094 2S22 6.435 22 11.882s-4.446 9.883-9.906 9.883a9.85 9.85 0 0 1-4.705-1.2zm5.66-3.447.342.2a8.04 8.04 0 0 0 4.104 1.13c4.434 0 8.03-3.6 8.03-8.012s-3.608-8-8.042-8-8.03 3.588-8.03 8.011c0 1.46.4 2.895 1.179 4.153l.212.341-.802 2.989 3.007-.8z", clipRule: "evenodd" })] })));
};
exports.Whatsapp = Whatsapp;
