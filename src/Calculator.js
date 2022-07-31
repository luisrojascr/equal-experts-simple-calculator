import { useState } from "react";
import "./Calculator.css";

function App() {
  const [calculation, setCalculation] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalculator = (value) => {
    if (
      (operators.includes(value) && calculation === "") ||
      (operators.includes(value) && operators.includes(calculation.slice(-1)))
    ) {
      return;
    }

    setCalculation(calculation + value);
  };

  const renderNumbers = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button
          data-testid={`number-${i}`}
          aria-label={`number-${i}`}
          onClick={() => updateCalculator(i.toString())}
          key={i}
        >
          {i}
        </button>
      );
    }
    return numbers;
  };

  const equals = () => {
    const factor = Math.pow(10, 10);
    const calc =
      // eslint-disable-next-line no-new-func
      Math.round(new Function(`return ${calculation}`)() * factor) / factor;
    const result = calc.toString();
    setCalculation(result);
  };

  const clearEntry = () => {
    if (calculation === "") {
      return;
    }
    setCalculation("");
  };

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://www.pngkey.com/png/full/236-2368497_hmrc-and-equal-experts-equal-experts-logo-png.png  "
          alt="[=] Equal Experts"
          width="300"
        />
      </div>
      <div className="calculator">
        <div className="display" data-testid="display">
          {calculation || "0"}
        </div>
        <div className="container">
          <div className="numbers">
            {renderNumbers()}
            <button
              data-testid="number-0"
              onClick={() => updateCalculator("0")}
            >
              0
            </button>
            <button
              data-testid="button-decimal"
              onClick={() => updateCalculator(".")}
            >
              .
            </button>
            <button data-testid="button-ce" onClick={clearEntry}>
              CE
            </button>
          </div>
          <div className="operators">
            <button
              data-testid="button-divide"
              onClick={() => updateCalculator("/")}
            >
              /
            </button>
            <button
              data-testid="button-multiply"
              onClick={() => updateCalculator("*")}
            >
              *
            </button>
            <button
              data-testid="button-minus"
              onClick={() => updateCalculator("-")}
            >
              -
            </button>
            <button
              data-testid="button-plus"
              onClick={() => updateCalculator("+")}
            >
              +
            </button>
            <button data-testid="button-equals" onClick={equals}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
