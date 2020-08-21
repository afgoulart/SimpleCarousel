import React from 'react';
import { ClassValue } from 'classnames/types';
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
    itemCustomClass?: ClassValue[] | any;
}
declare const Simplecarousel: React.FC<Props>;
export interface ButtonsProps {
    Elem?: React.ElementType;
    className: string;
    handleClick: Function;
    children: React.ReactNode;
}
export default Simplecarousel;
//# sourceMappingURL=index.d.ts.map