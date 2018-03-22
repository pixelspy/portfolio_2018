




import React, { Component } from 'react';

import Header from './Header';

class Card extends Component {

  render() {
    return (
      <div style={{
        boxShadow: '6px 7px 31px 2px rgba(173,171,173,1)',
        width:'40%',
        margin: '15px',
        minHeight: '30vh',
      }}>
        <a href={this.props.workLink} target="_blank">
          <div style={{
          width: '100%',
          height: '80%',
          backgroundImage: `url("${this.props.imgSrc}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '0.5',
          }}></div>
        </a>
        <h3 style={{color: 'rgb(125, 125, 125)'}}>{this.props.title}</h3>
        <p>{this.props.technos}</p>
      </div>
    );
  }
}

export default Card;
