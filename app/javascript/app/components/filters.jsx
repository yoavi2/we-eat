import React from 'react';
import FilterForm from '../forms/filtersForm';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forms">
        <FilterForm />
      </div>
    );
  }
}

export default Filters;
