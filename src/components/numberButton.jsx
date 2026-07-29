import React from 'react';

const NumberButton = (props) => {
    function addNumber(num) {
        props.setInputState(props.inputState + num);
    }

    const num = props.num;

    return (
        <button className="btn number-btn" id={"btn" + num} onClick={() => addNumber(num)}>{num}</button>
    );
};

export default NumberButton;