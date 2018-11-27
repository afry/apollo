# Jumbotron

#### Example
```jsx
import React from 'react';
import { Jumbotron } from '@afconsult/apollo';

const Example extends React.PureComponent {
  render() {
    return (
      <Jumbotron>
        <h1>Lorem ipsum dolor</h1>
        <p>Put a bird on it ethical fanny pack shoreditch la croix.</p>
      </Jumbotron>
    );
  }
}
```

#### Props
| Name      | PropType | Default      | Description |
|-----------|----------|--------------|-------------|
| className | `string` | `undefined`  | Classes to be applied to the DOM element. |
| tag       | `[func, string] `| `div`| Specifies the DOM element to be used. |
