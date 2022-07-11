import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions';

export function Counter() {
  const myState = useSelector((state) => JSON.stringify(state));
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div><code>{myState}</code></div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}