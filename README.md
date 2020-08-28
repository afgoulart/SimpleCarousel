# SimpleCarousel

<h3 align="center">
  <a href="packages/@arranjae/react-simple-carousel">@arranjae/react-simple-carousel</a>
</h3>

<p align="center">
  <a href="https://facebook.github.io/react">React</a> Simple Carousel <br />
  <a href="https://badge.fury.io/js/%40arranjae%2Freact-simple-carousel"><img src="https://badge.fury.io/js/%40arranjae%2Freact-simple-carousel.svg" alt="npm version" height="18"></a>
</p>

## Minimum requirement

- React.js >= 16.3.0 (new context API + forward ref)

## Getting started

`npm install @arranjae/react-simple-carousel`

or

`yarn add @arranjae/react-simple-carousel`

## `<SimpleCarousel list<ItemType[]>={[]} />`

Create a responsive carousel with this component passing items array.

[![Edit nameless-brook-uessi](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nameless-brook-uessi?autoresize=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark&view=preview)

<iframe src="https://codesandbox.io/embed/nameless-brook-uessi?fontsize=14&hidenavigation=1&theme=dark&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="nameless-brook-uessi" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>


### Props

```ts
interface CarouselProps {
  list: Array<ItemType>;
  wrapperClasses?: string | string[] | any;
  showBullets?: boolean;
  customButtons?: {
    next: React.ElementType;
    prev: React.ElementType;
  };
}
```

### Usage

```tsx
<SimpleCarousel list={[{
  content: <div> Item </div>
}]}>
```

### `<ItemType[]>`

This prop receive a array of items typeof ItemType

```tsx
interface ItemType {
  content: JSX.Element;
  onClickItem?: Function;
  itemCustomClass?: ClassValue[] | any;
}
```

## Simple Example (JSX/TSX)

See in folder examples/my-carousel a example using create-react-app

```jsx
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```jsx
// App.jsx
import React from 'react';
import { SimpleCarousel } from '@arranjae/react-simple-carousel';
import '@arranjae/react-simple-carousel/src/styles.scss';

const App = () => {
  return (
    <div>
      <h1>
        Its works!!
        <br /> We have a wonderfull carousel!
      </h1>
      <SimpleCarousel
        list={[
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
        ]}
      />
    </div>
  );
};

export default App;
```

## Thankyou!
