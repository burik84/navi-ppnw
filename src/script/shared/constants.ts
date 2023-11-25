export const colorPrimary = '#17a2b8';
export const colorSecondary = '#F5F5F5';
export const colorAdditional = '#FF7549';
export const schemeMenu: { [char: string]: string } = {
  pkb: 'pkb',
  elomer: 'elomer',
  experiment: 'experiment',
  other: 'other',
};
export const kipMenu: { [char: string]: string } = {
  analyze: 'analyze',
  pressure: 'pressure',
  rashod: 'rashod',
  temp: 'temp',
  level: 'level',
  modul: 'modul',
  power: 'power',
  drive: 'drive',
  equip: 'equip',
  tenzo: 'tenzo',
  other: 'other',
};

export const otherMenu: { [char: string]: string } = {
  otpb: 'otpb',
  equip: 'equipment',
  map: 'map',
  artical: 'artical',
  reglament: 'reglament',
};
export const asutpMenu: { [char: string]: string } = {
  re: 'instruction',
  siemens: 'siemens',
  server: 'server',
  hart: 'hart',
  comm: 'communication',
};
const nameSchemes = {
  pkb: 'Цех поликарбоксилата',
  elomer: 'Цех Эломер',
  experiment: 'Экспериментальные установки ПКБ и ЭЛОМЕР',
  other: 'Другое',
};

const nameKip = {
  analyze: 'Анализаторы, газовый анализ',
  pressure: 'Измерение давления.',
  rashod: 'Измерение расхода.',
  temp: 'Измерение температуры.',
  level: 'Измерение уровня.',
  modul: 'Барьеры, реле, модули AI/AO/DI/DO',
  power: 'Источники бесперебойного питания, блоки питания, частотный преобразователи',
  drive: 'Привода, клапаны',
  equip: 'Здесь представлена информация по оборудованию для диагностики КИП и другое',
  tenzo: 'Тензометрические датчики и тензометрия',
  other: 'Инструкции по оборудованию, которые не входят в основные разделы'
};
const nameAsutp = {
  re: 'Инструкции',
  siemens: 'Siemens. Все о контроллере + Win CC. Руководство пользователя',
  server: 'Servers',
  hart: 'Информация о протоколах связи и интерфейсе',
  comm: 'Коммуникационное оборудование',
};
const nameInfo = {
  otpb: 'Инструкции по охране труда, промышленной безопасноти и т.д.',
  reglament: 'Регламенты и блокировки',
  equip: 'Технологическое оборудование, инструкции',
  map: 'Схемы технологические, карта площадки',
  artical: 'Статьи. Раздел в постоянной стадии наполнения',
};

export const nameMenu = {
  nameSchemes: nameSchemes,
  nameKip: nameKip,
  nameAsutp: nameAsutp,
  nameInfo: nameInfo
}