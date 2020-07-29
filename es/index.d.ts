import React from 'react';
interface Props {
    list: Array<ItemType>;
    wrapperClasses?: string | string[] | any;
    lastItem?: JSX.Element;
    customButtons?: {
        next: JSX.Element;
        prev: JSX.Element;
    };
}
export interface ItemType {
    item: any;
    type: string;
    content: JSX.Element;
    id: string | number;
    checked: boolean;
    onClickItem?: Function;
    itemCustomClass?: string | string[] | any;
}
declare const Simplecarousel: React.FC<Props>;
export default Simplecarousel;
