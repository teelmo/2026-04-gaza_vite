"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Share = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Share = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12.43 3.078a1 1 0 0 1 1.087.207l8.182 8a1 1 0 0 1 0 1.43l-8.182 8a1 1 0 0 1-1.7-.715v-3.855h-.008c-1.968.029-3.972.988-5.827 2.417L3.61 20.389a1 1 0 0 1-1.592-.981l.5-2.597.014-.062c.23-.883.58-1.911.986-2.865.4-.94.88-1.876 1.387-2.532.964-1.246 2.07-2.138 3.405-2.709 1.057-.45 2.219-.684 3.508-.76V4a1 1 0 0 1 .612-.922m1.388 3.298v3.48h-1c-1.529 0-2.727.202-3.722.627-.984.42-1.826 1.081-2.609 2.093-.351.454-.753 1.206-1.129 2.09a19.5 19.5 0 0 0-.874 2.525l.277-.213c2.023-1.559 4.445-2.798 7.028-2.833h2.029v3.479L19.57 12z", clipRule: "evenodd" })] })));
};
exports.Share = Share;
