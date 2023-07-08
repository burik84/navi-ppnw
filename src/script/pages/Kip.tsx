import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';
import { getData } from '../services/getData';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { Lists } from '../components/Lists';

import { getTitlePage } from '../shared/getTitlePage';
import { IData } from '../shared/types';

const info: { [char: string]: string } = {
  analyzer: 'analyzer',
  pressure: 'pressure',
  rashod: 'rashod',
  temp: 'temp',
  level: 'level',
  modul: 'mod',
  ibp: 'ups',
  drive: 'drive',
  enraf: 'enraf',
  equip: 'equip',
  other: 'other',
};

export const Kip: React.FC = () => {
  const [listDataSection, setListDataSection] = useState<IData[] | []>([]);
  const [listDataTitle, setListDataTitle] = useState<string[] | []>([]);
  const key= useParams();
  const section: string = key.section || 'analyzer';
  const title = getTitlePage(section, 'kip');
  const { source = [] } = AppContextSource();

  useEffect(() => {
    const data = getData('kip', source);
    const dataSection = data.filter((item: IData) => item.folder === info[section]);

    setListDataSection(dataSection);
    const titleArray: string[] = [];
    dataSection.forEach((item: IData) => {
      if (!titleArray.includes(item.title)) {
        titleArray.push(item.title);
      }
    });
    setListDataTitle(titleArray);
  }, [section]);

  return (
    <>
      <Header />
      <Menu />
      <main>
        <h2>Инструкции на приборы КИП</h2>
        <p>Здесь собрана информация по оборудованию КИП</p>
        <p>{title}</p>
        <Lists title={listDataTitle} data={listDataSection} />
      </main>
    </>
  );
};
