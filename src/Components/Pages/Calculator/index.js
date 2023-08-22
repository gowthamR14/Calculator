import React, { useState } from 'react'
import '../Calculator/Style.scss'
function Calculator() {
  const [showInput, setShowInput] = useState('')
  const [currentOperator, setCurrentOperator] = useState('')

  const appendToInput = (value) => {
    setShowInput(showInput + value)
  }

  const performOperation = (operator) => {
    setCurrentOperator(operator)
    appendToInput(operator)
  }
  const handleBackspace = () => {
    setShowInput(showInput.slice(0, -1))
  }
  const clearInput = () => {
    setShowInput('')
    setCurrentOperator()
  }
  const calculateResult = () => {
    let result = currentOperator
    if (currentOperator === '+') {
      result = eval(showInput)
    } else if (currentOperator === '-') {
      result = eval(showInput)
    } else if (currentOperator === '*') {
      result = eval(showInput)
    } else if (currentOperator === '/') {
      result = eval(showInput)
    } else if (currentOperator === '%') {
      result = eval(showInput)
    } else if (currentOperator === '.') {
      result = eval(showInput)
    } else if (currentOperator === '%') {
      result = eval(showInput)
    }
    setShowInput(result)
    setCurrentOperator('')
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div className="calci-card">
        <input type="value" className="input-text" value={showInput} />
        <div className="row">
          <div className="col-2">
            <button className="btn-cal" onClick={clearInput}>
              Cl
            </button>
            <button className="btn-cal" onClick={() => performOperation('%')}>
              %
            </button>
            <button className="btn-cal" onClick={handleBackspace}>
              x
            </button>
            <button className="btn-cal" onClick={() => performOperation('/')}>
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button className="btn-cal" onClick={() => appendToInput('7')}>
              7
            </button>
            <button className="btn-cal" onClick={() => appendToInput('8')}>
              8
            </button>
            <button className="btn-cal" onClick={() => appendToInput('9')}>
              9
            </button>
            <button className="btn-cal" onClick={() => performOperation('*')}>
              *
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button className="btn-cal" onClick={() => appendToInput('4')}>
              4
            </button>
            <button className="btn-cal" onClick={() => appendToInput('5')}>
              5
            </button>
            <button className="btn-cal" onClick={() => appendToInput('6')}>
              6
            </button>
            <button className="btn-cal" onClick={() => performOperation('-')}>
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button className="btn-cal" onClick={() => appendToInput('1')}>
              1
            </button>
            <button className="btn-cal" onClick={() => appendToInput('2')}>
              2
            </button>
            <button className="btn-cal" onClick={() => appendToInput('2')}>
              3
            </button>
            <button className="btn-cal" onClick={() => performOperation('+')}>
              +
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <button className="btn-cal" onClick={() => appendToInput('00')}>
              00
            </button>
            <button className="btn-cal" onClick={() => appendToInput('0')}>
              0
            </button>
            <button className="btn-cal" onClick={() => performOperation('.')}>
              .
            </button>
            <button className="btn-cal" onClick={calculateResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
