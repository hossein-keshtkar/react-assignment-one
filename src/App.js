import React from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [bgc, setBgc] = React.useState("#000");
  const [quotes, setQuotes] = React.useState([
    {
      text: "Say Hello to My Little Friend!",
      author: "Tony Montana",
    },
  ]);
  const [randomNum, setRandomNum] = React.useState(0);

  const generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum >= 16) generateRandomNum();
    else {
      // setRandomNum(randomNum);
      return randomNum;
    }
  };

  const randomColorGenerator = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  // setBgc("#" + Math.floor(Math.random() * 16777215).toString(16));

  const fetchQuote = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    return await res.json();
    // setQuotes(data);
  };

  React.useEffect(() => {
    generateRandomNum();
    fetchQuote();
  }, []);

  React.useEffect(() => {
    randomColorGenerator();
  }, [randomNum]);

  return (
    <div className="App" style={{ backgroundColor: bgc }}>
      <Card>
        <h1 id="text">{quotes[randomNum].text}</h1>
        <p id="author">{quotes[randomNum].author}</p>
        <div>
          <div>
            <button onClick={generateRandomNum} id="new-quote">
              New Quote
            </button>
          </div>
          <div>
            <a
              href="https://www.twitter.com/intent/tweet"
              rel="noreferrer"
              id="tweet-quote"
              target="_blank"
            >
              twitter
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
