import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Teacher from './Teacher';
import Student from './Student';


const Nav = () => (

  <div style={{ display:"flex", flexDirection:"row", textAlign: "left", padding: "10px" }}>
    <div style={{ paddingTop: "10px"}}>
      <Link to="/teacherview"> Teacher View</Link>
    </div>
    <div style={{paddingLeft:"20px", paddingTop: "10px", paddingBottom: "20px" }}>
      <Link to="/studentview"> Student View</Link>
    </div>
  </div>
);

const TeacherView = () => 
(<div><Teacher/></div>);

const StudentView = () =>
(<div><Student/></div>);


class Pages extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div  style={{ textAlign: "left", padding: "10px" }}>
      <Router>
          <Nav />
          <Route exact path="/teacherview" component={TeacherView} />
          <Route exact path="/studentview" component={StudentView} />
          {/* <div onClick={this.reload}>Reload</div> */}
      </Router>
      </div>
    );
  }
}
export default Pages;