import "./styles.css";
import { useState } from "react";

var sportsDictionary = {
  "🏄": "Surfing",
  "🏏": "Cricket",
  "🏋️‍♂️": "Weight Lifting",
  "🚴‍♀️": "Biking",
  "🚵": "Mountain Biking",
  "🏊": "Swimming",
  "🏇": "Horse Racing",
  "🏌️": "Golfing",
  "🎳": "Bowling",
  "🏂": "Snowboarding",
  "🤹‍♂️": "Juggling",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🥍": "Lacrosse",
  "🏹": "Archery",
  "🧗": "Mountain Climbing"
};

let ourEmojis = Object.keys(sportsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    const userInput = event.target.value;

    let meaning = sportsDictionary[userInput];

    // to check the values that we don't have
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    // Set the meaning for output
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    let meaning = sportsDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Sports in Emojis ! </h1>
      <input
        onChange={emojiHandler}
        placeholder={"Copy and paste an emoji here"}
      />
      <section>
        <p> {meaning} </p>
      </section>

      <section>
        <h2> Click Emoji Below </h2>
        <h3>
          {ourEmojis.map(function ourEmojis(emoji) {
            return (
              <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>
            );
          })}
        </h3>
      </section>
    </div>
  );
}
