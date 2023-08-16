import React from "react";

import "./App.css";
import Card from "./components/Card";
import { generateRandomNum } from "./functions/generateRandomNum";
import { generateRandomColor } from "./functions/generateRandomColor";
import { fetchQuotes } from "./apis/fetchQuotes";

function App() {
  const [bgc, setBgc] = React.useState(generateRandomColor());
  const [quotes, setQuotes] = React.useState(undefined);
  const [randomNum, setRandomNum] = React.useState(0);

  const handleClick = () => {
    setRandomNum(generateRandomNum());
    setBgc(generateRandomColor());
  };

  React.useEffect(() => {
    const handleAsyncFunc = async () => {
      setQuotes(await fetchQuotes());
    };

    setRandomNum(generateRandomNum());
    handleAsyncFunc();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgc }}>
      <Card>
        {quotes && (
          <div>
            <h1 id="text">{quotes[randomNum].text}</h1>
            <p id="author">{quotes[randomNum].author}</p>
          </div>
        )}
        <div>
          <div>
            <button onClick={handleClick} id="new-quote">
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
