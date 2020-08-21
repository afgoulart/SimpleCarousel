import React, { useState } from 'react';
import classnames from 'classnames';
import { SimpleCarouselItem } from '.';
import { CustomButton } from './Common';
import { ItemType, CarouselProps } from './types';

const SimpleCarousel: React.FC<CarouselProps> = (props: CarouselProps) => {
  const [actualScroll, setActualScroll] = useState<number>(0);
  const [wrapperRef, setWrapperRef] = useState<any>();
  const itemsRefs: any = {};

  const onNext = () => {
    if (!wrapperRef) return;
    const halfWidth = wrapperRef.offsetWidth / 2;
    const scroll = actualScroll + halfWidth;
    if (scroll > wrapperRef.scrollWidth) return;
    wrapperRef.scrollLeft = scroll;
    setActualScroll(scroll);
  };

  const onPrev = () => {
    if (!wrapperRef) return;
    const halfWidth = wrapperRef.offsetWidth / 2;
    const scroll = actualScroll - halfWidth;
    if (scroll < 0) {
      wrapperRef.scrollLeft = 0;
      return setActualScroll(0);
    }
    wrapperRef.scrollLeft = scroll;
    setActualScroll(scroll);
  };

  const moveToItem = (i: number) => {
    itemsRefs[`ref-item-${i}`].current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    setActualScroll(wrapperRef.scrollLeft);
  };

  return (
    <div className="simple-carousel">
      <div ref={(inst) => setWrapperRef(inst)} className={classnames('simple-carousel-wrapper', props.wrapperClasses)}>
        {props.list.map((item: ItemType, i) => {
          return (
            <SimpleCarouselItem
              key={i}
              id={`simple-carousel-item-${i}`}
              refer={(inst: any) => {
                itemsRefs[`ref-item-${i}`] = inst;
              }}
              item={item}
              setScroll={() => {
                setActualScroll(wrapperRef.scrollLeft);
              }}
            />
          );
        })}
      </div>
      {props.showBullets && (
        <div className="simple-carousel-bullets">
          {props.list.map((_item: ItemType, i: number) => {
            return (
              <span
                className="simple-carousel-bullets-item"
                key={`bullet-${i}`}
                onClick={() => {
                  moveToItem(i);
                }}
              >
                {i}
              </span>
            );
          })}
        </div>
      )}
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

export default SimpleCarousel;
