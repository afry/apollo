/* eslint-disable */
import React from 'react';

import {
  AvatarExample,
  BadgeExample,
  BreadcrumbsExample,
  ButtonExample,
  CardExample,
  DropdownExample,
  FormExample,
  JumbotronExample,
  MentionExample,
  ModalExample,
  NavbarExample,
  NavsExample,
  TagExample,
} from './examples';

export default function Playground() {
  return (
    <div>
      <NavbarExample />
      <NavsExample style={{ margin: '100px 0' }} />
      <ModalExample />
      <AvatarExample />
      <BreadcrumbsExample />
      <ButtonExample />
      <CardExample />
      <DropdownExample />
      <FormExample />
      <JumbotronExample />
      <BadgeExample />
      <MentionExample />
      <TagExample />
    </div>
  );
}
