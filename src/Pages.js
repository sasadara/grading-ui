import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Teacher from './Teacher';
import Student from './Student';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Row, Col, Form, Button } from 'react-bootstrap';


const NavigationPanel = () => (
  <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/teacherview">Teacher View</Nav.Link>
      <Nav.Link as={Link} to="/studentview">Student View</Nav.Link>
    </Nav>
  </Navbar>
);

const TeacherView = () =>
  (<div><Teacher /></div>);

const StudentView = () =>
  (<div><Student /></div>);


class Pages extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Row className="mb-3">
            <Col>
              <NavigationPanel />
            </Col>
          </Row>

          {/* <Route exact path="/teacherview" component={TeacherView} /> */}
          <Route exact path="/teacherview" render={() => <Teacher />} />

          {/* <Route exact path="/studentview" component={StudentView} /> */}
          <Route exact path="/studentview" render={() => <Student />} />

          {/* <div onClick={this.reload}>Reload</div> */}
        </Router >
      </div >
    );
  }
}
export default Pages;