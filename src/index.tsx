import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

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
      <div
        ref={(inst) => setRefWrapper(inst)}
        className={classnames('simple-carousel-wrapper', props.wrapperClasses)}
      >
        {props.list &&
          props.list.length > 0 &&
          props.list.map((item: ItemType, i) => {
            return (
              <div
                key={`simple-carousel-item-${item.type}-${i}`}
                className={classnames(
                  `simple-carousel-item ${item.id}`,
                  item.itemCustomClass
                )}
                onClick={(e) => item?.onClickItem?.(e)}
              >
                {item.content}
              </div>
            );
          })}
        {props.lastItem}
      </div>

      <button
        className={classnames('btn-scroll prev', {
          hidden: props.list && props.list.length < 2,
        })}
        onClick={(e: any) => onPrev()}
      >
        {`<`}
      </button>
      <button
        className={classnames('btn-scroll next', {
          hidden: props.list && props.list.length < 2,
        })}
        onClick={(e: any) => onNext()}
      >
        {`>`}
      </button>
    </div>
  );
};

export default Simplecarousel;
