import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../services/actions/CounterAction';

class Counter extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div>
                    <h3>Counter: 0</h3>
                    <button>Increment</button>
                    <button>Decrement</button>
                </div>
            </>
        );
    }
}
 
export default connect(mapStateToProps, {increment, decrement})(Counter)
