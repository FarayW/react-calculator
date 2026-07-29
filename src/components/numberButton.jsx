import React from 'react';

const NumberButton = ({setInputState, num}) => {
    function addNumber(num) {
        setInputState(prev => prev + num);
    }

    return (
        <button
            className="btn number-btn"
            id={"btn" + num}
            onClick={() => addNumber(num)}>
            {num}
        </button>
    );
};

export default NumberButton;