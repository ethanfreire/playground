import { useState } from "react";

const VowelChecker = () => {
  const [sentence, setSentence] = useState("");
  const [vowelNumber, setVowelNumber] = useState(0);
  console.log({ sentence });
  console.log({ vowelNumber });

  const onChangeHandler = (event) => {
    const inputFieldString = event.target.value;
    setSentence(inputFieldString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedSentence = sentence.toLowerCase();
    if (submittedSentence.trim().length === 0) {
      return alert(
        "cannot submit an empty sentence please or pure whitespace only please try again."
      );
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for (let letter of submittedSentence) {
      if (vowels.includes(letter)) {
        counter++;
      }
    }

    setVowelNumber(counter);
    setSentence("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>How many vowel does it have?</p>
        <label>
          Sentence:
          <input
            type="text"
            value={sentence}
            onChange={(e) => onChangeHandler(e)}
          ></input>
        </label>
        <button type="submit" value="submit">
          CLICK HERE
        </button>
        <p>Answer: {vowelNumber}</p>
      </form>
    </div>
  );
};

export default VowelChecker;
