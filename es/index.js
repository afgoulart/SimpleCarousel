import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
var Simplecarousel = function (props) {
    var _a = useState(0), refScroll = _a[0], setRefScroll = _a[1];
    var _b = useState(), refWrapper = _b[0], setRefWrapper = _b[1];
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
                return (React.createElement("div", { key: "simple-carousel-item-" + i, className: classnames("simple-carousel-item", item.itemCustomClass), onClick: function (e) { var _a, _b, _c; return (_c = (_a = item) === null || _a === void 0 ? void 0 : (_b = _a).onClickItem) === null || _c === void 0 ? void 0 : _c.call(_b, e); } }, item.content));
            })),
        React.createElement("button", { className: classnames('btn-scroll prev', {
                hidden: props.list && props.list.length < 2,
            }), onClick: function (e) { return onPrev(); } }, "<"),
        React.createElement("button", { className: classnames('btn-scroll next', {
                hidden: props.list && props.list.length < 2,
            }), onClick: function (e) { return onNext(); } }, ">")));
};
export default Simplecarousel;
//# sourceMappingURL=index.js.map