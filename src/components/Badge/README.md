# Badge

#### Example
``` jsx
import React from 'react';
import { Badge } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <div>
        <Badge>Group</Badge>
        <Badge color="secondary">Project</Badge>
      </div>
    );
  }
}
```

#### Props
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| color     | `string` | `primary` | Specifies the button color. Can be one of `'primary'`, `'secondary'` | 
| tag       | `[func, string]` | `span` | Specifies the DOM element to be used. |
