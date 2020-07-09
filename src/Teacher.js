import React, { Component } from 'react';
import styles from '../src/Table.css';
import { Table } from 'react-bootstrap';
import { Row, Col, Form, Button } from 'react-bootstrap';

var value = '1'

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: [],
      studentData: [],
      id: '0',
      inputRef: React.createRef()
    }
  }
  componentDidMount() {
    this.getTeacher();
  }

  handleButtonClick(params) {
    const { inputRef } = this.state;
    value = parseInt(inputRef.current.value)
    console.log(value)
    this.getTeacher()
  }


  getTeacher = () => {
    fetch('http://localhost:8080/api/teacher?teacherId=' + value)
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          try {
            if (results.data.teachers != null) {
              this.setState({ teacherData: results.data.teachers[0] })
              this.setState({ studentData: results.data.teachers[0].students })
            }
            else {
              this.setState({ studentData: [] })
              this.setState({ teacherData: [] })
            }
          }
          catch (err) {
            console.log(err)
          }
        }
      )
  }


  render() {
    const { inputRef } = this.state;
    return (
      <div>
        <Form.Row className="mb-33">
          <Form.Group as={Row}>
            <Col sm={2}>
              <Form.Label>ID</Form.Label>
            </Col>
            <Col sm={8}>
              <Form.Control type="number" placeholder="Enter ID" defaultValue='1' ref={inputRef} />
            </Col>
            <Col sm={2}>
              <Button onClick={this.handleButtonClick.bind(this)} variant="primary">OK</Button>
            </Col>
          </Form.Group>
        </Form.Row>
        <div>
          <div>
            <h4 style={{ textAlign: "left" }}>Teacher Name - {this.state.teacherData.name}</h4>
          </div>
        </div>
        <Table>
          <thead className={styles.tableheader}>
            <tr>
              <th>Name</th>
              <th>Avg. Time</th>
              <th>Correct Answers</th>
              <th>Incorrect Answers</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentData.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.avgTime}</td>
                  <td>{student.correctAnswers}</td>
                  <td>{student.incorrectAnswers}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Teacher;