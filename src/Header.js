import React, { Component } from 'react';

const Header = () => (
    <header style= {{
      display:'flex',
      flexDirection: 'column',
      textAlign: 'right',
      borderRight: '20px solid black',
      paddingRight: '20px',
      margin: '10px 0 0 10px',
      width: '250px'
    }}>
      <h1>Home</h1>
      <h1>Works</h1>
      <h1>About</h1>
      <h1>Contact</h1>
    </header>
  );

  export default Header;
