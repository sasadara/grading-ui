import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import '../src/Table.css';

var data = []

class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      teacherData: [],
      studentData: []
    }
  }
  componentDidMount() {
    this.getTeacher();
  }


  getTeacher() {
    fetch('http://localhost:8080/api/teacher')
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          this.setState({ teacherData: results.data.teachers[0] })
          this.setState({ studentData: results.data.teachers[0].students })
        }
      )
  }


  render() {
    return (
      <div>
        <div>
          <div>
            <h4>ID - {this.state.teacherData.id}, Teacher Name - {this.state.teacherData.name}</h4>
          </div>
        </div>
        <table>
          <thead>
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
        </table>
      </div>
    );
  }
}

export default Teacher;