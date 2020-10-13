import React, { Component } from 'react';
import { enviroment } from '../../env'


class Login extends Component {

    state = {
        username: '',
        password: '',
        errorMsg: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    login = (e) => {
        e.preventDefault();
        ///api.login(this.state)
        //if success navigate
/*         if (this.state.username && this.state.password) {
            console.log("yes") */
            enviroment.token = 'dkjhdahdo';
            enviroment.username = 'mushky23';
            this.props.history.push("/haircutQueue", enviroment);
/*         }
        else {
            this.setState({
                errorMsg: "Please fill all fields"
            })

        } */

    }

    render() {
        return (
            <div className="container">
                <h1> Login </h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="insert username" id="username" type="text" className="validate" />
                                <label htmlFor="username" >Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input  placeholder="insert password" id="password" type="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button onClick={this.login} className="btn waves-effect waves-light" type="submit" name="action"> Login
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;