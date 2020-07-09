import React, { Component } from 'react';
// import MaterialTable, { MTableToolbar } from 'material-table';
import '../src/Table.css';


class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentData: [],
      assignmentData: []
    }
  }
  componentDidMount() {
    this.getStudent();
  }


  getStudent() {
    fetch('http://localhost:8080/api/student')
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          this.setState({ studentData: results.data.students[0] })
          this.setState({ assignmentData: results.data.students[0].assignments })
        }
      )
  }


  render() {
    return (
      <div>
        <div>
          <div>
            <h4>ID - {this.state.studentData.id}, Student Name - {this.state.studentData.name}</h4>
          </div>
        </div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default Student;