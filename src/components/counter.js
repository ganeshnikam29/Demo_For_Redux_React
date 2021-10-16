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
      <hr />
      <button onClick={props.onStoreResult}> Store Result </button>
      <ul>
        {props.storeResult.map((strRlt) => {
          return (
            <li key={strRlt.id} onClick={() => props.onDeleteResult(strRlt.id)}>
              {strRlt.val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storeResult: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onAddFiveValue: () => dispatch({ type: 'ADDFIVEVALUE', val: 5 }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
    onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
