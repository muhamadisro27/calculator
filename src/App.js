import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(0);
  const [expression, setExpression] = useState("");

  const buttonPress = (e) => {
    e.preventDefault();

    const value = e.target.value


    if(value === 'AC') {
      setDisplay(0);
      setExpression("");

    } else if (value === '/') {
      if(display === "") return;
      setDisplay(display.toString().charAt(0) )
    } else {
      setDisplay(value);
    }
    
  }
  return (
    <>
      <div className="calculator">
        <div className="formulaScreen">{expression}</div>
        <div className="outputScreen" id="display">
          {display}
        </div>
        <div className="keypad">
          <button
            onClick={(e) => buttonPress(e)} id="clear"
            value="AC"
            className="jumbo"
            style={{ backgroundColor: "rgb(172, 57, 57)" }}
          >
            AC
          </button>
          <button onClick={(e) => buttonPress(e)} id="divide" value="/" style={{ backgroundColor: "grey" }}>
            /
          </button>
          <button onClick={(e) => buttonPress(e)} id="multiply" value="x" style={{ backgroundColor: "grey" }}>
            X
          </button>
          <button onClick={(e) => buttonPress(e)} id="seven" value="7">
            7
          </button>
          <button onClick={(e) => buttonPress(e)} id="eight" value="8">
            8
          </button>
          <button onClick={(e) => buttonPress(e)} id="nine" value="9">
            9
          </button>
          <button onClick={(e) => buttonPress(e)} id="subtract" value="-" style={{ backgroundColor: "grey" }}>
            -
          </button>
          <button onClick={(e) => buttonPress(e)} id="four" value="4">
            4
          </button>
          <button onClick={(e) => buttonPress(e)} id="five" value="5">
            5
          </button>
          <button onClick={(e) => buttonPress(e)} id="six" value="6">
            6
          </button>
          <button onClick={(e) => buttonPress(e)} id="add" value="+" style={{ backgroundColor: "grey" }}>
            +
          </button>
          <button onClick={(e) => buttonPress(e)} id="one" value="1">
            1
          </button>
          <button onClick={(e) => buttonPress(e)} id="two" value="2">
            2
          </button>
          <button onClick={(e) => buttonPress(e)} id="six" value="6">
            3
          </button>
          <button onClick={(e) => buttonPress(e)} id="zero" className="jumbo" value="0">
            0
          </button>
          <button onClick={(e) => buttonPress(e)} id="decimal" value=".">
            .
          </button>
          <button
            onClick={(e) => buttonPress(e)}
            id="equals"
            value="="
            style={{
              backgroundColor: "rgb(0, 68, 102)",
              position: "absolute",
              height: "130px",
              bottom: "5px",
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
