import { useState } from "react";

const PalidromeChecker = () => {
  const [stringInput, setInputString] = useState("");
  const [answer, setAnswer] = useState(false);
  console.log({ stringInput });

  const isPalidrome = () => {
    
    let reversed = stringInput.toLowerCase().split("").reverse().join("");

    console.log(
      stringInput.toLowerCase() + " is what you submitted " + reversed
    );
    if (stringInput === reversed) {
      return setAnswer(true);
    }
    return setAnswer(false);
  };

  return (
    <div className="palindromeContainer">
      <label>
        Is this word a palindrome?
        <input onChange={(e) => setInputString(e.target.value)} type="text" />
        <button onClick={() => isPalidrome()}>Check</button>
      </label>
      <div>
        <label>answer: {answer.toString()}</label>
      </div>
    </div>
  );
};

export default PalidromeChecker;
