import React from 'react';
import {
  Breadcrumb,
  Breadcrumbs,
  Container,
} from '../../src';

const BreadcrumbsExample = () => (
  <Container>
    <h1>Breadcrumbs</h1>
    <Breadcrumbs>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Overview</Breadcrumb>
      <Breadcrumb>Information</Breadcrumb>
      <Breadcrumb active>Members</Breadcrumb>
    </Breadcrumbs>
  </Container>
);

export default BreadcrumbsExample;
