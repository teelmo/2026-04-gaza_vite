"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eye = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Eye = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M7.992 12a4 4 0 0 0 4.003 4 4 4 0 1 0 0-8 4 4 0 0 0-4.003 4m4.003 2a2 2 0 1 0 .002-4.002A2 2 0 0 0 11.995 14m11.9-2.45c.14.28.14.61 0 .9v.03l-.05.08q-.025.055-.067.127-.04.067-.083.153c-.13.23-.33.56-.58.96-.511.79-1.262 1.84-2.253 2.89-1.961 2.09-4.954 4.32-8.857 4.32s-6.906-2.23-8.857-4.32A21 21 0 0 1 .896 13.8a16 16 0 0 1-.73-1.24l-.04-.08v-.02h-.02a1.03 1.03 0 0 1 0-.91v-.03l.05-.08q.024-.055.067-.128.039-.066.082-.152a20.3 20.3 0 0 1 2.832-3.85C5.09 5.23 8.093 3 11.996 3s6.906 2.23 8.857 4.32a21 21 0 0 1 2.252 2.89 16 16 0 0 1 .73 1.24l.04.08v.02zM19.4 8.68c.89.95 1.572 1.9 2.032 2.61.18.28.32.52.43.71-.11.19-.25.43-.43.71-.46.72-1.141 1.66-2.032 2.61-1.8 1.91-4.292 3.68-7.405 3.68s-5.615-1.77-7.406-3.68c-.89-.95-1.571-1.9-2.032-2.61-.18-.28-.32-.52-.43-.71.11-.19.25-.43.43-.71.46-.72 1.141-1.66 2.032-2.61C6.39 6.77 8.882 5 11.995 5s5.615 1.77 7.406 3.68", clipRule: "evenodd" })] })));
};
exports.Eye = Eye;
