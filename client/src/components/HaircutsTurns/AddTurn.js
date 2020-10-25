import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import { AddHaircutTurn } from '../../actions/turnActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* import { AddHaircutTurn } from '../../api/turn-service' */

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
        const arrivalDate = this.state.arrivalDate
        if (arrivalDate) {
            if (this.state.arrivalDate.getTime() > new Date().getTime()) {
                this.props.AddHaircutTurn(
                    data => {
                        if (data.successMsg) {
                            this.setState({
                                errMsg: data.successMsg
                            })
                        }
                        else {
                            this.setState({
                                errMsg: data.errMsg
                            })

                        }
                    }, arrivalDate, new Date());
                /*   AddHaircutTurn(arrivalDate, new Date()).then(data => {
                      if (data.successMsg) {
                          this.setState({
                              errMsg: data.successMsg
                          })
                      }
                      else 
                      {
                          this.setState({
                              errMsg:data.errMsg
                          })
  
                      }
                  }).catch(e=>console.log(e))
  /*  */
               /*  this.props.addTurn(this.state.arrivalDate); * / */
            }

            else {
                this.setState({
                    errMsg: "The selected date is been over, please select again  "
                })
            }
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
                <div>
                    <button onClick={this.props.history.goBack} className="btn">Back
                    </button>
                </div>

            </div>
        )

    }
}

AddTurn.propTypes = {
    AddHaircutTurn: PropTypes.func.isRequired
}


export default connect(null, { AddHaircutTurn })(AddTurn);