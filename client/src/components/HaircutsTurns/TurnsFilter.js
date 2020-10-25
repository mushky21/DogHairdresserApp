import React, { Component } from 'react'
import DatePicker from "react-datepicker"
import { FilterTurns, ClearFilter } from '../../actions/turnActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';




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

    clearFilter = () => {
        /*    this.setState({
               turns: this.props.turns
           }) */
    }

    //add turn only if the selected date is biggest than current date (at least ig by one minute)
    handleSubmit = (e) => {
        e.preventDefault();
        const { date, firstName } = this.state
        if (date || firstName) {
            this.props.FilterTurns(date, firstName);
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
                    <button onClick={this.props.ClearFilter} type="button" className="btn">Clear filter
                        <i className="material-icons right">clear</i>
                    </button>
                </form>

            </div>
        )


    }
}

TurnsFilter.propTypes = {
    FilterTurns: PropTypes.func.isRequired,
    ClearFilter: PropTypes.func.isRequired
}


export default connect(null, { FilterTurns, ClearFilter})(TurnsFilter);

/* export default TurnsFilter */