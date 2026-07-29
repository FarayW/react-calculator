import './styles/calculator.css'
import {useState} from "react";
import NumberButton from "./components/numberButton";


function App() {

    let [inputState, setInputState] = useState("")

    function delNumber() {
        setInputState(inputState.slice(0, -1));
    }

    return (<div className="App">
        <h1>Калькулятор</h1>
        <p>{inputState}</p>
        <div className="btns-column">
            <div className="btns-row top-btns-row">
                <button className="btn" id="delete-btn" onClick={() => delNumber()}>Del</button>
                <button className="btn" id="clear-btn" onClick={() => setInputState('')}>C</button>
                <button className="btn" id="result-btn">=</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={setInputState} inputState={inputState} num={'1'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'2'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'3'}/>
                <button className="btn action-btn" id="btn-plus">+</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={setInputState} inputState={inputState} num={'4'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'5'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'6'}/>
                <button className="btn action-btn" id="btn-minus">-</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={setInputState} inputState={inputState} num={'7'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'8'}/>
                <NumberButton setInputState={setInputState} inputState={inputState} num={'9'}/>
                <button className="btn action-btn" id="btn-divide">/</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={setInputState} inputState={inputState} num={'0'}/>
                <button className="btn action-btn" id="btn-multiply">*</button>
            </div>
        </div>
    </div>);
}

export default App;
