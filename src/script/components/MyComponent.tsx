// https://www.sitepoint.com/react-with-typescript-best-practices/
import React from 'react';

interface Props {
  name?: string;
  color?: string;
}

type OtherProps = {
  name?: string;
  color?: string;
};

// Written as a function expression
export const MyComponent: React.FC<OtherProps> = ({ name, color }) => (
  <>
    <h2>Try out the counter below!</h2>
    <h3>
      {name}. {color}
    </h3>
  </>
);

// Written as a function declaration
export function Heading({ name, color }: Props): React.ReactElement {
  return (
    <>
      <h1>My Website Heading</h1>
      <h3>
        {name}. {color}
      </h3>
    </>
  );
}
