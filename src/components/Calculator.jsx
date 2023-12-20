import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const buttonList = [
    "C",
    "-",
    "+",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "=",
    "*",
    "/",
  ];
  const handleDisplay = (item) => {
    if (item === "C") setDisplay("");
    else if (item === "=") {
      const result = eval(display);
      setDisplay(result);
    } else if (false) {
    } else {
      const newDisplay = display + item;
      setDisplay(newDisplay);
    }
  };
  return (
    <center>
      <h1 className="p-2 fw-semibold">Calculator</h1>
      <div className="border border-2 rounded" style={{ width: "300px" }}>
        <div
          className="m-2 p-2 border border-2 rounded"
          style={{ width: "270px", height: "40px" }}
        >
          {display}
        </div>
        <div className=" ">
          <div className="btn-group d-flex flex-wrap">
            {buttonList.map((item) => (
              <button
                type="button"
                key={item}
                className="btn border border-2 m-1"
                style={{ width: "90px" }}
                onClick={() => handleDisplay(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </center>
  );
};

export default Calculator;
