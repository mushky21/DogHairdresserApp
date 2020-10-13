import React, { Component } from 'react'
import CustomDatePicker from '../CustomDatePicker'

class AddTurn extends Component {
    state = {
        arrivalDate: null,
    }
    handleChange = (e) => {
        console.log(e.target.value)
      /*   this.setState({
            [e.target.id]: e.target.value
        }) */
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTurn(this.state.arrivalDate);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add turn for haircut </h5>
                    <CustomDatePicker></CustomDatePicker>
                    <button className="waves-effect waves-light btn">Save
                    <i className="material-icons right">add</i>
                    </button>

                </form>
            </div>
        )
        
    }
}

export default AddTurn