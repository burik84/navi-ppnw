import React from 'react';
import { IData } from '../shared/types';

interface ILists {
  title: string[];
  data: IData[];
}

export const Lists: React.FC<ILists> = ({ title, data = [] }: ILists) => {
  return (
    <div>
      {title.map((titles, index) => {
        return (
          <div key={index}>
            <h4>{titles}</h4>
            <ul>
              {data
                .filter((el) => el.title === titles)
                .map((item, ind) => {
                  const url = `${item.urlBase}${item.file}`;
                  const description: string = item.description;
                  return (
                    <li key={ind}>
                      <a className="link" href={url} target="_blank" rel="noreferrer">
                        {description}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
