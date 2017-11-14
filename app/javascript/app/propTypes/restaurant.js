import PropTypes from 'prop-types';

const restaurant =
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
    is_10_bis: PropTypes.bool,
    address: PropTypes.string.isRequired,
    max_deliver_in_min: PropTypes.number,
  });

export default restaurant;
