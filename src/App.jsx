import { hot } from 'react-hot-loader/root';
import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from 'components/Test.tsx';

function App() {
  return (
    <>
      <h1>Hello Test</h1>
      <button type='button' className='btn btn-primary'>
        <Test text='false' />
        This is a bootstrap
      </button>
    </>
  );
}

export default hot(App);
