import React, { Component } from 'react'
import DatePicker from "react-datepicker"




class TurnsFilter extends Component {
    state = {
        date: new Date(),
        firstName: '',
        errMsg: ''
    }

    /*   constructor(props) {
          super(props)
      } */

    updateDate = (date) => {
        this.setState({
            date
        })
    }

    updateName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    //add turn only if the selected date is biggest than current date (at least ig by one minute)
    handleSubmit = (e) => {
        e.preventDefault();
        const { date, firstName } = this.state
        if (date || firstName) {
            this.props.filterTurns(date, firstName);
        }

    }

    render() {
        return (
            <div>
                <p>{this.state.errMsg}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Filter by date and first name:  </label>
                    <span>
                        <input onChange={this.updateName} className="filterInput" placeholder="first name" id="first_name" type="text" style={{ width: 150 }} />
                    </span>
                    <span>
                        <DatePicker placeholder="arrival date" id="selectedDate" onChange={this.updateDate} selected={this.state.date}
                            dateFormat="dd / MM / yyyy " />
                    </span>
                        <button className="btn">Filter
                    <i className="material-icons right">filter_list</i>
                        </button>
                        <button onClick={this.props.clearFilter} type="button" className="btn">Clear filter
                        <i className="material-icons right">clear</i>
                </button>
                </form>
            
            </div>
        )


    }
}

export default TurnsFilter