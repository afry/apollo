# Apollo Design System
[![npm version](https://badge.fury.io/js/%40afconsult%2Fapollo.svg)](https://badge.fury.io/js/%40afconsult%2Fapollo)
[![Build Status](https://travis-ci.org/afconsult/apollo.svg?branch=develop)](https://travis-ci.org/afconsult/apollo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />
Design system for Enterprise Web Apps

## Getting Started
### Install
Install with npm:
```bash
npm install @afconsult/apollo --save
```
Install with [Yarn](https://yarnpkg.com/en/):
```bash
yarn add @afconsult/apollo
```

### Example
1. Import the stylesheet:
```javscript
import '@afconsult/apollo/dist/css/apollo.css';
```

2. Import required apollo components:
```javascript
import { Button, Form, FormGroup, Input, Label } from '@afconsult/apollo';
```

3. Use the components:
```javascript
class Example extends React.PureComponent {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="example">Example Input</Label>
          <Input id="example" placeholder="Inser text here..">
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
```

### Components
- [Avatar](./src/components/Avatar)
- [Badge](./src/components/Badge)
- [Breadcrumbs](./src/components/Breadcrumbs)
- [Buttons](./src/components/Button)
- [Button Group](./src/components/ButtonGroup)
- [Collapse](./src/components/Collapse)
- [Container](./src/components/Container)
- [Dropdowns](./src/components/Dropdown)
- [Follow](./src/components/Follow)
- [Forms](./src/components/Form)
- [Jumbotron](./src/components/Jumbotron)
- [Loader](./src/components/Loader)
- [Mention](./src/components/Mention)
- [Modals](./src/components/Modal)
- [Navs](./src/components/Nav)
- [Navbars](./src/components/Navbar)
- [Tag](./src/components/Tag)

## Contribute
Feel free to [create an issue or feature request](https://github.com/afconsult/apollo/issues/new).
At this point we're not accepting any pull requests.

### Development
1. Install dependencies:
```bash
yarn install
```

2. Run examples at `http://localhost:8080/` with webpack dev server:
```bash
yarn start
```

## Authors
**Jon Wahlström** ([jonwa](https://github.com/jonwa))

See also the list of [contributors](https://github.com/afconsult/apollo/contributors).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
