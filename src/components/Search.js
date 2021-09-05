import React, { useState, useEffect, useRef } from "react";
import SearchResults from "./SearchResults";
import "../index.css";
const Search = () => {
  const [searchItem, setsearchItem] = useState("");
  const [results, setResults] = useState(null);
  const [html, setHtml] = useState(null);
  const handleSubmit = (e) => {
    let url = " https://imdb8.p.rapidapi.com/auto-complete?q=" + searchItem;
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "618d7cf839msh6dd38c29f8e1ddap14b0cajsn0c359e5f26e2",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => setResults(data));

    e.preventDefault();
  };
  let isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      const { d, q } = results;
      setHtml(
        d.map((items) => {
          if ("i" in items && "imageUrl" in items.i) {
            return (
              <SearchResults
                img={items.i.imageUrl}
                title={items.l}
                year={items.y}
                stars={items.s}
              />
            );
          }
        })
      );
    }
  }, [results]);

  return (
    <div>
      <div className="searchField">
        <form onSubmit={handleSubmit}>
          <input
            className="inputSearch"
            placeholder="ex. Avengers"
            type="text"
            onChange={(e) => {
              setsearchItem(e.target.value);
              console.log(searchItem);
            }}
          />
          <button type="submit" className="buttonSearch">
            Search
          </button>
        </form>
      </div>
      <div className="search">
        <section className="grid">{html}</section>
      </div>
    </div>
  );
};

export default Search;
