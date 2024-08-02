import React from 'react'
import "./savequote.css"

const Savequote = ({ quotes }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p>No saved quotes yet</p>
      ) : (
        quotes.map((quote, index) => (
          <div key={index} className="saved-quote">
            {quote}
          </div>
        ))
      )}
    </div>
  );
};
export default Savequote