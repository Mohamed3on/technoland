export interface City {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  levelsUrl: string;
  costOfLivingIndex: number;
}

export const cities: Record<string, City> = {
  'new-york': {
    id: 'new-york',
    name: 'New York',
    country: 'united states',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/levels/senior/locations/new-york-usa',
    imageUrl: '1522083165195-3424ed129620',
    costOfLivingIndex: 100,
  },
  sf: {
    id: 'sf',
    name: 'San Francisco',
    country: 'united states',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/san-francisco-bay-area',
    imageUrl: '1501594907352-04cda38ebc29',
    costOfLivingIndex: 100,
  },
  london: {
    id: 'london',
    name: 'London',
    country: 'united kingdom',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/london-metro-area',
    imageUrl: '1513635269975-59663e0ac1ad',
    costOfLivingIndex: 100,
  },
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    country: 'united arab emirates',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-dubai-area',
    imageUrl: '1512453979798-5ea266f8880c',
    costOfLivingIndex: 100,
  },
  berlin: {
    id: 'berlin',
    name: 'Berlin',
    country: 'germany',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/berlin-metropolitan-region',
    imageUrl: '1528728329032-2972f65dfb3f',
    costOfLivingIndex: 100,
  },
  barcelona: {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'spain',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-barcelona-area',
    imageUrl: '1523531294919-4bcd7c65e216',
    costOfLivingIndex: 100,
  },
  zurich: {
    id: 'zurich',
    name: 'Zurich',
    country: 'switzerland',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-zurich-area',
    imageUrl: '1515488764276-beab7607c1e6',
    costOfLivingIndex: 100,
  },
  seattle: {
    id: 'seattle',
    name: 'Seattle',
    country: 'united states',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-seattle-area',
    imageUrl: '1538097304804-2a1b932466a9',
    costOfLivingIndex: 100,
  },
  sanDiego: {
    id: 'san-diego',
    name: 'San Diego',
    country: 'united states',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-san-diego-area',
    imageUrl: '1544879374-18b5da9f648f',
    costOfLivingIndex: 100,
  },
  amsterdam: {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'netherlands',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-amsterdam-area',
    imageUrl: '1534351590666-13e3e96b5017',
    costOfLivingIndex: 100,
  },
  portland: {
    id: 'portland',
    name: 'Portland',
    country: 'united states',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/levels/senior/locations/greater-portland-area',
    imageUrl: '1541457523724-a09e41d470c0',
    costOfLivingIndex: 100,
  },
  'tel-aviv': {
    id: 'tel-aviv',
    name: 'Tel Aviv-Yafo',
    country: 'israel',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/tel-aviv-metropolitan-area',
    imageUrl: '1544971471-38ebd82c9124',
    costOfLivingIndex: 100,
  },
  vancouver: {
    id: 'vancouver',
    name: 'Vancouver',
    country: 'canada',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-vancouver',
    imageUrl: '1559511260-0d6431c5a97f',
    costOfLivingIndex: 100,
  },
  sydney: {
    id: 'sydney',
    name: 'Sydney',
    country: 'australia',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-sydney?city=1311',
    imageUrl: '1506973035872-a4ec16b8e8d9',
    costOfLivingIndex: 100,
  },
  'abu-dhabi': {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'united arab emirates',
    levelsUrl:
      'https://www.levels.fyi/t/software-engineer/locations/united-arab-emirates?city=6764',
    imageUrl: '1511632765549-86ac1b8b6319',
    costOfLivingIndex: 100,
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    country: 'singapore',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/singapore',
    imageUrl: '1525625293386-3f8f99389edd',
    costOfLivingIndex: 100,
  },
  dublin: {
    id: 'dublin',
    name: 'Dublin',
    country: 'ireland',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-dublin-area',
    imageUrl: '1549918484-c502db76f56d',
    costOfLivingIndex: 100,
  },
  luxembourg: {
    id: 'luxembourg',
    name: 'Luxembourg',
    country: 'luxembourg',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/luxembourg',
    imageUrl: '1587974728139-bc5c55f04cae',
    costOfLivingIndex: 100,
  },
  copenhagen: {
    id: 'copenhagen',
    name: 'Copenhagen',
    country: 'denmark',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/denmark?city=17241',
    imageUrl: '1513622470522-26c3c8a854bc',
    costOfLivingIndex: 100,
  },
  cambridge: {
    id: 'cambridge',
    name: 'Cambridge',
    country: 'united kingdom',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-cambridge-area',
    imageUrl: '1579966395627-8d5c3bc6bb96',
    costOfLivingIndex: 100,
  },
  geneva: {
    id: 'geneva',
    name: 'Geneva',
    country: 'switzerland',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/switzerland?city=6730',
    imageUrl: '1538332576179-e6f5f3af7c46',
    costOfLivingIndex: 100,
  },
  'los-angeles': {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'united states',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-los-angeles-area',
    imageUrl: '1515896769750-31548aa180ed',
    costOfLivingIndex: 100,
  },
  austin: {
    id: 'austin',
    name: 'Austin',
    country: 'united states',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-austin-area',
    imageUrl: '1531218150217-54595bc2b934',
    costOfLivingIndex: 100,
  },
  boston: {
    id: 'boston',
    name: 'Boston',
    country: 'united states',
    levelsUrl: 'https://www.levels.fyi/t/software-engineer/locations/greater-boston-area',
    imageUrl: '1524862855171-0c689546828a',
    costOfLivingIndex: 100,
  },
};
