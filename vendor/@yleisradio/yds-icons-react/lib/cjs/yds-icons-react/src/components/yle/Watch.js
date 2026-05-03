"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Watch = (_a) => {
    var { title = undefined, titleId = undefined, width = '24', height = '24', color = 'currentColor' } = _a, props = tslib_1.__rest(_a, ["title", "titleId", "width", "height", "color"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, fill: "none", viewBox: "0 0 24 24", "aria-hidden": title ? undefined : true, "aria-labelledby": titleId }, props, { children: [title ? (0, jsx_runtime_1.jsx)("title", { id: titleId, children: title }) : null, (0, jsx_runtime_1.jsx)("path", { fill: color, fillRule: "evenodd", d: "M14.16 0a2.98 2.98 0 0 1 2.022.781c.553.505.898 1.2.965 1.948l-.002-.001.002.002.312 3.422A7.98 7.98 0 0 1 20 12a7.98 7.98 0 0 1-2.541 5.848l-.312 3.422a3 3 0 0 1-.96 1.944 2.98 2.98 0 0 1-2.014.786H9.84a2.98 2.98 0 0 1-2.022-.781 3 3 0 0 1-.965-1.948l.001.001-.001-.002-.312-3.422A7.98 7.98 0 0 1 4 12a7.98 7.98 0 0 1 2.541-5.848l.312-3.422c.067-.745.41-1.439.96-1.944A2.98 2.98 0 0 1 9.826 0zm1.003 2.91.165 1.813A8 8 0 0 0 12 4a8 8 0 0 0-3.328.723l.165-1.813A1 1 0 0 1 9.83 2h4.337a.994.994 0 0 1 .997.91ZM6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m9.328 7.277A8 8 0 0 1 12 20a8 8 0 0 1-3.328-.723l.165 1.813a1 1 0 0 0 .997.91h4.338a.995.995 0 0 0 .99-.91zM13 9a1 1 0 1 0-2 0v3a1 1 0 0 0 .293.707l1.5 1.5a1 1 0 0 0 1.414-1.414L13 11.586z", clipRule: "evenodd" })] })));
};
exports.Watch = Watch;
