import React from 'react';

export class CuisineConverter extends React.Component {

  GetCuisineSign(cuisine) {

    if (cuisine.toLowerCase() == 'hamburger') {
      return 'A';
    } else if (cuisine.toLowerCase() == 'cafe') {
      return 'B';
    } else if (cuisine.toLowerCase() == 'dessert') {
      return 'E';
    } else if (cuisine.toLowerCase() == 'italian') {
      return 'L';
    } else if (cuisine.toLowerCase() == 'fish') {
      return 'K';
    } else if (cuisine.toLowerCase() == 'vegetarian') {
      return 'H';
    } else if (cuisine.toLowerCase() == 'chinese') {
      return 'I';
    } else {
      return '';
    }
  }

  render() {
    return (
      <span>
        {this.GetCuisineSign(this.props.cuisine)}
            </span>
    );


  }
}
