import React, { Component } from 'react';
import { enviroment } from '../../env'


class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMsg: ''
    }

    /*     constructor(props){
            super(props)
        }
     */
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        ///api.login(this.state)
        //if success navigate
        if (this.state.username && this.state.password) {
            enviroment.token = 'dkjhdahdo';
            enviroment.username = 'mushky23';
            this.props.history.push("/haircutQueue", enviroment);
        }
        else {
            this.setState({
                errorMsg: "Please fill all fields"
            })

        }

    }

    render() {
        return (

            <div className="container">
                <h1> Login </h1>
                <p className="error">{this.state.errorMsg}</p>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" id="username" onChange={this.handleChange} placeholder="username"></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" id="password" onChange={this.handleChange} placeholder="password"></input>
                    </div>
                    <span>
                        <button type="submit" className="waves-effect waves-light btn" onClick={this.handleSubmit}>Login
                    <i className="material-icons right">send</i>
                        </button>
                    </span>
                    <span>
                        <a href="/register"> Sign Up</a>
                    </span>

                </form>
            </div>

        )
    }
}

export default Login;