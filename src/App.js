import "./App.css";
import { useEffect, useState } from "react";
import HeaderBanner from "./components/Header";
import FooterBanner from "./components/Footer";

const App = () => {
  // useState animal
  const [programmingQuotes, setProgrammingQuotes] = useState([]);
  // error handling useState
  const [error, setError] = useState(null);

  // use effect function from react
  // fetch function goes inside so only handle fetch request once
  useEffect(() => {
    const fetchData = async () => {
      // error
      try {
        //
        const response = await fetch(
          "https://programming-quotes-api.herokuapp.com/quotes?count=27"
        );
        //
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        //
        const data = await response.json();
        setProgrammingQuotes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError("Could not fetch the data");
      }
    };

    fetchData();
  }, []);
  //

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <HeaderBanner
          name="Katherine Ayers"
          masters="38"
          description="Week 6 API - Kat programming quotes"
        />
      </div>
      <div className="content">
        {/* error */}
        {error && <p>{error}</p>}
        {/* Map Array */}
        <div className="quoteBox">
          {programmingQuotes.map((quotes) => (
            <div className="eachQuote" key={quotes.id}>
              <h3>{quotes.author}</h3>
              <p>"{quotes.en}"</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <FooterBanner name="Katherine Ayers" github="Indykatz" />
      </div>
    </div>
  );
};

export default App;

// added comment to check branch - testing 123
