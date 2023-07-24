import React, { useState } from 'react';
import { AppContextSource } from '../services/AppContext';

import { IData } from '../shared/types';

import { TextField, createStyles, Theme, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import SearchIcon from '@mui/icons-material/Search';

import { Header } from '../layout/Header';
import { Lists } from '../components/Lists';

const useStyles = makeStyles()((theme: Theme) =>
  ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '42rem',
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // width: '25ch',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const getDataSearch = (text: string, data: []) => {
  const result: IData[] = [];
  data.forEach((item: IData) => {
    if (item.title.toLowerCase().includes(text)) {
      result.push(item);
    } else if (item.description.toLowerCase().includes(text)) {
      result.push(item);
    } else if (item.zona.includes(text)) {
      result.push(item);
    }
  });
  return result;
};

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');

  const [listDataSearch, setListDataSearch] = useState<IData[] | []>([]);
  const [listDataSearchTitle, setListDataSearchTitle] = useState<string[] | []>([]);

  const { source = [] } = AppContextSource();

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const str = String(searchValue);
    setSearchTerm(str);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const str = searchTerm.toLowerCase();
    setSearch(str);
    setSearchTerm('');

    const getSearch = getDataSearch(str, source);

    const titleArray: string[] = [];
    getSearch.forEach((item: IData) => {
      if (!titleArray.includes(item.title)) {
        titleArray.push(item.title);
      }
    });
    setListDataSearchTitle(titleArray);

    setListDataSearch(getSearch);
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <main>
        <h2 className="hidden">Поиск</h2>
        <div className="search">
          <form className={classes.classes.root} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
            <TextField
              autoFocus
              label="Search through site content"
              type="search"
              margin="normal"
              fullWidth
              color="primary"
              value={searchTerm}
              onChange={handleOnInputChange}
            />
            <Button
              variant="outlined"
              color="primary"
              className={classes.classes.margin}
              type="submit"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </form>
        </div>
        <div className="results">
          <h4>
            Результаты запросы <span>{search}</span>
            <Lists title={listDataSearchTitle} data={listDataSearch} />
          </h4>
        </div>
      </main>
    </>
  );
};
