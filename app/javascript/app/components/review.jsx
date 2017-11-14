import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ review }) => (
  <li>
    {review.reviewer_name}
  </li>
);

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviewer_name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    comment: PropTypes.string,
  }),
};

export default Review;
