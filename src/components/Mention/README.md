# Mention

#### Example

```jsx
import React from 'react';
import { Mention } from '@afconsult/apollo';

const Example extends React.PureComponent {
  render() {
    return (
      <Mention>
        Stockholm
      </Mention>
    );
  }
}
```

#### Props

| Name     | PropType               | Default     | Description                       |
| -------- | ---------------------- | ----------- | --------------------------------- |
| children | `[func, node, string]` | `undefined` | Collection of DOM child elements. |
