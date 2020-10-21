import React, { Component } from 'react';
import { enviroment } from '../../env'
import { LoginUser } from '../../api/user-service'


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
        const { username, password } = this.state;
        if (!username || !password)
            this.setState({
                errorMsg: "Please fill all fields"
            })
        else {
            LoginUser(username, password).then(data => {
                if (data.userId) {
                    localStorage.setItem('userID', data.userId);
                    enviroment.userId = data.userId
                    this.props.history.push("/haircutQueue");
                }
                else {
                    this.setState({
                        errorMsg: data.errMsg
                    })
                }

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