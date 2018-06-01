# apollo
[![npm version](https://badge.fury.io/js/%40afconsult%2Fapollo.svg)](https://badge.fury.io/js/%40afconsult%2Fapollo)
[![Build Status](https://travis-ci.org/afconsult/apollo.svg?branch=develop)](https://travis-ci.org/afconsult/apollo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />
Design system for ÅF Web Apps

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
1. import apollo CSS in your ```src/index.js``` file:
```javscript
import '@afconsult/apollo/dist/css/apollo.css';
```

2. Import required apollo components in your ```src/index.js``` file or in any of your custom component files:
```javascript
import { Button, Form, FormGroup, Input, Label } from '@afconsult/apollo';
```

3. Tell React to render the components
```javascript
ReactDOM.render(
  <Form>
    <FormGroup>
      <Label for="example">Example Input</Label>
      <Input id="example" placeholder="Inser text here..">
    </FormGroup>
    <Button type="submit">Submit</Button>
  </Form>,
  document.getElementById('app');
)
```

## Contribute
Feel free to [create an issue or feature request](https://github.com/afconsult/apollo/issues/new).
At this point we're not accepting any pull requests.

## Authors
**Jon Wahlström** ([jonwa](https://github.com/jonwa))

See also the list of [contributors](https://github.com/afconsult/apollo/contributors).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
