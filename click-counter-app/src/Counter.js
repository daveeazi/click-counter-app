import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const MAX_LIMIT = 10;

  const handleIncrement = () => {
    if (count < MAX_LIMIT) {
      setCount(prev => prev + 1);
      setMessage('');
    } else {
      setMessage("You've reached the limit!");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      setMessage('');
    } else {
      setMessage("Counter can't go below 0!");
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage('');
  };

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement} className="increase">Increase</button>
        <button onClick={handleDecrement} className="decrease">Decrease</button>
        <button onClick={handleReset} className="reset">Reset</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Counter;
