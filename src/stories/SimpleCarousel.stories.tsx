import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SimpleCarousel from '../SimpleCarousel';
import { CarouselProps } from '../types';

import '../styles.scss';

export default {
  title: 'SimpleCarousel',
  component: SimpleCarousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => <SimpleCarousel {...args} />;

export const NoItems = Template.bind({});
NoItems.args = {
  list: [],
};

export const HasItems = Template.bind({});
HasItems.args = {
  list: [
    {
      content: (
        <div className="box-item">
          <h1>Box Item 1</h1>
          <p>Box in my carousel</p>
        </div>
      ),
    },
    {
      content: (
        <div className="box-item">
          <h1>Box Item 2</h1>
          <p>Box in my carousel</p>
        </div>
      ),
    },
    {
      content: (
        <div className="box-item">
          <h1>Box Item 3</h1>
          <p>Box in my carousel</p>
        </div>
      ),
    },
    {
      content: (
        <div className="box-item">
          <h1>Box Item 4</h1>
          <p>Box in my carousel</p>
        </div>
      ),
    },
  ],
};
