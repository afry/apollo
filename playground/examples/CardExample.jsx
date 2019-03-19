import React from 'react';
import {
  Card,
  CardBody,
  CardGroup,
  CardImage,
  CardLink,
  CardText,
  CardTitle,
  Container,
} from '../../src';

const CardExample = () => (
  <Container style={{marginBottom: '50px', marginTop: '50px'}}>
    <h1>Cards</h1>
    <CardGroup style={{height: '394px', width: '75%'}}>
      <Card dark>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
          <CardLink href="#">
            <small>
              <b>Card Link</b> 3 November
            </small>
          </CardLink>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
        </CardBody>
        <CardImage
          placement="bottom"
          src="http://via.placeholder.com/256x180"
        />
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Card Link</CardLink>
        </CardBody>
      </Card>
    </CardGroup>
    <br />
    <CardGroup segmented style={{height: '394', width: '75%'}}>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
          <CardText>
            <small>Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImage src="http://via.placeholder.com/256x180" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  </Container>
);

export default CardExample;
