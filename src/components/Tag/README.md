### Tag 

```javascript
const Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
  }

  render() {
    return (
      <Tag
        icon="https://picsum.photos/200/200/?image=1"
        onClose={this.handleClose}
      >Stockholm
      </Tag>
    );
  }
}
```

  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,

#### Props
| Name      | PropType | Default   | Description |
|-----------|----------|-----------|-------------|
| children  | [`func`, `node`, `string`] | `undefined` | |
| className | `string` | `undefined` | Classes to be applied to the DOM element. |
| color     | `string` | `secondary` | Specifies the tag color. Can be one of `'primary'` and `'secondary'`. |
| icon      | `string` | `undefined` | Specifies the url of an image icon. |
| onClick   | `func`   | `undefined` | Called when the DOM element is clicked. | 
| onClose   | `func`   | `undefined` | |