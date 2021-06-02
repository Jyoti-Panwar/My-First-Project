import React, { PureComponent } from 'react'

class GetData extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:4000/students/", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => this.setState({ list: response }));
    }
    render() {
        return (
            <div>
                <span
                    style={{
                        margin: "50px 1025px 0px 100px !important",
                        color: "purple",
                        float:"left",
                        border: "3px solid pink",
                        width: "26% !important",
                        fontSize:"30px"
                    }}
                >Student's Profile Record</span>
                {this.state.list.map((item, i) => (
                    <span>
                        <div style={{
                            width: "12%",
                            border: "1px solid white",
                            borderRadius: "5px",
                            margin: "40px 95px",
                            float: "left",
                            padding: "10px 10px",
                            color: "black",
                            height: "140px",
                            backgroundColor: "lightcoral"
                        }}>
                            Id: {item.id} <br />
                            Name: {item.name}<br />
                            Roll no: {item.rollno}<br />
                            Score: {item.score} <br />
                            Email: {item.email} <br /><br />
                        </div>
                    </span>
                ))}
            </div>
        )
    }
}
export default GetData