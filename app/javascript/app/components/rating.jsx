import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, maxRating }) => {

  if (rating === null) {
    return null;
  }

  const max = Math.ceil(maxRating);
  const roundedRating = Math.round(rating);


  return (
    <div className="rating-container">
      Rating:
      {
        Array.from({ length: max }, (v, i) => {
          return (i >= roundedRating) ?
            (<div
              key={i}
              className="rating-star empty-star"></div>) :
            (<div
              key={i}
              className="rating-star full-star"></div>);
        })
      }
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
