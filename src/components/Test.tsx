import React from 'react';

type CardProps = {
  title: string;
  paragraph: boolean;
};

function Test({ title, paragraph }: CardProps) {
  return (
    <aside>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <input type='text' />
    </aside>
  );
}
export default Test;
