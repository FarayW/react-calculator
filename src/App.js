import './styles/calculator.css'
import {useState} from "react";


function App() {

  let [inputState, setInputState] = useState("")

  function addNumber(num) {
    setInputState(inputState + num);
  }

  function delNumber() {
    setInputState(inputState.slice(0, -1));
  }

  return (
      <div className="App">
        <h1>Калькулятор</h1>
        <p>{inputState}</p>
        <div className="btns-column">
          <div className="btns-row top-btns-row">
            <button className="btn" id="delete-btn" onClick={() => delNumber()}>Del</button>
            <button className="btn" id="clear-btn" onClick={() => setInputState('')}>C</button>
            <button className="btn" id="result-btn">=</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn1" onClick={() => addNumber('1')}>1</button>
            <button className="btn number-btn" id="btn2" onClick={() => addNumber('2')}>2</button>
            <button className="btn number-btn" id="btn3" onClick={() => addNumber('3')}>3</button>
            <button className="btn action-btn" id="btn-plus">+</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn4" onClick={() => addNumber('4')}>4</button>
            <button className="btn number-btn" id="btn5" onClick={() => addNumber('5')}>5</button>
            <button className="btn number-btn" id="btn6" onClick={() => addNumber('6')}>6</button>
            <button className="btn action-btn" id="btn-minus">-</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn7" onClick={() => addNumber('7')}>7</button>
            <button className="btn number-btn" id="btn8" onClick={() => addNumber('8')}>8</button>
            <button className="btn number-btn" id="btn9" onClick={() => addNumber('9')}>9</button>
            <button className="btn action-btn" id="btn-divide">/</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn0" onClick={() => addNumber('0')}>0</button>
            <button className="btn action-btn" id="btn-multiply">*</button>
          </div>
        </div>
      </div>
  );
}

export default App;
