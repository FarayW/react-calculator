import './styles/calculator.css'


function App() {
  return (
      <div className="App">
        <h1>Калькулятор</h1>
        <p>test</p>
        <div className="btns-column">
          <div className="btns-row top-btns-row">
            <button className="btn" id="delete-btn">Del</button>
            <button className="btn" id="clear-btn">C</button>
            <button className="btn" id="result-btn">=</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn1">1</button>
            <button className="btn number-btn" id="btn2">2</button>
            <button className="btn number-btn" id="btn3">3</button>
            <button className="btn action-btn" id="btn-plus">+</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn4">4</button>
            <button className="btn number-btn" id="btn5">5</button>
            <button className="btn number-btn" id="btn6">6</button>
            <button className="btn action-btn" id="btn-minus">-</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn7">7</button>
            <button className="btn number-btn" id="btn8">8</button>
            <button className="btn number-btn" id="btn9">9</button>
            <button className="btn action-btn" id="btn-divide">/</button>
          </div>
          <div className="btns-row">
            <button className="btn number-btn" id="btn0">0</button>
            <button className="btn action-btn" id="btn-multiply">*</button>
          </div>
        </div>
      </div>
  );
}

export default App;
