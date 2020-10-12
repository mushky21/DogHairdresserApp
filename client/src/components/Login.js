import React, { Component } from 'react';


class Login extends Component {

    state = {
        username:'',
        password:''
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
        this.props.history.push("/haircutQueue");
    }

    render() {
        return (
            <div className="container">
                <h1> Login </h1>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="insert username" id="username" type="text" class="validate" />
                                <label for="username" >Username</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="insert password" id="password" type="password" class="validate" />
                                <label for="email">Password</label>
                            </div>
                        </div>
                        <button onClick={this.login} class="btn waves-effect waves-light" type="submit" name="action"> Login 
                            <i class="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;