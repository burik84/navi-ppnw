import React from 'react';
import { ReactElement } from 'react';

type TProps = {
  href: string;
  name: string;
};

// Written as a function expression
export const LinkElement: React.FC<TProps> = ({ href, name }: TProps): ReactElement => {
  return (
    <li className="item">
      <a className="link" href={href}>
        {name}
      </a>
    </li>
  );
};
