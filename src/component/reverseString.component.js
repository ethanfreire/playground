import { useState } from "react";

const ReverseString = () => {
  const [sentence, setSentence] = useState("");
  console.log({sentence});

  const onChangeHandler = (e) => {

  };

  return (
    <div className="reverseStringContainer">
      <form>
        <label>Sentence: 
            <input type="text" value={sentence} onChange={(e) => onChangeHandler(e)}></input>
        </label>
      </form>
    </div>
  );
};
export default ReverseString;
