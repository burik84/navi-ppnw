import React from 'react'

import { List, ListItem, ListItemText, Divider } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { Classes } from '../shared/types'

import { colorPrimary, colorSecondary } from '../shared/constants'

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    paddingTop: '0px',
    backgroundColor: colorPrimary,
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  list: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`,
  },
  primary: {
    color: colorSecondary,
    marginBottom: '.5rem',
    fontSize: '1.4rem',
  },
  secondary: {
    color: colorSecondary,
    fontSize: '1.2rem',
  },
}))

export const Aside: React.FC = () => {
  const classes: Classes = useStyles()
  return (
    <aside className="aside">
      <h3 className="aside__title">Ключевые правила безопасности</h3>
      <List component="ul" className={classes.classes.root}>
        <ListItem className={classes.classes.list}>
          <ListItemText
            classes={{
              primary: classes.classes.primary,
              secondary: classes.classes.secondary,
            }}
            primary="Сокрытие информации"
            secondary="Сокрытие информации об авариях, пожарах, инцидентах, фактах производственного травматизма, потенциально
            опасных происшествиях"
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.classes.list}>
          <ListItemText
            classes={{
              primary: classes.classes.primary,
              secondary: classes.classes.secondary,
            }}
            primary="Наряд-допуск"
            secondary="Проведение работ повышенной опасности без наряда-допуска, а также нарушение его требований"
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.classes.list}>
          <ListItemText
            classes={{
              primary: classes.classes.primary,
              secondary: classes.classes.secondary,
            }}
            primary="Блокировки без разрешения"
            secondary="Отключение или нарушение целостности блокировок, противоаварийной автоматической защиты и устройств
            обеспечения безопасности на действующем оборудовании без соответствующего письменного разрешения"
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.classes.list}>
          <ListItemText
            classes={{
              primary: classes.classes.primary,
              secondary: classes.classes.secondary,
            }}
            primary="Опьянения"
            secondary="Появление на территории предприятия в состоянии алкогольного, наркотического или иного токсического
            опьянения"
          />
        </ListItem>
      </List>
    </aside>
  )
}
