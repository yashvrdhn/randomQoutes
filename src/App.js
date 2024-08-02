import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard/QuoteCard';
import SavedQuotes from './SavedQuotes/SavedQuotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <QuoteCard quote={quote} saveQuote={saveQuote} />
      <SavedQuotes quotes={savedQuotes} />
      <button className="btn-quote" onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
