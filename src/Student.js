import React, { Component } from 'react';
import '../src/Table.css';
import { Table } from 'react-bootstrap';
import { Row, Col, Form, Button } from 'react-bootstrap';

var value = '1'

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [],
      assignmentData: []
    }
  }
  componentDidMount() {
    this.getStudent();
  }

  handleButtonClick(params) {
    const { inputRef } = this.state;
    value = parseInt(inputRef.current.value)
    console.log(value)
    this.getStudent()
  }

  getStudent = () => {
    fetch('http://localhost:8080/api/student?studentId=' + value)
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          try {
            if (results.data.students != null) {
              this.setState({ studentData: results.data.students[0] })
              this.setState({ assignmentData: results.data.students[0].assignments })
            }
            else {
              this.setState({ studentData: [] })
              this.setState({ assignmentData: [] })
            }
          }
          catch (err) {
            console.log(err)
          }
        }
      )
  }


  render() {
    return (
      <div>
        <Form.Row className="mb-33">
          <Form.Group as={Row}>
            <Col sm={2}>
              <Form.Label>ID</Form.Label>
            </Col>
            <Col sm={8}>
              <Form.Control type="number" placeholder="Enter ID" defaultValue='1' />
            </Col>
            <Col sm={2}>
              <Button onClick={this.handleButtonClick.bind(this)} variant="primary">OK</Button>
            </Col>
          </Form.Group>
        </Form.Row>
        <div>
          <div>
            <h4 style={{ textAlign: "left" }}>Student Name - {this.state.studentData.name}</h4>
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            {this.state.assignmentData.map((assignment, index) => {
              return (
                <tr key={index}>
                  <td>{assignment.id}</td>
                  <td>{assignment.name}</td>
                  <td>
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Question Name</th>
                          <th>Result</th>
                          <th>Time Spent(min)</th>
                          <th>Number Of Attempts</th>
                          <th>Review</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignment.questions.map((questions, index) => {
                          return (
                            <tr key={index}>
                              <td>{questions.id}</td>
                              <td>{questions.name}</td>
                              <td>{questions.result}</td>
                              <td>{questions.timeSpentMints}</td>
                              <td>{questions.numberOfAttempts}</td>
                              <td>{questions.review}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Student;