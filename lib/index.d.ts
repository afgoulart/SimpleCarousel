import React from 'react';
export interface Props {
    list: Array<ItemType>;
    wrapperClasses?: string | string[] | any;
    customButtons?: {
        next: JSX.Element;
        prev: JSX.Element;
    };
}
export interface ItemType {
    content: JSX.Element;
    onClickItem?: Function;
    itemCustomClass?: string | string[] | any;
}
declare const Simplecarousel: React.FC<Props>;
export default Simplecarousel;
