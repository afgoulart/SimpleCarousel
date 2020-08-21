import { ClassValue } from 'classnames/types';

export interface CarouselProps {
  list: Array<ItemType>;
  wrapperClasses?: string | string[] | any;
  showBullets?: boolean;
  customButtons?: {
    next: React.ElementType;
    prev: React.ElementType;
  };
}

export interface ItemType {
  content: JSX.Element;
  onClickItem?: Function;
  itemCustomClass?: ClassValue[] | any;
}

export interface ItemProps {
  item: ItemType;
  id: string;
  refer: Function;
  setScroll?: Function;
}

export interface ButtonsProps {
  Elem?: React.ElementType;
  className: string;
  handleClick: Function;
  children: React.ReactNode;
}
