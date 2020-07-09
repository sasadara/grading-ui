import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Teacher from './Teacher';
import Student from './Student';


const Nav = () => (
  <div>
      <div><Link to="/teacherview">Teacher View</Link></div>
      <div><Link to="/studentview">Student View</Link></div>
  </div>
);

const TeacherView = () => <div><Teacher/></div>;
const StudentView = () => <div><Student/></div>;

class Pages extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>

        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <div>
          <Nav />
          <Route exact path="/teacherview" component={TeacherView} />
          <Route path="/studentview" component={StudentView} />
        </div>
      </Router>
    );
  }
}
export default Pages;