import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class CustomDatePicker extends Component {
  state = {
    selectedDate: new Date(),
  }

  handleChange = (selectedDate) => {
    if (selectedDate.getTime() >= new Date().getTime())
    {
      console.log(selectedDate)
      this.setState({
        selectedDate
      })
    }
  }

  render() {
    return (
      <DatePicker id="selectedDate"  selected={this.state.selectedDate} onSelect={this.handleChange} showTimeSelect
        dateFormat="dd / MM / yyyy HH: mm" />
    );
  }

}

export default CustomDatePicker