import React, { useEffect } from 'react';
import classnames from 'classnames';
import { ItemProps } from './types';

export const SimpleCarouselItem: React.FC<ItemProps> = (props: ItemProps) => {
  const { item, refer } = props;
  const thisRef = React.useRef<any>();

  useEffect(() => {
    refer(thisRef);
  }, [thisRef, refer]);

  return (
    <div
      ref={thisRef}
      className={classnames(`simple-carousel-item`, item.itemCustomClass)}
      onClickCapture={(e: React.SyntheticEvent) => {
        e.persist();

        thisRef.current.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        props.setScroll?.();
        item.onClickItem?.(e, thisRef);
      }}
    >
      {item.content}
    </div>
  );
};

export default SimpleCarouselItem;
