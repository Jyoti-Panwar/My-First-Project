import React, { Component } from 'react';
import Router from 'next/router';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            rollno: null,
            score: null,
            email: null,
            update_request: false,
        }
    }
    static async getInitialProps({ query }) {
        return { path: query.id }
    }
    componentDidMount() {
        if (this.props.path) {
            this.setState({ update_request: true })
            this.getdata()
        }
    }
    getdata() {
        fetch("http://localhost:4000/students/" + this.props.path)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    name: result.name,
                    rollno:result.rollno,
                    score:result.score,
                    email: result.email
                })
            })
    }
    create() {
        var url;
        var method;
        if (this.props.path) {
            var url = "http://localhost:4000/students/" + this.props.path
            var method = 'PUT'
        }
        else {
            var url = "http://localhost:4000/students"
            var method = 'POST'
        }
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                rollno: this.state.rollno,
                score: this.state.score,
                email: this.state.email
            })
        }).then((result) => {
            result.json().then((response) => {
                alert("Student has been updated.");
                Router.back()
            })
        })
    }
  
    render() {
        return (
            <div>
                <h1
                  style={{
                    width: "28%",
                    float: "left",
                    margin: "30px 1081px 30px 25px",
                    color: "white",
                    border: "2px solid #0095f6",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: "#0095f6"
                  }}
                >Student Admission Form</h1>
                <div className="addStudent">
                    <input value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }}
                        placeholder="Student Name" /> <br /><br />
                    <input value={this.state.rollno} onChange={(event) => { this.setState({ rollno: event.target.value }) }}
                        placeholder="Student Roll no." /> <br /><br />
                    <input value={this.state.score} onChange={(event) => { this.setState({ score: event.target.value }) }}
                        placeholder="Student score" /> <br /><br />
                    <input value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                        placeholder="Student Email" /> <br /><br />
                    <button onClick={() => { this.create() }}>{this.state.update_request ? 'Update' : 'Add Student'}</button>
                   
                </div>
            </div>
        )
    }
}
export default EditStudent;