import { useState } from "react";

const RemoveDuplicates = () => {
  const [inputString, setInputString] = useState("");
  const [answer, setAnswer] = useState([]);
  //console.log({ inputString });

  const filterCharacter = () => {
    //check 4 edge cases
    const arrayInput = [...inputString];

    //Set approach
    // const characters = new Set(arrayInput);
    // const uniqueCharArr = [...characters];
    // setAnswer(uniqueCharArr);

    //map and object approach
    var inputObj = {}
    arrayInput.map( (char) => {
       return inputObj[char] ? inputObj[char]++ : inputObj[char] = 1
    });
     console.log(JSON.stringify(Object.keys(inputObj)) );
     setAnswer(Object.keys(inputObj));
    
  };

  return (
    <div className="removeDuplicatesContainer">
      <label>
        Given a string print out an array contain the string unique characters
        <div className="inputFieldContainer">
          <input onChange={(e) => setInputString(e.target.value)} type="text" />
          <button onClick={() => filterCharacter()}>Filter It!</button>
        </div>
      </label>
      <div className="answerContainer">
        <label>Answer: {answer}</label>
      </div>
    </div>
  );
};

export default RemoveDuplicates;
