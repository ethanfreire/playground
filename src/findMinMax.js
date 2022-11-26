import { useState } from "react";

const FindMinMax = () => {
  const [inputString, setInputString] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  console.log({ inputString });

  //check arrary bigger than 1, not 0,

  const findMin = () => {
    const inputArray = inputString.split(",");
    const numberArray = inputArray.map((entry) => {
      return +entry;
    });
    const minNumber = Math.min(...numberArray);
    console.log(`you hit the findMin method ${JSON.stringify(numberArray)}`);

    return setMinimum(minNumber);
  };
  const findMax = () => {
    const inputArray = inputString.split(",");
    const numberArray = inputArray.map((entry) => {
      return +entry;
    });
    const maxNumber = Math.max(...numberArray);
    console.log(`you hit the findMax method ${JSON.stringify(numberArray)}`);

    return setMaximum(maxNumber);
  };

  return (
    <div className="finderContainer">
      <div className="inputFieldContainer">
        <label>Please input a series of comma separated numbers:</label>
        <input onChange={(e) => setInputString(e.target.value)} type="text" />
      </div>

      <div className="findMinContainer">
        <button onClick={() => findMin()}>Find Min</button>
        <span> : {minimum}</span>
      </div>

      <div className="findMaxContainer">
        <button onClick={() => findMax()}>Find Max</button>
        <span> : {maximum}</span>
      </div>
    </div>
  );
};
export default FindMinMax;
