import { City } from '@/types';

export const REGIONS = {
  EUROPE: 'Europe',
  NORTH_AMERICA: 'North America',
  SOUTH_AMERICA: 'South America',
  ASIA: 'Asia',
  MIDDLE_EAST: 'Middle East',
  OCEANIA: 'Oceania',
  AFRICA: 'Africa',
} as const;

export const cities: Record<string, City> = {
  'new-york': {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    levelsUrl: 'new-york-usa',

    region: REGIONS.NORTH_AMERICA,
  },
  sf: {
    id: 'sf',
    name: 'San Francisco',
    country: 'United States',
    levelsUrl: 'san-francisco-bay-area',

    region: REGIONS.NORTH_AMERICA,
  },
  london: {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    levelsUrl: 'london-metro-area',
    region: REGIONS.EUROPE,
  },
  dubai: {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    levelsUrl: 'greater-dubai-area',

    region: REGIONS.MIDDLE_EAST,
  },
  berlin: {
    id: 'berlin',
    name: 'Berlin',
    country: 'Germany',
    levelsUrl: 'berlin-metropolitan-region',

    region: REGIONS.EUROPE,
  },
  barcelona: {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    levelsUrl: 'greater-barcelona-area',

    region: REGIONS.EUROPE,
  },
  zurich: {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    levelsUrl: 'greater-zurich-area',

    region: REGIONS.EUROPE,
  },
  seattle: {
    id: 'seattle',
    name: 'Seattle',
    country: 'United States',
    levelsUrl: 'greater-seattle-area',

    region: REGIONS.NORTH_AMERICA,
  },
  'san-diego': {
    id: 'san-diego',
    name: 'San Diego',
    country: 'United States',
    levelsUrl: 'greater-san-diego-area',

    region: REGIONS.NORTH_AMERICA,
  },
  amsterdam: {
    id: 'amsterdam',
    name: 'Amsterdam',
    country: 'Netherlands',
    levelsUrl: 'greater-amsterdam-area',

    region: REGIONS.EUROPE,
  },
  portland: {
    id: 'portland',
    name: 'Portland',
    country: 'United States',
    levelsUrl: 'greater-portland-area',

    region: REGIONS.NORTH_AMERICA,
  },
  'tel-aviv': {
    id: 'tel-aviv',
    name: 'Tel Aviv-Yafo',
    country: 'Israel',
    levelsUrl: 'tel-aviv-metropolitan-area',

    region: REGIONS.ASIA,
  },
  vancouver: {
    id: 'vancouver',
    name: 'Vancouver',
    country: 'Canada',
    levelsUrl: 'greater-vancouver',

    region: REGIONS.NORTH_AMERICA,
  },
  sydney: {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    levelsUrl: 'greater-sydney',

    region: REGIONS.OCEANIA,
  },
  'abu-dhabi': {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'United Arab Emirates',
    levelsUrl: 'united-arab-emirates',

    region: REGIONS.MIDDLE_EAST,
  },
  singapore: {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    levelsUrl: 'singapore',

    region: REGIONS.ASIA,
  },
  dublin: {
    id: 'dublin',
    name: 'Dublin',
    country: 'Ireland',
    levelsUrl: 'greater-dublin-area',

    region: REGIONS.EUROPE,
  },
  luxembourg: {
    id: 'luxembourg',
    name: 'Luxembourg',
    country: 'Luxembourg',
    levelsUrl: 'luxembourg',

    region: REGIONS.EUROPE,
  },
  copenhagen: {
    id: 'copenhagen',
    name: 'Copenhagen',
    country: 'Denmark',
    levelsUrl: 'denmark',

    region: REGIONS.EUROPE,
  },
  cambridge: {
    id: 'cambridge',
    name: 'Cambridge',
    country: 'United Kingdom',
    levelsUrl: 'greater-cambridge-area',
    region: REGIONS.EUROPE,
  },
  geneva: {
    id: 'geneva',
    name: 'Geneva',
    country: 'Switzerland',
    levelsUrl: 'switzerland',

    region: REGIONS.EUROPE,
  },
  'los-angeles': {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'United States',
    levelsUrl: 'greater-los-angeles-area',

    region: REGIONS.NORTH_AMERICA,
  },
  austin: {
    id: 'austin',
    name: 'Austin',
    country: 'United States',
    levelsUrl: 'greater-austin-area',

    region: REGIONS.NORTH_AMERICA,
  },
  boston: {
    id: 'boston',
    name: 'Boston',
    country: 'United States',
    levelsUrl: 'greater-boston-area',

    region: REGIONS.NORTH_AMERICA,
  },
  toronto: {
    id: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    levelsUrl: 'greater-toronto-area',

    region: REGIONS.NORTH_AMERICA,
  },
  lisbon: {
    id: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    levelsUrl: 'lisbon-metro-area',

    region: REGIONS.EUROPE,
  },
  chicago: {
    id: 'chicago',
    name: 'Chicago',
    country: 'United States',
    levelsUrl: 'greater-chicago-area',

    region: REGIONS.NORTH_AMERICA,
  },
  paris: {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    levelsUrl: 'greater-paris-area',

    region: REGIONS.EUROPE,
  },
  miami: {
    id: 'miami',
    name: 'Miami',
    country: 'United States',
    levelsUrl: 'miami-ft-lauderdale-area',

    region: REGIONS.NORTH_AMERICA,
  },
  bengaluru: {
    id: 'bengaluru',
    name: 'Bangalore',
    country: 'India',
    levelsUrl: 'greater-bengaluru',

    region: REGIONS.ASIA,
  },
  atlanta: {
    id: 'atlanta',
    name: 'Atlanta',
    country: 'United States',
    levelsUrl: 'atlanta-area',

    region: REGIONS.NORTH_AMERICA,
  },
  philadelphia: {
    id: 'philadelphia',
    name: 'Philadelphia',
    country: 'United States',
    levelsUrl: 'philadelphia-area',

    region: REGIONS.NORTH_AMERICA,
  },
  stockholm: {
    id: 'stockholm',
    name: 'Stockholm',
    country: 'Sweden',
    levelsUrl: 'greater-stockholm',

    region: REGIONS.EUROPE,
  },
  nashville: {
    id: 'nashville',
    name: 'Nashville',
    country: 'United States',
    levelsUrl: 'nashville-area',

    region: REGIONS.NORTH_AMERICA,
  },
  montreal: {
    id: 'montreal',
    name: 'Montreal',
    country: 'Canada',
    levelsUrl: 'greater-montreal',

    region: REGIONS.NORTH_AMERICA,
  },
  vienna: {
    id: 'vienna',
    name: 'Vienna',
    country: 'Austria',
    levelsUrl: 'vienna-metropolitan-area',

    region: REGIONS.EUROPE,
  },
  'salt-lake-city': {
    id: 'salt-lake-city',
    name: 'Salt Lake City',
    country: 'United States',
    levelsUrl: 'salt-lake-city-greater-area',

    region: REGIONS.NORTH_AMERICA,
  },
  melbourne: {
    id: 'melbourne',
    name: 'Melbourne',
    country: 'Australia',
    levelsUrl: 'greater-melbourne-area',

    region: REGIONS.OCEANIA,
  },
  dallas: {
    id: 'dallas',
    name: 'Dallas',
    country: 'United States',
    levelsUrl: 'greater-dallas-area',

    region: REGIONS.NORTH_AMERICA,
  },
  helsinki: {
    id: 'helsinki',
    name: 'Helsinki',
    country: 'Finland',
    levelsUrl: 'greater-helsinki',

    region: REGIONS.EUROPE,
  },
  houston: {
    id: 'houston',
    name: 'Houston',
    country: 'United States',
    levelsUrl: 'greater-houston-area',

    region: REGIONS.NORTH_AMERICA,
  },
  oslo: {
    id: 'oslo',
    name: 'Oslo',
    country: 'Norway',
    levelsUrl: 'greater-oslo-region',

    region: REGIONS.EUROPE,
  },
  munich: {
    id: 'munich',
    name: 'Munich',
    country: 'Germany',
    levelsUrl: 'munich-metro-region',

    region: REGIONS.EUROPE,
  },
  calgary: {
    id: 'calgary',
    name: 'Calgary',
    country: 'Canada',
    levelsUrl: 'greater-calgary-area',

    region: REGIONS.NORTH_AMERICA,
  },
  orlando: {
    id: 'orlando',
    name: 'Orlando',
    country: 'United States',
    levelsUrl: 'orlando-daytona-bch-melbrn-area',

    region: REGIONS.NORTH_AMERICA,
  },
  riyadh: {
    id: 'riyadh',
    name: 'Riyadh',
    country: 'Saudi Arabia',
    levelsUrl: 'saudi-arabia',

    region: REGIONS.MIDDLE_EAST,
  },
  minneapolis: {
    id: 'minneapolis',
    name: 'Minneapolis',
    country: 'United States',
    levelsUrl: 'minneapolis-st-paul-area',

    region: REGIONS.NORTH_AMERICA,
  },
  cairo: {
    id: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    levelsUrl: 'greater-cairo',

    region: REGIONS.AFRICA,
  },
  edinburgh: {
    id: 'edinburgh',
    name: 'Edinburgh',
    country: 'United Kingdom',
    levelsUrl: 'edinburgh-metro-area',

    region: REGIONS.EUROPE,
  },
  ottawa: {
    id: 'ottawa',
    name: 'Ottawa',
    country: 'Canada',
    levelsUrl: 'greater-ottawa-area',

    region: REGIONS.NORTH_AMERICA,
  },
  auckland: {
    id: 'auckland',
    name: 'Auckland',
    country: 'New Zealand',
    levelsUrl: 'auckland-region',

    region: REGIONS.OCEANIA,
  },
  manchester: {
    id: 'manchester',
    name: 'Manchester',
    country: 'United Kingdom',
    levelsUrl: 'greater-manchester',

    region: REGIONS.EUROPE,
  },
  baltimore: {
    id: 'baltimore',
    name: 'Baltimore',
    country: 'United States',
    levelsUrl: 'baltimore-area',

    region: REGIONS.NORTH_AMERICA,
  },
  brisbane: {
    id: 'brisbane',
    name: 'Brisbane',
    country: 'Australia',
    levelsUrl: 'south-east-queensland-metro-region',

    region: REGIONS.OCEANIA,
  },
  madrid: {
    id: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    levelsUrl: 'madrid-metropolitan-area',

    region: REGIONS.EUROPE,
  },
  denver: {
    id: 'denver',
    name: 'Denver',
    country: 'United States',
    levelsUrl: 'greater-denver-and-boulder-area',

    region: REGIONS.NORTH_AMERICA,
  },
  raleigh: {
    id: 'raleigh',
    name: 'Raleigh',
    country: 'United States',
    levelsUrl: 'raleigh-durham-area',

    region: REGIONS.NORTH_AMERICA,
  },
  tampa: {
    id: 'tampa',
    name: 'Tampa',
    country: 'United States',
    levelsUrl: 'tampa-st-pete-sarasota-area',

    region: REGIONS.NORTH_AMERICA,
  },
  milan: {
    id: 'milan',
    name: 'Milan',
    country: 'Italy',
    levelsUrl: 'italy',

    region: REGIONS.EUROPE,
  },
  athens: {
    id: 'athens',
    name: 'Athens',
    country: 'Greece',
    levelsUrl: 'greece',

    region: REGIONS.EUROPE,
  },
  hamburg: {
    id: 'hamburg',
    name: 'Hamburg',
    country: 'Germany',
    levelsUrl: 'hamburg-metro-region',

    region: REGIONS.EUROPE,
  },
  bristol: {
    id: 'bristol',
    name: 'Bristol',
    country: 'United Kingdom',
    levelsUrl: 'greater-bristol',

    region: REGIONS.EUROPE,
  },
  'las-vegas': {
    id: 'las-vegas',
    name: 'Las Vegas',
    country: 'United States',
    levelsUrl: 'las-vegas-area',

    region: REGIONS.NORTH_AMERICA,
  },
  mumbai: {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    levelsUrl: 'mumbai-metropolitan-region',

    region: REGIONS.ASIA,
  },
  charlotte: {
    id: 'charlotte',
    name: 'Charlotte',
    country: 'United States',
    levelsUrl: 'charlotte-nc-greater-area',

    region: REGIONS.NORTH_AMERICA,
  },
  bangkok: {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    levelsUrl: 'bangkok-metro-region',

    region: REGIONS.ASIA,
  },
  'buenos-aires': {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    levelsUrl: 'greater-buenos-aires-region',

    region: REGIONS.SOUTH_AMERICA,
  },
  'mexico-city': {
    id: 'mexico-city',
    name: 'Mexico City',
    country: 'Mexico',
    levelsUrl: 'mexico',

    region: REGIONS.NORTH_AMERICA,
  },
  tokyo: {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    levelsUrl: 'greater-tokyo-area',

    region: REGIONS.ASIA,
  },
  'kuala-lumpur': {
    id: 'kuala-lumpur',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    levelsUrl: 'greater-kuala-lumpur',

    region: REGIONS.ASIA,
  },
  medellin: {
    id: 'medellin',
    name: 'Medellin',
    country: 'Colombia',
    levelsUrl: 'colombia',

    region: REGIONS.SOUTH_AMERICA,
  },
  istanbul: {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    levelsUrl: 'istanbul-metropolitan-municipality',

    region: REGIONS.EUROPE,
  },
  porto: {
    id: 'porto',
    name: 'Porto',
    country: 'Portugal',
    levelsUrl: 'porto-district',

    region: REGIONS.EUROPE,
  },
  'cape-town': {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    levelsUrl: 'greater-cape-town-region',

    region: REGIONS.AFRICA,
  },
  seoul: {
    id: 'seoul',
    name: 'Seoul',
    country: 'South Korea',
    levelsUrl: 'seoul-capital-area',

    region: REGIONS.ASIA,
  },
  santiago: {
    id: 'santiago',
    name: 'Santiago',
    country: 'Chile',
    levelsUrl: 'chile',

    region: REGIONS.SOUTH_AMERICA,
  },
  belgrade: {
    id: 'belgrade',
    name: 'Belgrade',
    country: 'Serbia',
    levelsUrl: 'serbia',

    region: REGIONS.EUROPE,
  },
  warsaw: {
    id: 'warsaw',
    name: 'Warsaw',
    country: 'Poland',
    levelsUrl: 'warsaw-metropolitan-area',

    region: REGIONS.EUROPE,
  },
  prague: {
    id: 'prague',
    name: 'Prague',
    country: 'Czech Republic',
    levelsUrl: 'prague-metropolitan-area',

    region: REGIONS.EUROPE,
  },
  moscow: {
    id: 'moscow',
    name: 'Moscow',
    country: 'Russia',
    levelsUrl: 'moscow-metro-area',

    region: REGIONS.EUROPE,
  },
  shanghai: {
    id: 'shanghai',
    name: 'Shanghai',
    country: 'China',
    levelsUrl: 'greater-shanghai-area',

    region: REGIONS.ASIA,
  },
  beijing: {
    id: 'beijing',
    name: 'Beijing',
    country: 'China',
    levelsUrl: 'beijing-metropolitan-area',

    region: REGIONS.ASIA,
  },
  'sao-paulo': {
    id: 'sao-paulo',
    name: 'Sao Paulo',
    country: 'Brazil',
    levelsUrl: 'greater-sao-paulo',

    region: REGIONS.SOUTH_AMERICA,
  },
  taipei: {
    id: 'taipei',
    name: 'Taipei',
    country: 'Taiwan',
    levelsUrl: 'greater-taipei-area',

    region: REGIONS.ASIA,
  },
  bogota: {
    id: 'bogota',
    name: 'Bogota',
    country: 'Colombia',
    levelsUrl: 'colombia',

    region: REGIONS.SOUTH_AMERICA,
  },
  'rio-de-janeiro': {
    id: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    levelsUrl: 'greater-rio-de-janeiro-area',

    region: REGIONS.SOUTH_AMERICA,
  },
  sofia: {
    id: 'sofia',
    name: 'Sofia',
    country: 'Bulgaria',
    levelsUrl: 'sofia-city-province',

    region: REGIONS.EUROPE,
  },
  budapest: {
    id: 'budapest',
    name: 'Budapest',
    country: 'Hungary',
    levelsUrl: 'budapest-metropolitan-area',

    region: REGIONS.EUROPE,
  },
  phoenix: {
    id: 'phoenix',
    name: 'Phoenix',
    country: 'United States',
    levelsUrl: 'phoenix-area',

    region: REGIONS.NORTH_AMERICA,
  },
  'washington-dc': {
    id: 'washington-dc',
    name: 'Washington',
    country: 'United States',
    levelsUrl: 'northern-virginia-washington-dc',

    region: REGIONS.NORTH_AMERICA,
  },
};
