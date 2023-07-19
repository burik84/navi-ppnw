export const colorPrimary = '#17a2b8';
export const colorSecondary = '#F5F5F5';
export const colorAdditional = '#FF7549';
export const schemeMenu: { [char: string]: string } = {
  pkb: 'pkb',
  elomer: 'elomer',
  experiment: 'experiment',
  teplo: 'kotel',
  other: 'other',
};
export const kipMenu: { [char: string]: string } = {
  analyzer: 'analyzer',
  pressure: 'pressure',
  rashod: 'rashod',
  temp: 'temp',
  level: 'level',
  modul: 'mod',
  ibp: 'ups',
  drive: 'drive',
  equip: 'equip',
  other: 'other',
};

export const otherMenu: { [char: string]: string } = {
  otpb: 'instruction',
  equip: 'equipment',
  map: 'map',
  artic: 'artic',
  reglament: 'reglament',
};
export const asutpMenu: { [char: string]: string } = {
  re: 'instruction',
  siemens: 'siemens',
  server: 'server',
  hart: 'hart',
};
const nameSchemes = {
  sug: 'Участок хранения СУГ под давлением',
  us: 'Участок слива',
  pkb: 'Цех поликарбоксилата',
  elomer: 'Цех Эломер',
  experiment: 'Экспериментальные установки ПКБ и ЭЛОМЕР',
  teplo: 'Котельное хозяйство',
  other: 'Другое',
};

const nameKip = {
  analyzer: 'Анализаторы, газовый анализ',
  pressure: 'Измерение давления.',
  rashod: 'Измерение расхода.',
  temp: 'Измерение температуры.',
  level: 'Измерение уровня.',
  modul: 'Барьеры, модули, AI/AO/DI/DO',
  ibp: 'Источники бесперебойного питания.',
  drive: 'Привода, клапаны',
  equip: 'Здесь представлена информация по оборудованию для диагностики КИП и другое',
  other: 'Инструкции по оборудованию, которые не входят в основные разделы',
};
const nameAsutp = {
  re: 'Инструкции',
  siemens: 'Siemens. Все о контроллере + Win CC. Руководство пользователя',
  server: 'Servers',
  hart: 'Информация о протоколах связи и интерфейсе',
};
const nameInfo = {
  otpb: 'Инструкции по охране труда, промышленной безопасноти и т.д.',
  reglament: 'Регламенты и блокировки',
  equip: 'Технологическое оборудование, инструкции',
  map: 'Схемы технологические, карта площадки',
  artic: 'Статьи. Раздел в постоянной стадии наполнения',
};

export const nameMenu = {
  nameSchemes: nameSchemes,
  nameKip: nameKip,
  nameAsutp: nameAsutp,
  nameInfo: nameInfo
}