import './styles/calculator.css'
import {useState} from "react";
import NumberButton from "./components/numberButton";

function App() {
    const [display, setDisplay] = useState("");   // что видно на экране / текущий ввод
    const [prevValue, setPrevValue] = useState(null); // число до оператора
    const [operator, setOperator] = useState(null);   // '+', '-', '*', '/'

    function addNumber(num) {
        setDisplay(prev => prev + num);
    }

    function chooseOperator(op) {
        if (display === '') return; // нечего фиксировать

        const currentNumber = parseFloat(display);
        const newPrevValue = operator != null
            ? calculate(prevValue, currentNumber, operator) : currentNumber;

        setPrevValue(newPrevValue);
        setOperator(op);
        setDisplay('');
    }

    function calculate(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
        }
    }

    function setResult() {
        if (operator === null || display === '') return;
        const result = calculate(prevValue, parseFloat(display), operator);
        setDisplay(String(result));
        setPrevValue(null);
        setOperator(null);
    }

    function clear() {
        setDisplay('');
        setPrevValue(null);
        setOperator(null);
    }

    return (<div className="App">
        <h1>Калькулятор</h1>
        <p>{display}</p>
        <div className="btns-column">
            <div className="btns-row top-btns-row">
                <button className="btn" id="delete-btn"
                        onClick={() => setDisplay(prev => prev.slice(0, -1))}>Del
                </button>
                <button className="btn" id="clear-btn" onClick={clear}>C</button>
                <button className="btn" id="result-btn" onClick={setResult}>=</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={addNumber} num={'1'}/>
                <NumberButton setInputState={addNumber} num={'2'}/>
                <NumberButton setInputState={addNumber} num={'3'}/>
                <button className="btn action-btn" id="btn-plus" onClick={() => chooseOperator('+')}>+</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={addNumber} num={'4'}/>
                <NumberButton setInputState={addNumber} num={'5'}/>
                <NumberButton setInputState={addNumber} num={'6'}/>
                <button className="btn action-btn" id="btn-minus" onClick={() => chooseOperator('-')}>-</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={addNumber} num={'7'}/>
                <NumberButton setInputState={addNumber} num={'8'}/>
                <NumberButton setInputState={addNumber} num={'9'}/>
                <button className="btn action-btn" id="btn-divide" onClick={() => chooseOperator('/')}>/</button>
            </div>
            <div className="btns-row">
                <NumberButton setInputState={addNumber} num={'0'}/>
                <button className="btn action-btn" id="btn-multiply" onClick={() => chooseOperator('*')}>*</button>
            </div>
        </div>
    </div>);
}

export default App;