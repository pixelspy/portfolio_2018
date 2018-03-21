import React, { Component } from 'react';

import Header from './Header';
import Card from './Card';
import data from './data';

class App extends Component {


  render() {

    let { data, title } = this.props;

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <div style={{display: 'flex', marginLeft: '300px'}}>
          <Card
            title='Emmaus Défi BSE'
            imgSrc='/images/BSE.png'
            // technos='Wordpress, Sass JQuery'
          />
          <Card
            title='Voeux Simplon Prod'
            imgSrc='/images/santaprod.png'
            // technos='Javascript'
          />
          <Card
            title='Simplon Prod'
            imgSrc='/images/SimplonProd.png'
            // technos='Wordpress, Sass'
          />
        </div>

      </div>
    );
  }
}

export default App;
