import React from 'react';
import { ButtonsProps } from './types';

export const CustomButton: React.FC<ButtonsProps> = (props: ButtonsProps) => {
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

export default { CustomButton };
