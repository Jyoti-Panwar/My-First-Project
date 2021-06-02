import React, { PureComponent } from 'react'
import Router from 'next/router';

class Register extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            signup_email: "",
            signup_password: "",
            signup_error: false
        }
    }
    register(e) {
        e.preventDefault();
        if (this.state.signup_email === "" && this.state.signup_password === "") {
            this.setState({ signup_error: "Please enter something." })
        }
        else {
            fetch("https://reqres.in/api/register", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.state.signup_email,
                    password: this.state.signup_password
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.token) {
                        Router.push('/list')
                    } else {
                        this.setState({
                            signup_error: "Sorry,Un-authenticated User!"
                        })
                    }
                });
        }
    }

    render() {
        return (
            <div className="register-container">

                <div className="register-section">
                    <div className="register-details">
                        <div className="register-image">
                            <div className="register-url">REGISTER</div>
                        </div>
                        <form>
                            <div className="input-detailing">
                                <input className="register-email" type="text" value={this.state.signup_email} onChange={(e) => this.setState({ signup_email: e.target.value, signup_error: false })} placeholder="Email address"
                                />
                                <div className="input-svg-phase">
                                    <input className="register-password" type="password" value={this.state.signup_password} onChange={(e) => this.setState({ signup_password: e.target.value, signup_error: false })} placeholder="Password"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="eyes-icon"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" ></path></svg>
                                </div>
                            </div>
                            {this.state.signup_error ?
                                <p style={{ color: "red", fontSize: "14px", fontFamily: "'oswald',sans-serif", float: "left", width: "73%", margin: "0px 52px" }}>
                                    {this.state.signup_error}
                                </p>
                                : null}

                            <div className="button-information">
                                <button onClick={(e) => this.register(e)} type="submit" className="login-buttonn">Sign In</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div >
        )
    }
}

export default Register