import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';
import { getData } from '../services/getData';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';
import { Lists } from '../components/Lists';

import { getTitlePage } from '../shared/getTitlePage';
import { IData } from '../shared/types';
import { otherMenu } from '../shared/constants';

const info: { [char: string]: string } = otherMenu

export const Info: React.FC = () => {
  const [listDataSection, setListDataSection] = useState<IData[] | []>([]);
  const [listDataTitle, setListDataTitle] = useState<string[] | []>([]);

  const key = useParams();
  const section: string = key.section || 'otpb';
  const title = getTitlePage(section, 'info');

  const { source = [] } = AppContextSource();
  useEffect(() => {
    const data = getData('info', source);
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
        <h2>Информация</h2>
        <p>Здесь собрана полезная информация по работе</p>
        <p>{title}</p>
        <Lists title={listDataTitle} data={listDataSection} />
      </main>
    </>
  );
};
