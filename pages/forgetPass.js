import React, { PureComponent } from 'react'

class ForgetPass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            error:false
        }
    }

    submit(e){
        e.preventDefault();
        if (this.state.email === ""){
            this.setState({error:"Please enter something."});
        }else{
        alert("We've sent the confirmation on registered email address,Do verify there.");
    }};

    render() {
        return (
            <div className="forget-password">
                <div className="forget-password-section">
                    <div className="forget-password-division">
                        <span>FORGET <br /> PASSWORD</span>
                        <input className="forget-password-division-input" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value, error: false })} placeholder="Enter your registered email address" />
                        {this.state.error ?
                                <p style={{ color: "red", fontSize: "14px", marginBottom: "0px" , margin: "0px 0px 0px 0px !important" , fontFamily: "'oswald',sans-serif", float: "left", width: "73%", margin: "0px 64px 0px 40px;" }}>
                                    {this.state.error}
                                </p>
                                : null}
                        <button onClick={(e) => this.submit(e)} type="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgetPass