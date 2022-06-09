import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from './components/Test';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello Test</h1>
        <button type="button" className="btn btn-primary">
          This is a bootstrap
        </button>
        <Test />
      </>
    );
  }
}

export default hot(App);
