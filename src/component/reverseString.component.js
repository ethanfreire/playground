import { useState } from "react";

const ReverseString = () => {
  const [sentence, setSentence] = useState("");
  const[reversed, setReversed] = useState("");
  //console.log({sentence});

  const onChangeHandler = (e) => {
    setSentence(e.target.value);

  };

  const reversedString = (sentence) => {
    var characters = sentence.split("");
    var rCharacters = characters.reverse();
    var rSentence = rCharacters.join("");
    setReversed(rSentence);
  };


  return (
    <div className="reverseStringContainer">
      <div className = "input string field" > 
      <label>string: 
            <input type="text" value={sentence} onChange={(e) => onChangeHandler(e)}></input>
        </label>
        <button onClick={() => reversedString(sentence)} >Reverse it</button>
      </div>
      <label>Reversed string: {reversed}</label>
    </div>
  );
};
export default ReverseString;

/* 
Additional Features

- included a check/alert the given string is a vaild sentence. 
Check: 
1. Beings w/ capital letter
2. Ends with a period/exclamation point/question mark?
3. not an empty string on submit.
4. no pure white spaces only

-included a clear/restart button for sentence/answer fields.

*/

