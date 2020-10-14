import React, { Component } from 'react'
import DatePicker from "react-datepicker";

class AddTurn extends Component {
    state = {
        arrivalDate: new Date(),
        errMsg: ''
    }

    constructor(props) {
        super(props)
    }

    handleChange = (arrivalDate) => {
        this.setState({
            arrivalDate
        })
    }
    //add turn only if the selected date is biggest than current date (at least ig by one minute)
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.arrivalDate.getTime() > new Date().getTime())
        {
            this.setState({
                errMsg:""
            })
            this.props.addTurn(this.state.arrivalDate);
        }

        else {
          this.setState({
              errMsg:"The selected date is been over, please select again  "
          })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>                   
                    <div>
                        <h5 >Add turn for haircut </h5>
                        <p className="error">{this.state.errMsg}</p>
                        <DatePicker id="selectedDate" onChange={this.handleChange} selected={this.state.arrivalDate} showTimeSelect
                            dateFormat="dd / MM / yyyy HH: mm" />
                    </div>
                    <div>
                        <button className="btn">Save
                    <i className="material-icons right">add</i>
                        </button>
                    </div>

                </form>
            </div>
        )

    }
}

export default AddTurn