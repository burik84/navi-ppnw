import React from 'react';

import { createStyles, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
// import AndroidIcon from '@mui/icons-material/Android';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { colorAdditional } from '../shared/constants';
import { Classes } from '../shared/types';
import { ButtonInput } from '../components/ButtonInput';

import logoWindows from '../../assets/icons/windows-brands.svg';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    maxWidth: 520,
  },
  list: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  primary: {
    color: colorAdditional,
    marginBottom: '.5rem',
    fontSize: '1.8rem',
  }
})

);

export const Main: React.FC = () => {
  const classes: Classes = useStyles();

  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>О Главном</h2>
        <h3>В общем...</h3>
        <p>
          Нави - это проект, где собраны схемы, инструкции и другая полезная информация по оборудованию КИП, АСУТП и
          т.д. Вы находитесь на главной странице. Ниже дана инструкция по использованию нави на ПК. Пожалуйста,
          ознакомьтесь с ней, прежде чем задавать вопросы.
        </p>
        <h3>Важно!</h3>
        <p>Внутри папки navi, в связи с тем что используются относительные ссылки на название файлов, запрещается:</p>
        <List className={classes.classes.root}>
          <ListItem className={classes.classes.list}>
            <ListItemText
              classes={{
                primary: classes.classes.primary,
              }}
              primary="переносить/переименовывать папки и файлы"
            />
            <ListItemIcon>
              <WarningIcon color="error" />
            </ListItemIcon>
          </ListItem>
        </List>
        <h3>Как пользоваться на ...</h3>
        <h4>
          Windows
          <span className="logo">
            <img src={logoWindows} />
          </span>
        </h4>
        <ol>
          <li>Скопировать папку navi на свой ПК в любое удобное место.</li>
          <li>В папке navi/dist расположен файл index.html </li>
          <li>
            Для удобства пользования предлагаю создать ярлык - для этого на файле index.html открыть контекстное меню
            (правая клавиша мыши) и выбрать пункт меню Отправить и далее Рабочий стол создать ярлык
          </li>
          <li>Нажать на ярлык или открыть файл index.html</li>
          <li>
            Открывается главная страница на которой необходимо нажать кнопку
            <ButtonInput />
          </li>
          <li>Выбрать файл source.json (располагается в корне папки navi). Вся информация содержится в этом файле</li>
          <li>Можно пользоваться.</li>
        </ol>
        {/* <h4>
          Android <AndroidIcon color="primary" />
        </h4>
        <p>В стадии разработки</p> */}
      </main>
    </>
  );
};
