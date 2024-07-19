import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Landing from './landing';
import { Container, Nav } from 'react-bootstrap';

class Unknown extends Component {

  render() {
    return (
      <Container className='landing-row d-flex flex-column justify-content-center align-items-center'>
        <h1>Beware traveller!!! You are trying to enter unknown realms!</h1>
        <h1>Go back to <Link className='noul-link primary-text' to={"/"}>home page</Link> </h1>
      </Container>
    );
  }
}

export default Unknown;
