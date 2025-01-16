import React, { useState } from 'react';

const CounterComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => {
        setCounter(counter + 1);
    };

    const handleDecrementCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrementCounter}>Increment Counter</button>
            <button onClick={handleDecrementCounter}>Decrement Counter</button>
        </>
    );
};

export default CounterComponent;
