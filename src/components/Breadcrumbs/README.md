# Breadcrumbs

#### Example
``` jsx
import React from 'react';
import { Breadcrumbs, Breadcrumb } from '@afconsult/apollo';

export default class Example extends React.PureComponent {  
  render() {
    return (
      <Breadcrumbs>
        <Breadcrumb>first</Breadcrumb>
        <Breadcrumb>second</Breadcrumb>
        <Breadcrumb active>active</Breadcrumb>
      </Breadcrumbs>
    );
  }
}
```

#### Props [Breadcrumbs](./)
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| children  | `node`   | `undefined` | | 
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| tag       | `[func, string]` | `nav` | Specifies the DOM element to be used. |

#### Props [Breadcrumb](../Breadcrumb)
| Name      | PropType | Default     | Description |
|-----------|----------|-------------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| active    | `bool`   | `false`     | | 
| tag       | `[func, string]` | `a` | Specifies the DOM element to be used. |
