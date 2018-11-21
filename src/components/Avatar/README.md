## Avatar
Avatars are used to display a thumbnail of an individual.

#### Example
``` javascript
class Example extends React.PureComponent {
  render() {
    return (
      <Avatar
        name="Jon Wahlström"
        size="x-small"
        src="http://via.placeholder.com/400x400"
      />
    );
  }
}
```

#### Props
| Name      | PropType | Default   | Description |
|-----------|----------|-----------|-------------|
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| name      | `string` | `undefined` | |
| size      | `string` | `medium`    | Specifies the avatar size. Can be one of `['x-small', 'small', 'medium', 'large', 'x-large']` |
| src       | `string` | `undefined` | Specifies the url of an image. |
| tag       | `[func, string]`| `img`| Specifies the DOM element to be used. |