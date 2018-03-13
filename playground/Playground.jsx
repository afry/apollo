/* eslint-disable */
import React from 'react';

import NavsExample from './examples/NavsExample';
import NavbarExample from './examples/NavbarExample';


import Avatar from '../src/components/Avatar';

export default function Playground() {
  return (
    <div>
      <Avatar alt="JW" size="x-small" src="404" />
      <NavbarExample />
      <NavsExample /> 
    </div>
  );
}
