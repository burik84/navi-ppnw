import { IData } from '../shared/types';

export const getData = (name: string, data: any) => {
  const dataFilter = data.filter((item: IData) => item.name === name);

  return dataFilter;
};
