import React, { Component } from 'react';
import AuthService from './../services/AuthService'

export class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    login(){
        AuthService.getJwtByEmailAndPassword(this.state.email, this.state.password);
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    render(){
        return (
            <React.Fragment>
                <form className="form-signin">
                    <h2>Please log in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={this.handleEmailChange}
                        required autoFocus
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required
                    />

                    <button onClick={this.login} type="button">
                        Sign in
                    </button>
                </form>
            </React.Fragment>
        );
    }
}
