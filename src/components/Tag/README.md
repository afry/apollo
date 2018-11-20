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
      </Follow>
    );
  }
}
```