import React from 'react';
export interface Props {
    list: Array<ItemType>;
    wrapperClasses?: string | string[] | any;
    customButtons?: {
        next: React.ElementType;
        prev: React.ElementType;
    };
}
export interface ItemType {
    content: React.ElementType;
    onClickItem?: Function;
    itemCustomClass?: string | string[] | any;
}
declare const Simplecarousel: React.FC<Props>;
export interface ButtonsProps {
    Elem?: React.ElementType;
    className: string;
    handleClick: Function;
    children: React.ReactNode;
}
export default Simplecarousel;
