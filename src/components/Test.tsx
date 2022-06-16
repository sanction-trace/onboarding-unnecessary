import React from 'react';

import styles from './styles.module.css';

type TestProps = {
  text: number;
};

function Test({ text }: TestProps): JSX.Element {
  return (
    <aside className={styles.testCSSModules}>
      <input type='text' />
      {text}
    </aside>
  );
}

export default Test;
