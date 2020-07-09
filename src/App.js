import './App.css';
import Pages from './Pages'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Pages />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
