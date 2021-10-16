import React from 'react';
import './counter.css';
import { connect } from 'react-redux';

const Counter = (props) => {
  return (
    <div>
      <p className="counter">Counter : {props.ctr}</p>
      <button className="button" onClick={props.onIncrement}>
        Increment
      </button>
      <button className="button" onClick={props.onDecrement}>
        Decrement
      </button>
      <button className="button" onClick={props.onAddFiveValue}>
        Add 5
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onAddFiveValue: () => dispatch({ type: 'ADDFIVEVALUE' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
