import React from 'react';
// import {DebounceInput} from 'react-debounce-input';
import { Field, reduxForm } from 'redux-form';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="map">
        <form>
          <label>
            Search:

          </label>
        </form>
      </div>
    );
  }

}

export default Map;
