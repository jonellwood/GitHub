import React from 'react';
import logo from '../logo.svg'

const Header = () => (
  <header className="App-header">
    <h1>City of Hanahan</h1>
    <span>COVID TEMP DATA ENTRY ENDPOINT</span>
    <p>Track that Temp and prevent the ...</p>
    <form>
      <h2>Please enter your information</h2>
        <input className="infoEnter"
          type="text"
          placeholder="Your Name"
        />
        <input className="infoEnter"
          type="text"
          placeholder="Your Temp"
        />
      <button type="submit">Enter</button>
      </form>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
);

export default Header;
