import React from 'react';
import SearchForm from '../forms/searchForm';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forms">
        <SearchForm debounceTimeout={300} />
      </div>
    );
  }
}

export default Search;
