import React from 'react';

import styles from './styles.module.css';

type TestProps = {
  text: boolean;
};

function Test({ text }: TestProps) {
  return (
    <aside className={styles.testCSSModules}>
      <input type='text' />
      {text}
    </aside>
  );
}
export default Test;
