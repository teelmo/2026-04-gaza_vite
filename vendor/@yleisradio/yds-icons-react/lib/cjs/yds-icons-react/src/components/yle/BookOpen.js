"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOpen = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const BookOpen = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M12 4.743c.645-.484 1.69-1.224 2.576-1.64 1.237-.58 2.827-.848 4.156-.978a28 28 0 0 1 3.047-.122c.703.012 1.221.59 1.221 1.247v14.5c0 .697-.57 1.264-1.273 1.253a26 26 0 0 0-2.825.115c-1.265.125-2.565.368-3.478.796-.548.258-1.236.712-1.818 1.13a25 25 0 0 0-.907.686l-.053.042-.006.005a1 1 0 0 1-1.27.008l-.004-.003-.012-.01-.053-.042a22 22 0 0 0-.907-.685c-.582-.42-1.27-.873-1.819-1.13-.912-.428-2.212-.671-3.477-.796a26 26 0 0 0-2.825-.116A1.253 1.253 0 0 1 1 17.749V3.25c0-.656.518-1.234 1.221-1.246a28 28 0 0 1 3.047.123c1.329.13 2.919.397 4.157.978.886.415 1.93 1.155 2.575 1.64m3.425.171c.918-.43 2.23-.674 3.502-.798.79-.077 1.524-.105 2.073-.113v13c-.602.008-1.415.038-2.294.125-1.323.13-2.9.399-4.13.976-.518.242-1.08.59-1.576.925V6.495c.563-.431 1.62-1.203 2.425-1.58M11 6.496c-.563-.432-1.62-1.204-2.425-1.582-.918-.43-2.23-.674-3.502-.798A26 26 0 0 0 3 4.003v13c.602.008 1.415.038 2.294.125 1.323.13 2.9.399 4.13.976.518.242 1.08.59 1.576.925z", clipRule: "evenodd" })] })));
};
exports.BookOpen = BookOpen;
