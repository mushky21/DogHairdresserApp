import React, { Component } from 'react';
import { SignUpUser } from '../../api/user-service'



class Register extends Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        errorMsg: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, firstName } = this.state
        if (!username || !password || !firstName)
            this.setState({
                errorMsg: "Please fiil all fields"
            })
        else {
            SignUpUser(username, password, firstName).then(data => {
                if (data.successMsg) {
                    alert("The registration been successfully")
                    this.props.history.push('/');
                }
                else {
                    this.setState({
                        errorMsg: data.errMsg
                    })
                }
            })
        }

        /*  e.preventDefault();
         console.log(this.state)
         const { username, password, firstName } = this.state
         if (username && password && firstName) {
             ///api.signUp(this.state)
             //if success navigate to login page
             SignUpUser(username, password, firstName).then(data =>{
                 if(data.successMsg)
                 {
                     alert("The registration been successfully")
                     this.props.history.push('/');
                 }
                 else {
                     this.setState({
                         errorMsg:data.errMsg
                     })
                 }
             
             })
         
         }
         else {
             this.setState({
                 errorMsg: "Please fiil all fields"
             })
         } */

    }

    render() {
        return (

            <div className="container">
                <h1> Sign Up </h1>
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
                    <div>
                        <label>First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} placeholder="firstName"></input>
                    </div>
                    <button type="submit" className="waves-effect waves-light btn" onClick={this.handleSubmit}>Sign Up
                    <i className="material-icons right">account_circle</i>
                    </button>


                </form>
                <div>
                    <button onClick={this.props.history.goBack} className="btn">Back
                    </button>
                </div>

            </div>

        )
    }
}

export default Register;