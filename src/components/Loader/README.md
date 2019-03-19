# Loader

Loader component is a wrapper of [React Lottie](https://www.npmjs.com/package/react-lottie).

#### Example

```jsx
import React from 'react';
import { Loader } from '@afconsult/apollo';

const Example = () => <Loader width={25} height={25} />;
```

#### Props

| Name     | PropType           | Default | Description                                   |
| -------- | ------------------ | ------- | --------------------------------------------- |
| autoPlay | `bool`             | `true`  | Bodymovin option to auto plays the animation. |
| height   | `[number, string]` | `250`   | Pixel value for lottie container height.      |
| loop     | `bool`             | `true`  | Bodymovin option to loop the animation.       |
| width    | `[number, string]` | `250`   | Pixel value for lottie container width.       |
