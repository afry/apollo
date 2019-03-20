# Breadcrumbs

#### Example

```jsx
import React from 'react';
import { Breadcrumbs, Breadcrumb } from '@afconsult/apollo';

const Example = () => (
  <Breadcrumbs>
    <Breadcrumb>first</Breadcrumb>
    <Breadcrumb>second</Breadcrumb>
    <Breadcrumb active>active</Breadcrumb>
  </Breadcrumbs>
);
```

#### Props [Breadcrumbs](./)

| Name      | PropType         | Default     | Description                               |
| --------- | ---------------- | ----------- | ----------------------------------------- |
| children  | `node`           | `undefined` | Collection of DOM child elements.         |
| className | `string`         | `undefined` | Classes to be applied to the DOM element. |
| tag       | `[func, string]` | `nav`       | Specifies the DOM element to be used.     |

#### Props [Breadcrumb](../Breadcrumb)

| Name      | PropType         | Default     | Description                               |
| --------- | ---------------- | ----------- | ----------------------------------------- |
| className | `string`         | `undefined` | Classes to be applied to the DOM element. |
| active    | `bool`           | `false`     | Control the breadcrumb state.             |
| tag       | `[func, string]` | `a`         | Specifies the DOM element to be used.     |
