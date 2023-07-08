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
  sug: 'sug',
  us: 'us',
  uhb: 'uhb',
  ith: 'ith',
  ups: 'ups',
  ahz: 'ahz',
  other: 'other',
  ais: 'ais',
  aov: 'aov',
  rotork: 'rotork',
  sgoes: 'sgoes',
};

export const Scheme: React.FC = () => {
  const [listDataSection, setListDataSection] = useState<IData[] | []>([]);
  const [listDataTitle, setListDataTitle] = useState<string[] | []>([]);
  const key = useParams();

  const section: string = key.section || 'sug';
  const title = getTitlePage(section, 'scheme');
  const { source = [] } = AppContextSource();

  useEffect(() => {
    const data = getData('scheme', source);
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
        <h2>Схемы</h2>
        <p>{title}</p>
        <Lists title={listDataTitle} data={listDataSection} />
      </main>
    </>
  );
};
