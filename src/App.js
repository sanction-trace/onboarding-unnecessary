import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from './containers/Test';

class App extends React.Component {
  render() {
    const a = { name: 'Test' };
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name ?? 'TESt'}</h1>
        <button type="button" className="btn btn-primary">
          This is a bootstrap
        </button>
        <Test />
      </>
    );
  }
}

export default hot(App);
