import React, { Component } from 'react';
import '../src/Table.css';


function  value(){
  var v = (document.getElementById("id")==null) ? 1 :document.getElementById("id").value;
  console.log(v)
  return v
}

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

  getStudent = () => {
    fetch('http://localhost:8080/api/student?studentId=' + value())
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          try {
            if(results.data.students != null){
            this.setState({ studentData: results.data.students[0] })
            this.setState({ assignmentData: results.data.students[0].assignments })
            }
            else{
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
        ID:
        <input style={{ padding: "1px" }} type="number" id="id" min='1' defaultValue='1' />
        <button id="okBtn" onClick={this.getStudent}>OK</button>
        <div>
          <div>
            <h4 style={{ textAlign: "left" }}>Student Name - {this.state.studentData.name}</h4>
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