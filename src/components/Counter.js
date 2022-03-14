import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(100);
    const decrement = () => {
        if (counter === 100) {
            setCounter(counter);
        }
        else {
            setCounter(counter - 100);
        }
    }
    return (
        <div>
            <h1>Remote Coder Unity</h1>
            <h2>Dena Powna</h2>
            <div id="counter-value">{counter}</div>
            <button onClick={() => setCounter(counter + 100)} id='increment-btn'>Increment</button>
            <button onClick={decrement} id='decrement-btn'>Decrement</button>
        </div>
    );
};

export default Counter;