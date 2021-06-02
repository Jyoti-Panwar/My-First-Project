import React, { PureComponent } from 'react'
import Router from 'next/router';
import Link from 'next/link';

class Login extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            pass: "",
            login_error: false
        }
    }
    loginFunction(e) {
        e.preventDefault();
        if (this.state.name === "" && this.state.pass === "") {
            this.setState({ login_error: "Please enter something." })
        } 
        else {
            fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: this.state.name,
                    password: this.state.pass,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.token) {
                        Router.push('/');
                    } else {
                        this.setState({
                            login_error: "Please enter correct Id and Password."
                        })
                    }
                });
        }
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-section">
                    <div className="login-section-box">
                        <div className="login-welcome-box">
                            <div className="welcome-content">
                                <img src="./image/welcome.jpg" />
                            </div>
                            <div className="login-details">
                                <div className="logo-image">
                                    <span className="image-url">Login</span>
                                    <p className="image-urll">Please Login to continue</p>
                                </div>
                                <form>
                                    <div className="input-details">
                                        <input type="text" className="email-input" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value, login_error: false })} placeholder="Email address" />
                                        <div className="input-svg-phase">
                                            <input type="password" className="password-input" value={this.state.pass} onChange={(e) => this.setState({ pass: e.target.value, login_error: false })} placeholder="Password" />
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="eye-icon"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
                                        </div>
                                    </div>
                                    {this.state.login_error ?
                                        <p style={{ color: "red", fontSize: "14px", fontFamily: "'oswald',sans-serif", float: "left", width: "73%", margin: "0px 76px" }}>
                                            {this.state.login_error}
                                        </p>
                                        : null}
                                    <div className="button-details">
                                        <button onClick={(e) => this.loginFunction(e)} type="submit" className="login-button">Log In</button>
                                    </div>
                                    <div className="renew-password">
                                        <span><Link href="/forgetPass">Forget Password?</Link></span>
                                    </div>
                                    <div className="registration">
                                        <span >Don't have any account , <Link href="/register">Register here</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login