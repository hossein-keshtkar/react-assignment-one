import React from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [bgc, setBgc] = React.useState("#000");

  React.useEffect(() => {
    const fetchColor = async () => {
      const res = await fetch("https://www.colr.org/json/color/random");
      const { new_color } = await res.json();
      console.log(new_color);
      setBgc("#" + new_color);
      console.log(bgc);
    };

    fetchColor();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgc }}>
      <Card>
        <h1 id="text">Say Hello to My Little Friend!</h1>
        <p id="author">Tony Montana</p>
        <div>
          <div>
            <button id="new-quote">New Quote</button>
          </div>
          <div>
            <a
              href="https://www.twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
            >
              x
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
