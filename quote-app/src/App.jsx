import { useState } from "react";
const imageModules = import.meta.glob("./assets/*.{jpg,jpeg}", {
  eager: true,
  import: "default",
});

import "./App.css";

const bgImages = Object.values(imageModules);

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function generateQuote() {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3030/quotes");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
      setClickCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Oops! Couldn't fetch a quote. Is your server running?");
      setAuthor("");
    } finally {
      setIsLoading(false);
    }
  }

  const imageIndex = Math.floor(clickCount) % bgImages.length;

  return (
    <div className="hero-container">
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`bg-layer ${index === imageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="content">
        <h1>Quote Generator</h1>

        <div id="quote">
          {quote ? (
            <>
              <p className="quote-text">"{quote}"</p>
              {author && <p className="quote-author">— {author}</p>}
            </>
          ) : (
            <p className="quote-placeholder">
              Click the button below to get inspired
            </p>
          )}
        </div>

        <button className="button" onClick={generateQuote} disabled={isLoading}>
          {isLoading ? "Fetching..." : "Give me a Quote"}
        </button>
      </div>
    </div>
  );
}

export default App;
