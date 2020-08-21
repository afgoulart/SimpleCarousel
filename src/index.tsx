import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
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

const Simplecarousel: React.FC<Props> = (props: Props) => {
  const [refScroll, setRefScroll] = useState<number>(0);
  const [refWrapper, setRefWrapper] = useState<any>();

  useEffect(() => {
    if (!refWrapper) return;

    refWrapper.scrollLeft = refScroll;
  }, [refScroll, refWrapper]);

  const onNext = () => {
    const halfWidth = refWrapper.offsetWidth / 2;
    const scroll = refScroll + halfWidth;
    if (scroll > refWrapper.scrollWidth) return;
    setRefScroll(scroll);
  };

  const onPrev = () => {
    const halfWidth = refWrapper.offsetWidth / 2;
    const scroll = refScroll - halfWidth;
    if (scroll < 0) return setRefScroll(0);
    setRefScroll(scroll);
  };

  return (
    <div className="simple-carousel">
      <div ref={(inst) => setRefWrapper(inst)} className={classnames('simple-carousel-wrapper', props.wrapperClasses)}>
        {props.list &&
          props.list.length > 0 &&
          props.list.map((item: ItemType, i) => {
            return (
              <div
                key={`simple-carousel-item-${i}`}
                className={classnames(`simple-carousel-item`, item.itemCustomClass)}
                onClick={(e) => item.onClickItem?.(e)}
              >
                {item.content}
              </div>
            );
          })}
      </div>

      <CustomButton
        Elem={props.customButtons?.prev}
        className={classnames('btn-scroll prev', {
          hidden: props.list && props.list.length < 2,
        })}
        handleClick={onPrev}
      >{`Prev`}</CustomButton>

      <CustomButton
        Elem={props.customButtons?.next}
        className={classnames('btn-scroll next', {
          hidden: props.list && props.list.length < 2,
        })}
        handleClick={onNext}
      >{`Next`}</CustomButton>
    </div>
  );
};

export interface ButtonsProps {
  Elem?: React.ElementType;
  className: string;
  handleClick: Function;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonsProps> = (props: ButtonsProps) => {
  if (!props.Elem)
    return (
      <button className={props.className} onClick={(e) => props.handleClick(e)}>
        {props.children}
      </button>
    );

  const Btn: React.ElementType = props.Elem;

  return (
    <Btn className={props.className} onClick={props.handleClick}>
      {props.children}
    </Btn>
  );
};

export default Simplecarousel;
