let o;
var s = (r) => {
    if (!o) {
        const n = r.forwardRef(({color: t = "currentColor", size: e = 24, ...i}, p) => {
            return r.createElement("svg", {ref: p, xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: t, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", ...i}, r.createElement("polyline", {points: "15 14 20 9 15 4"}), r.createElement("path", {d: "M4 20v-7a4 4 0 0 1 4-4h12"}));
        });
        n.displayName = "CornerUpRight",o = n;
    }
    return o;
};
const __SvMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {svContractVersion: "1"}}, __SvMetadata__: {type: "variable"}}};
export { __SvMetadata__, s as default };