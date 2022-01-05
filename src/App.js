import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {

  axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setQuotes(data[0]);
      });
  };

  
  useEffect(()=> {
    getQuote()
  }, [])





  console.log(quotes);
  return (
    <div className="App">
      <QuoteCard character={quotes.character} quote={quotes.quote} characterDirection={quotes.characterDirection} image={quotes.image} />
      <button type="button" onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
