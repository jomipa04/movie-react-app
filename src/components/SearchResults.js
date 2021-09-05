import React from "react";
import "../index.css";
const SearchResults = (props) => {
  return (
    <div className="searchItems">
      <img src={props.img} alt="" className="image" />
      <div className="text-details">
        <div className="text">
          <h1>{props.title}</h1>
          <p>({props.year})</p>
          <p>
            <strong>Starring:</strong> {props.stars}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
