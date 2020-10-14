import React, { useState, Component } from "react";
import DatePicker from "react-datepicker";

/* import "react-datepicker/dist/react-datepicker.css"; */


class CustomDatePicker extends Component {
  state = {
    selectedDate: new Date(),
  }

  handleChange = (selectedDate) => {
/*     console.log(selectedDate)
    if (selectedDate.getTime() >= new Date().getTime())
    {
    */
      this.setState({
        selectedDate
      })
 /*    } */
  }

  render() {
    return (
      <DatePicker id="selectedDate" onChange={this.handleChange}  selected={this.state.selectedDate} onSelect={this.handleChange} showTimeSelect
        dateFormat="dd / MM / yyyy HH: mm" />
    );
  }

}

export default CustomDatePicker