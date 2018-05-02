import React from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardText,
  CardTitle,
  Container
} from '../../src';

const AvatarExample = () => (
  <Container>
    <CardGroup style={{height: '520px'}}>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    </CardGroup>

    <CardGroup segmented style={{height: '520px'}}>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  </Container>
);

export default AvatarExample;
