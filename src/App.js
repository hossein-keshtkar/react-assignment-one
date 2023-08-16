import React from "react";

import "./App.css";
import Card from "./components/Card";
import { generateRandomNum } from "./functions/generateRandomNum";
import { generateRandomColor } from "./functions/generateRandomColor";
import { fetchQuotes } from "./functions/fetchQuotes";

function App() {
  const [bgc, setBgc] = React.useState("#000");
  const [quotes, setQuotes] = React.useState(undefined);
  const [randomNum, setRandomNum] = React.useState(0);

  React.useEffect(() => {
    const rndNum = generateRandomNum();

    const handleAsyncFunc = async () => {
      setQuotes(await fetchQuotes());
    };

    handleAsyncFunc();
    setRandomNum(rndNum);

    console.log(rndNum);
  }, []);

  React.useEffect(() => {
    setBgc(generateRandomColor());
    console.log(bgc);
  }, [randomNum]);

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
