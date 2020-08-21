import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
var Simplecarousel = function (props) {
    var _a, _b;
    var _c = useState(0), refScroll = _c[0], setRefScroll = _c[1];
    var _d = useState(), refWrapper = _d[0], setRefWrapper = _d[1];
    useEffect(function () {
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
    return (React.createElement("div", { className: "simple-carousel" },
        React.createElement("div", { ref: function (inst) { return setRefWrapper(inst); }, className: classnames('simple-carousel-wrapper', props.wrapperClasses) }, props.list &&
            props.list.length > 0 &&
            props.list.map(function (item, i) {
                return (React.createElement("div", { key: "simple-carousel-item-" + i, className: classnames("simple-carousel-item", item.itemCustomClass), onClick: function (e) { var _a; return (_a = item.onClickItem) === null || _a === void 0 ? void 0 : _a.call(item, e); } }, item.content));
            })),
        React.createElement(CustomButton, { Elem: (_a = props.customButtons) === null || _a === void 0 ? void 0 : _a.prev, className: classnames('btn-scroll prev', {
                hidden: props.list && props.list.length < 2,
            }), handleClick: onPrev }, "Prev"),
        React.createElement(CustomButton, { Elem: (_b = props.customButtons) === null || _b === void 0 ? void 0 : _b.next, className: classnames('btn-scroll next', {
                hidden: props.list && props.list.length < 2,
            }), handleClick: onNext }, "Next")));
};
var CustomButton = function (props) {
    if (!props.Elem)
        return (React.createElement("button", { className: props.className, onClick: function (e) { return props.handleClick(e); } }, props.children));
    var Btn = props.Elem;
    return (React.createElement(Btn, { className: props.className, onClick: props.handleClick }, props.children));
};
export default Simplecarousel;
//# sourceMappingURL=index.js.map