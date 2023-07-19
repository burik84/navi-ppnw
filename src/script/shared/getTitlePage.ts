
import { nameMenu } from './constants';

export const getTitlePage = (key: string, page: string): string => {
  const name: string = key;
  let title: string[] = [''];
  switch (page) {
    case 'kip':
      title = Object.values(Object.fromEntries(Object.entries(nameMenu.nameKip).filter(([key]) => key === name)));
      break;
    case 'asutp':
      title = Object.values(Object.fromEntries(Object.entries(nameMenu.nameAsutp).filter(([key]) => key === name)));
      break;
    case 'info':
      title = Object.values(Object.fromEntries(Object.entries(nameMenu.nameInfo).filter(([key]) => key === name)));
      break;
    default:
      title = Object.values(Object.fromEntries(Object.entries(nameMenu.nameSchemes).filter(([key]) => key === name)));
      break;
  }
  return title[0];
};
