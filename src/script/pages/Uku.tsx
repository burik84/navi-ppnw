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
  '44_1': '44.1',
  '44_2': '44.2',
  '44_3': '44.3',
  '700_3': '700.3',
  ppu: 'ppu',
  instruction: 'instruction',
};

export const Uku: React.FC = () => {
  const [listDataSection, setListDataSection] = useState<IData[] | []>([]);
  const [listDataTitle, setListDataTitle] = useState<string[] | []>([]);

  const key = useParams();
  const section: string = key.section || '44_1';
  const title = getTitlePage(section, 'uku');

  const { source = [] } = AppContextSource();

  useEffect(() => {
    const data = getData('uku', source);
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
        <h2>Узлы коммерческого учета</h2>
        <p>Здесь собрана информация по узлам коммерческого учета</p>
        <p>{title}</p>
        <Lists title={listDataTitle} data={listDataSection} />
      </main>
    </>
  );
};
