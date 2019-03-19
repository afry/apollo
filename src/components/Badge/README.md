# Badge

#### Example

```jsx
import React from 'react';
import { Badge } from '@afconsult/apollo';

const Example = () => (
  <React.Fragment>
    <Badge>Group</Badge>
    <Badge color="secondary">Project</Badge>
  </React.Fragment>
);
```

#### Props

| Name      | PropType         | Default     | Description                                                          |
| --------- | ---------------- | ----------- | -------------------------------------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element.                            |
| color     | `string`         | `primary`   | Specifies the color scheme. Can be one of `'primary'`, `'secondary'` |
| tag       | `[func, string]` | `span`      | Specifies the DOM element to be used.                                |
