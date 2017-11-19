import React from 'react';

const DEFAULT_ICON = 'F';

export default class CuisineConverter extends React.Component {

  GetCuisineSign(cuisine) {

    if (cuisine === null) {
      return DEFAULT_ICON;
    }

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
      return DEFAULT_ICON;
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

