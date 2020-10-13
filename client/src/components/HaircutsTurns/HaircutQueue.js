import React, { Component } from 'react';

class HaircutQueue extends Component {

    state = {
    }
    constructor(props) {
        super(props);
        //get pramas from navigation 
/*         const env = this.props.location.state
        console.log(env) */


    }

    render() {
        return (
            <div className="container">
                queue
                <button onClick={this.props.history.goBack()}>
                  Logout
                </button>
            </div>

        )
    }
}

export default HaircutQueue;