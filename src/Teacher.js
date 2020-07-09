import React, { Component } from 'react';
import styles from '../src/Table.css';

function  value(){
  var v = (document.getElementById("id")==null) ? 1 :document.getElementById("id").value;
  console.log(v)
  return v
}


class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: [],
      studentData: [],
      id : '0'
    }
  }
  componentDidMount() {
    this.getTeacher();
  }

  getTeacher = () => {
    fetch('http://localhost:8080/api/teacher?teacherId=' + value())
      .then(results => results.json())
      .then(
        (results) => {
          console.log(results.data)
          try {
            if(results.data.teachers != null){
              this.setState({ teacherData: results.data.teachers[0] })
              this.setState({ studentData: results.data.teachers[0].students })
            }
            else{
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
    return (
      <div>
        ID:
        <input style={{padding: "1px" }} type="number" id="id" min='1' defaultValue= '1' />
        <button id="okBtn" onClick={this.getTeacher}>OK</button>
        <div>
          <div>
            <h4 style={{textAlign:"left"}}>Teacher Name - {this.state.teacherData.name}</h4>
          </div>
        </div>
        <table>
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
        </table>
      </div>
    );
  }
}

export default Teacher;