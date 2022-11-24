import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

export default class  BasicCard extends Component {
    
    
  render() {
    console.log(this.props)
    return (
        <Card style={{ width: '18rem' }} className='mt-4'>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">{this.props.btn}</Button>
          </Card.Body>
        </Card>
      );
  }
}



