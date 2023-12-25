import React from "react";

function Contac() {
  const divCount = 9;

  const celDiv = (i: number) => {
    console.log("id =", i);
  };

  const generateSudokuBoard = () => {
    const divElements = [];
    // div children
    for (let i = 0; i < divCount; i++) {
      divElements.push(
        <div
          key={i}
          onClick={() => celDiv(i+1)}
          className="childDiv cursor-pointer grid place-items-center bg-white w-[65px] h-[65px] gap-1"
        >
          {i + 1}
        </div>
      );
    }
    // katadiv
    const rowElements = [];
    for (let i = 0; i < divCount; i++) {
      rowElements.push(
        <div
          key={i}
          className="grid grid-cols-3 grid-rows-3 border border-black bg-black w-[200px] h-[200px]"
        >
          {divElements}
        </div>
      );
    }

    return rowElements;
  };

  return (
    <div className="w-[100%] grid place-items-center h-[100vh]">
      <div className="grid grid-cols-3 grid-rows-3 border border-black w-[600px] h-[600px]">
        {generateSudokuBoard()}
      </div>
    </div>
  );
}

export default Contac;
