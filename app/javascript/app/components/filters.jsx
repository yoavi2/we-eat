import React from 'react';
import FilterForm from '../forms/filtersForm';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FilterForm />
      </div>
    );
  }
}

export default Filters;
