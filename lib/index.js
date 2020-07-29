"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Simplecarousel = function (props) {
    var _a, _b;
    var _c = react_1.useState(0), refScroll = _c[0], setRefScroll = _c[1];
    var _d = react_1.useState(), refWrapper = _d[0], setRefWrapper = _d[1];
    react_1.useEffect(function () {
        if (!refWrapper)
            return;
        refWrapper.scrollLeft = refScroll;
    }, [refScroll, refWrapper]);
    var onNext = function () {
        var halfWidth = refWrapper.offsetWidth / 2;
        var scroll = refScroll + halfWidth;
        if (scroll > refWrapper.scrollWidth)
            return;
        setRefScroll(scroll);
    };
    var onPrev = function () {
        var halfWidth = refWrapper.offsetWidth / 2;
        var scroll = refScroll - halfWidth;
        if (scroll < 0)
            return setRefScroll(0);
        setRefScroll(scroll);
    };
    return (react_1.default.createElement("div", { className: "simple-carousel" },
        react_1.default.createElement("div", { ref: function (inst) { return setRefWrapper(inst); }, className: classnames_1.default('simple-carousel-wrapper', props.wrapperClasses) }, props.list &&
            props.list.length > 0 &&
            props.list.map(function (item, i) {
                return (react_1.default.createElement("div", { key: "simple-carousel-item-" + i, className: classnames_1.default("simple-carousel-item", item.itemCustomClass), onClick: function (e) { var _a, _b, _c; return (_c = (_a = item) === null || _a === void 0 ? void 0 : (_b = _a).onClickItem) === null || _c === void 0 ? void 0 : _c.call(_b, e); } }, item.content));
            })),
        react_1.default.createElement(CustomButton, { Elem: (_a = props.customButtons) === null || _a === void 0 ? void 0 : _a.prev, className: classnames_1.default('btn-scroll prev', {
                hidden: props.list && props.list.length < 2,
            }), handleClick: onPrev }, "Prev"),
        react_1.default.createElement(CustomButton, { Elem: (_b = props.customButtons) === null || _b === void 0 ? void 0 : _b.next, className: classnames_1.default('btn-scroll next', {
                hidden: props.list && props.list.length < 2,
            }), handleClick: onNext }, "Next")));
};
var CustomButton = function (props) {
    if (!props.Elem)
        return (react_1.default.createElement("button", { className: props.className, onClick: function (e) { return props.handleClick(e); } }, props.children));
    var Btn = props.Elem;
    return (react_1.default.createElement(Btn, { className: props.className, onClick: props.handleClick }, props.children));
};
exports.default = Simplecarousel;
//# sourceMappingURL=index.js.map