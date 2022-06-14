import React from 'react';

type TestProps = {
  text: boolean;
};

function Test({ text }: TestProps) {
  return (
    <aside>
      <input type='text' />
      {text}
    </aside>
  );
}
export default Test;
