import React from 'react';

const NumberButton = ({ setInputState, num }) => {
    return (
        <button
            className="btn number-btn"
            id={"btn" + num}
            onClick={() => setInputState(num)}>
            {num}
        </button>
    );
};

export default NumberButton;