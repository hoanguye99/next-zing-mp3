import { useAppDispatch, useAppSelector } from '@/utils/app/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/utils/slice'
import React from 'react'

const HomePage = () => {
  const counterValue = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  function handleIncrementClick() {
    dispatch(increment())
  }
  function handleDecrementClick() {
    dispatch(decrement())
  }
  function handleIncrementBy() {
    dispatch(incrementByAmount(2))
  }
  return (
    <>
      <div>Main Thing Baby. Shut it down</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
      <div>Main Thing Baby</div>
      <div>Current Value: {counterValue}</div>
      <div className="flex gap-3">
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
        <button onClick={handleIncrementBy}>Increment By 2</button>
      </div>
    </>
  )
}

export default HomePage
