const nameSchemes = {
  sug: 'Участок хранения СУГ под давлением',
  us: 'Участок слива',
  uhb: 'Участок хранения бензинов',
  ith: 'Участок хранения СУГ охлажденных',
  ups: 'Участок погрузки судов',
  ahz: 'Административно-хозяйственная зона',
  other: 'Котельное хозяйство, очистные сооружения',
  ais: 'Схемы по части - автоматизация инженерных систем',
  aov: 'Схемы по вентиляции',
  rotork: 'Схемы по петлям Rotork на титулах',
  sgoes: 'Схемы по петлям газоанализаторов СГОЭС на титулах',
};

const nameUku = {
  '44_1':
    'тит. 44.1 Узел коммерческого учета СУГ под давлением. Жидкая и паро-газовая фаза. Инструкции, описание, схемы.',
  '44_2':
    'тит. 44.2 Узел коммерческого учета СУГ охлажденных. Жидкая и паро-газовая фаза. Инструкция, описание, схемы.',
  '44_3': 'тит. 44.3 Узел коммерческого учета бензинов. Инструкция, описание, схемы.',
  '700_3': 'тит. 700.3 Узел коммерческого учета пентана. Инструкция, описание, схемы.',
  ppu: 'Передвижная поверочная установка. Инструкция, схемы, описание',
  instruction: 'Инструкции и методики поверки',
};

const nameKip = {
  analyzer: 'Анализаторы, газовый анализ',
  pressure: 'Измерение давления.',
  rashod: 'Измерение расхода.',
  temp: 'Измерение температуры.',
  level: 'Измерение уровня.',
  modul: 'Барьеры, модули, AI/AO/DI/DO',
  ibp: 'Источники бесперебойного питания.',
  drive: 'Оборудование фирмы Rotork',
  enraf: 'Оборудование Enraf',
  equip: 'Здесь представлена информация по оборудованию для диагностики КИП и другое',
  other: 'Инструкции по оборудованию, которые не входят в основные разделы',
};
const nameAsutp = {
  re: 'Инструкции',
  centum: 'Centum VP. Контроллеры РСУ. Руководство пользователя',
  prosafe: 'Prosafe RS. Контроллеры ПАЗ. Руководство пользователя',
  server: 'Servers',
  siemens: 'Siemens. Все о контроллере S7-400, Win CC. Руководство пользователя',
  stardom: 'Stardom. Руководство пользователя, техническая информация',
  hart: 'Информация о протоколах связи и интерфейсе',
  scada: 'Scada',
  enraf: 'Enraf. Программное обеспечение Ensite PRO, Entis PRO',
  smis: 'Все что есть про систему мониторинга - сервер, клиент, АРМ и программы',
  basis: 'Базис. Контроллер БАЗИС-100',
};
const nameInfo = {
  otpb: 'Инструкции по охране труда, промышленной безопасноти и т.д.',
  equip: 'Технологическое оборудование, инструкции',
  methodologies: 'Методики проверки',
  map: 'Схемы технологические, карта площадки',
  artic: 'Статьи. Раздел в постоянной стадии наполнения',
};
export const getTitlePage = (key: string, page: string): string => {
  const name: string = key;
  let title: string[] = [''];
  switch (page) {
    case 'uku':
      title = Object.values(Object.fromEntries(Object.entries(nameUku).filter(([key]) => key === name)));
      break;
    case 'kip':
      title = Object.values(Object.fromEntries(Object.entries(nameKip).filter(([key]) => key === name)));
      break;
    case 'asutp':
      title = Object.values(Object.fromEntries(Object.entries(nameAsutp).filter(([key]) => key === name)));
      break;
    case 'info':
      title = Object.values(Object.fromEntries(Object.entries(nameInfo).filter(([key]) => key === name)));
      break;
    default:
      title = Object.values(Object.fromEntries(Object.entries(nameSchemes).filter(([key]) => key === name)));
      break;
  }
  return title[0];
};
