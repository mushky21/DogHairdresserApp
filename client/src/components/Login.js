import React, { Component } from 'react';


class Login extends Component {

    render() {
        return (
            <div className="container">
                <h1> Login </h1>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="insert first name" id="first_name" type="text" class="validate" />
                                <label for="first_name" >First Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="insert email" id="first_name" type="email" class="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action"> Login 
                            <i class="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;