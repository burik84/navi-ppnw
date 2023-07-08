import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Map: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className="map">
        <h2>Карта сайта</h2>
        <p>В данном разделе схематично представлены разделы сайта.</p>
        <div className="lists">
          <h4>Схемы</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/scheme/sug">СУГ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/us">УС</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/uhb">УХБ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/ith">ИТХ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/ups">Причал</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/ahz">АХЗ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/other">Вспомогательная</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/ais">АИС</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/aov">АОВ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/rotork">Петли.Rotork</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/sgoes">Петли.СГОЭС</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>КИП</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/kip/analyzer">Анализаторы</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/pressure">Давление</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/rashod">Расход</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/temp">Температура</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/level">Уровень</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/modul">Барьеры Модули AI/DI/DO</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/ibp">ИБП</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/drive">Привода, клапаны</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/enraf">Enraf</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/equip">Диагностика</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/other">Разное</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>УКУ</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/uku/44_1">44.1</Link>
            </li>
            <li className="map__item">
              <Link to="/uku/44_2">44.2</Link>
            </li>
            <li className="map__item">
              <Link to="/uku/44_3">44.3</Link>
            </li>
            <li className="map__item">
              <Link to="/uku/700_3">700.3</Link>
            </li>
            <li className="map__item">
              <Link to="/uku/ppu">ППУ</Link>
            </li>
            <li className="map__item">
              <Link to="/uku/instruction">Инструкции и методики поверки</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>АСУТП</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/asutp/re">Инструкции</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/centum">Centum VP</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/prosafe">Prosafe RS</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/server">Servers</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/siemens">Siemens</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/stardom">Stardom</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/hart">Hart Modbus RS</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/scada">Scada</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/enraf">Enraf</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/smis">СМИС</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>Информация</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/info/otpb">ОТиПБ</Link>
            </li>
            <li className="map__item">
              <Link to="/info/equip">Технологическое оборудование. Инструкции</Link>
            </li>
            <li className="map__item">
              <Link to="/info/methodologies">Методики поверки</Link>
            </li>
            <li className="map__item">
              <Link to="/info/map">Схемы технологические. Карта площадки.</Link>
            </li>
            <li className="map__item">
              <Link to="/info/artic">Статьи</Link>
            </li>
            <li className="map__item">
              <Link to="/info/reglament">Регламенты</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
