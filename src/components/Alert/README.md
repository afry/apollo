# Alert

#### Example

```jsx
import React from 'react';
import { Alert } from '@afconsult/apollo';

const Example = () => (
  <Alert color="danger">
    <b>Server offline.</b> We are working on solving this issue.
  </Alert>
);
```

#### Props

| Name      | PropType         | Default     | Description                                                                                                         |
| --------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element.                                                                           |
| color     | `string`         | `primary`   | Specifies the alert color. Can be one of `'primary'`, `'secondary'`, `'danger'`, `'success'`, `'warning'`, `'info'` |
| onToggle  | `func`           | `undefined` | Called for toggling `open` in the controlling component.                                                            |
| open      | `bool`           | `true`      | Control the alert visibility state.                                                                                 |
| tag       | `[func, string]` | `div`       | Specifies the DOM element to be used.                                                                               |
