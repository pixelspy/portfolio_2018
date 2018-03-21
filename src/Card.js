




import React, { Component } from 'react';

import Header from './Header';

class Card extends Component {

  render() {
    return (
      <div style={{
        // backgroundColor: 'rgb(236, 236, 236)',
        boxShadow: '6px 7px 31px 2px rgba(173,171,173,1)',
        width:'33%',
        height:'50%',
        margin: '15px',
        flexWrap: 'wrap',

      }}>
        <img style={{
          maxWidth:'100%',
          maxHeight:'100%',
        }}
          src={this.props.imgSrc} alt={this.props.ImgAlt}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.technos}</p>
      </div>
    );
  }
}

export default Card;
