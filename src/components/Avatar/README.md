# Avatar

Avatars are used to display a thumbnail of an individual.

#### Example

```jsx
import React from 'react';
import {Avatar} from '@afconsult/apollo';

export default class Example extends React.PureComponent {
  render() {
    return (
      <Avatar
        name="Willow Mcdonald"
        size="x-small"
        src="http://via.placeholder.com/400x400"
      />
    );
  }
}
```

#### Props

| Name      | PropType         | Default     | Description                                                                                                   |
| --------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element.                                                                     |
| initials  | `string`         | `undefined` | Specifies the initials of the individual. Displayed as an alternative text on `src` error.                    |
| name      | `string`         | `undefined` | Specifies the name of the individual. Converted and displayed as `initials` of two characters on `src` error. |
| size      | `string`         | `medium`    | Specifies the avatar size. Can be one of `'x-small'`, `'small'`, `'medium'`, `'large'`, `'x-large'`           |
| src       | `string`         | `undefined` | Specifies the url of an image.                                                                                |
| tag       | `[func, string]` | `img`       | Specifies the DOM element to be used.                                                                         |
