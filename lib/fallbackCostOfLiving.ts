export interface CostOfLivingEntry {
  city: string;
  country: string;
  index: number;
}

export interface CostOfLivingData {
  [key: string]: CostOfLivingEntry;
}

export const fallbackCostOfLiving: CostOfLivingData = {
  'zurich-switzerland': {
    city: 'Zurich',
    country: 'Switzerland',
    index: 85.4,
  },
  'lausanne-switzerland': {
    city: 'Lausanne',
    country: 'Switzerland',
    index: 76.9,
  },
  'geneva-switzerland': {
    city: 'Geneva',
    country: 'Switzerland',
    index: 83.3,
  },
  'basel-switzerland': {
    city: 'Basel',
    country: 'Switzerland',
    index: 76.1,
  },
  'new york-united states': {
    city: 'New York',
    country: 'United States',
    index: 100,
  },
  'bern-switzerland': {
    city: 'Bern',
    country: 'Switzerland',
    index: 69.7,
  },
  'san francisco-united states': {
    city: 'San Francisco',
    country: 'United States',
    index: 85.3,
  },
  'honolulu-united states': {
    city: 'Honolulu',
    country: 'United States',
    index: 73.5,
  },
  'san jose-united states': {
    city: 'San Jose',
    country: 'United States',
    index: 77.5,
  },
  'boston-united states': {
    city: 'Boston',
    country: 'United States',
    index: 78.5,
  },
  'reykjavik-iceland': {
    city: 'Reykjavik',
    country: 'Iceland',
    index: 65.5,
  },
  'washington-united states': {
    city: 'Washington',
    country: 'United States',
    index: 74.7,
  },
  'singapore-singapore': {
    city: 'Singapore',
    country: 'Singapore',
    index: 73.5,
  },
  'trondheim-norway': {
    city: 'Trondheim',
    country: 'Norway',
    index: 56,
  },
  'seattle-united states': {
    city: 'Seattle',
    country: 'United States',
    index: 69.1,
  },
  'london-united kingdom': {
    city: 'London',
    country: 'United Kingdom',
    index: 73,
  },
  'san diego-united states': {
    city: 'San Diego',
    country: 'United States',
    index: 73.6,
  },
  'los angeles-united states': {
    city: 'Los Angeles',
    country: 'United States',
    index: 70.4,
  },
  'oslo-norway': {
    city: 'Oslo',
    country: 'Norway',
    index: 56.6,
  },
  'sacramento-united states': {
    city: 'Sacramento',
    country: 'United States',
    index: 63.9,
  },
  'tel aviv-yafo-israel': {
    city: 'Tel Aviv-Yafo',
    country: 'Israel',
    index: 58.7,
  },
  'bergen-norway': {
    city: 'Bergen',
    country: 'Norway',
    index: 52.9,
  },
  'hong kong-hong kong (china)': {
    city: 'Hong Kong',
    country: 'Hong Kong (China)',
    index: 65.7,
  },
  'philadelphia-united states': {
    city: 'Philadelphia',
    country: 'United States',
    index: 59.5,
  },
  'miami-united states': {
    city: 'Miami',
    country: 'United States',
    index: 71.3,
  },
  'chicago-united states': {
    city: 'Chicago',
    country: 'United States',
    index: 65.2,
  },
  'raleigh-united states': {
    city: 'Raleigh',
    country: 'United States',
    index: 62.3,
  },
  'denver-united states': {
    city: 'Denver',
    country: 'United States',
    index: 62.9,
  },
  'copenhagen-denmark': {
    city: 'Copenhagen',
    country: 'Denmark',
    index: 57.5,
  },
  'atlanta-united states': {
    city: 'Atlanta',
    country: 'United States',
    index: 59.2,
  },
  'charlotte-united states': {
    city: 'Charlotte',
    country: 'United States',
    index: 62.3,
  },
  'tampa-united states': {
    city: 'Tampa',
    country: 'United States',
    index: 61,
  },
  'sydney-australia': {
    city: 'Sydney',
    country: 'Australia',
    index: 61.4,
  },
  'canberra-australia': {
    city: 'Canberra',
    country: 'Australia',
    index: 56.2,
  },
  'portland-united states': {
    city: 'Portland',
    country: 'United States',
    index: 59.3,
  },
  'new orleans-united states': {
    city: 'New Orleans',
    country: 'United States',
    index: 57,
  },
  'paris-france': {
    city: 'Paris',
    country: 'France',
    index: 55.6,
  },
  'espoo-finland': {
    city: 'Espoo',
    country: 'Finland',
    index: 49.8,
  },
  'pittsburgh-united states': {
    city: 'Pittsburgh',
    country: 'United States',
    index: 54.8,
  },
  'aarhus-denmark': {
    city: 'Aarhus',
    country: 'Denmark',
    index: 50.4,
  },
  'amsterdam-netherlands': {
    city: 'Amsterdam',
    country: 'Netherlands',
    index: 59.7,
  },
  'cambridge-united kingdom': {
    city: 'Cambridge',
    country: 'United Kingdom',
    index: 56.2,
  },
  'nashville-united states': {
    city: 'Nashville',
    country: 'United States',
    index: 59,
  },
  'jerusalem-israel': {
    city: 'Jerusalem',
    country: 'Israel',
    index: 52.9,
  },
  'seoul-south korea': {
    city: 'Seoul',
    country: 'South Korea',
    index: 48.7,
  },
  'dallas-united states': {
    city: 'Dallas',
    country: 'United States',
    index: 57.3,
  },
  'victoria-canada': {
    city: 'Victoria',
    country: 'Canada',
    index: 54.3,
  },
  'munich-germany': {
    city: 'Munich',
    country: 'Germany',
    index: 53.6,
  },
  'orlando-united states': {
    city: 'Orlando',
    country: 'United States',
    index: 57,
  },
  'minneapolis-united states': {
    city: 'Minneapolis',
    country: 'United States',
    index: 53,
  },
  'haarlem-netherlands': {
    city: 'Haarlem',
    country: 'Netherlands',
    index: 51.8,
  },
  'baltimore-united states': {
    city: 'Baltimore',
    country: 'United States',
    index: 55.2,
  },
  'salzburg-austria': {
    city: 'Salzburg',
    country: 'Austria',
    index: 48.6,
  },
  'dublin-ireland': {
    city: 'Dublin',
    country: 'Ireland',
    index: 59.2,
  },
  'columbus-united states': {
    city: 'Columbus',
    country: 'United States',
    index: 53.3,
  },
  'luxembourg-luxembourg': {
    city: 'Luxembourg',
    country: 'Luxembourg',
    index: 56.5,
  },
  'adelaide-australia': {
    city: 'Adelaide',
    country: 'Australia',
    index: 50.1,
  },
  'edinburgh-united kingdom': {
    city: 'Edinburgh',
    country: 'United Kingdom',
    index: 52.1,
  },
  'vancouver-canada': {
    city: 'Vancouver',
    country: 'Canada',
    index: 57.3,
  },
  'helsinki-finland': {
    city: 'Helsinki',
    country: 'Finland',
    index: 46.9,
  },
  'wellington-new zealand': {
    city: 'Wellington',
    country: 'New Zealand',
    index: 51.5,
  },
  'madison-united states': {
    city: 'Madison',
    country: 'United States',
    index: 53.8,
  },
  'tucson-united states': {
    city: 'Tucson',
    country: 'United States',
    index: 49.9,
  },
  'newcastle-australia': {
    city: 'Newcastle',
    country: 'Australia',
    index: 48.9,
  },
  'perth-australia': {
    city: 'Perth',
    country: 'Australia',
    index: 50.2,
  },
  'las vegas-united states': {
    city: 'Las Vegas',
    country: 'United States',
    index: 52.2,
  },
  'frankfurt-germany': {
    city: 'Frankfurt',
    country: 'Germany',
    index: 49.2,
  },
  'hamburg-germany': {
    city: 'Hamburg',
    country: 'Germany',
    index: 47.7,
  },
  'cork-ireland': {
    city: 'Cork',
    country: 'Ireland',
    index: 52.5,
  },
  'brighton-united kingdom': {
    city: 'Brighton',
    country: 'United Kingdom',
    index: 53.6,
  },
  'darmstadt-germany': {
    city: 'Darmstadt',
    country: 'Germany',
    index: 47.7,
  },
  'lyon-france': {
    city: 'Lyon',
    country: 'France',
    index: 44.7,
  },
  'trier-germany': {
    city: 'Trier',
    country: 'Germany',
    index: 43.9,
  },
  'phoenix-united states': {
    city: 'Phoenix',
    country: 'United States',
    index: 52.1,
  },
  'melbourne-australia': {
    city: 'Melbourne',
    country: 'Australia',
    index: 50.7,
  },
  'toronto-canada': {
    city: 'Toronto',
    country: 'Canada',
    index: 53.7,
  },
  'haifa-israel': {
    city: 'Haifa',
    country: 'Israel',
    index: 43.8,
  },
  'hamilton-canada': {
    city: 'Hamilton',
    country: 'Canada',
    index: 48.5,
  },
  'milan-italy': {
    city: 'Milan',
    country: 'Italy',
    index: 50.6,
  },
  'stockholm-sweden': {
    city: 'Stockholm',
    country: 'Sweden',
    index: 48.9,
  },
  'salt lake city-united states': {
    city: 'Salt Lake City',
    country: 'United States',
    index: 52,
  },
  'kelowna-canada': {
    city: 'Kelowna',
    country: 'Canada',
    index: 49.1,
  },
  'calgary-canada': {
    city: 'Calgary',
    country: 'Canada',
    index: 49,
  },
  'dusseldorf-germany': {
    city: 'Dusseldorf',
    country: 'Germany',
    index: 46.5,
  },
  'heidelberg-germany': {
    city: 'Heidelberg',
    country: 'Germany',
    index: 47.5,
  },
  'cleveland-united states': {
    city: 'Cleveland',
    country: 'United States',
    index: 48.3,
  },
  'san antonio-united states': {
    city: 'San Antonio',
    country: 'United States',
    index: 50.8,
  },
  'brussels-belgium': {
    city: 'Brussels',
    country: 'Belgium',
    index: 47.3,
  },
  'austin-united states': {
    city: 'Austin',
    country: 'United States',
    index: 58,
  },
  'auckland-new zealand': {
    city: 'Auckland',
    country: 'New Zealand',
    index: 48.2,
  },
  'maastricht-netherlands': {
    city: 'Maastricht',
    country: 'Netherlands',
    index: 46.7,
  },
  'antwerp-belgium': {
    city: 'Antwerp',
    country: 'Belgium',
    index: 43.8,
  },
  'manchester-united kingdom': {
    city: 'Manchester',
    country: 'United Kingdom',
    index: 48.8,
  },
  'brisbane-australia': {
    city: 'Brisbane',
    country: 'Australia',
    index: 49.7,
  },
  'rotterdam-netherlands': {
    city: 'Rotterdam',
    country: 'Netherlands',
    index: 50,
  },
  'ottawa-canada': {
    city: 'Ottawa',
    country: 'Canada',
    index: 48.5,
  },
  'vienna-austria': {
    city: 'Vienna',
    country: 'Austria',
    index: 45.9,
  },
  'boise-united states': {
    city: 'Boise',
    country: 'United States',
    index: 50,
  },
  'bristol-united kingdom': {
    city: 'Bristol',
    country: 'United Kingdom',
    index: 50.6,
  },
  'stuttgart-germany': {
    city: 'Stuttgart',
    country: 'Germany',
    index: 46.1,
  },
  'utrecht-netherlands': {
    city: 'Utrecht',
    country: 'Netherlands',
    index: 49.7,
  },
  'freiburg im breisgau-germany': {
    city: 'Freiburg im Breisgau',
    country: 'Germany',
    index: 45,
  },
  'essen-germany': {
    city: 'Essen',
    country: 'Germany',
    index: 41.5,
  },
  'glasgow-united kingdom': {
    city: 'Glasgow',
    country: 'United Kingdom',
    index: 47,
  },
  'halifax-canada': {
    city: 'Halifax',
    country: 'Canada',
    index: 48.7,
  },
  'graz-austria': {
    city: 'Graz',
    country: 'Austria',
    index: 42.6,
  },
  'houston-united states': {
    city: 'Houston',
    country: 'United States',
    index: 51.4,
  },
  'berlin-germany': {
    city: 'Berlin',
    country: 'Germany',
    index: 47.5,
  },
  'montreal-canada': {
    city: 'Montreal',
    country: 'Canada',
    index: 46.2,
  },
  'karlsruhe-germany': {
    city: 'Karlsruhe',
    country: 'Germany',
    index: 44.4,
  },
  'gent-belgium': {
    city: 'Gent',
    country: 'Belgium',
    index: 42.5,
  },
  'bonn-germany': {
    city: 'Bonn',
    country: 'Germany',
    index: 43.7,
  },
  'cologne-germany': {
    city: 'Cologne',
    country: 'Germany',
    index: 45.2,
  },
  'almere-netherlands': {
    city: 'Almere',
    country: 'Netherlands',
    index: 45.3,
  },
  'bologna-italy': {
    city: 'Bologna',
    country: 'Italy',
    index: 43.9,
  },
  'nuremberg-germany': {
    city: 'Nuremberg',
    country: 'Germany',
    index: 42.8,
  },
  'aberdeen-united kingdom': {
    city: 'Aberdeen',
    country: 'United Kingdom',
    index: 42.7,
  },
  'leiden-netherlands': {
    city: 'Leiden',
    country: 'Netherlands',
    index: 47.8,
  },
  'jacksonville-united states': {
    city: 'Jacksonville',
    country: 'United States',
    index: 50,
  },
  'saskatoon-canada': {
    city: 'Saskatoon',
    country: 'Canada',
    index: 43.3,
  },
  'quebec city-canada': {
    city: 'Quebec City',
    country: 'Canada',
    index: 42.2,
  },
  'delft-netherlands': {
    city: 'Delft',
    country: 'Netherlands',
    index: 47.4,
  },
  'bremen-germany': {
    city: 'Bremen',
    country: 'Germany',
    index: 41.2,
  },
  'eindhoven-netherlands': {
    city: 'Eindhoven',
    country: 'Netherlands',
    index: 46.5,
  },
  'hanover-germany': {
    city: 'Hanover',
    country: 'Germany',
    index: 41.8,
  },
  'montpellier-france': {
    city: 'Montpellier',
    country: 'France',
    index: 40.4,
  },
  'mississauga-canada': {
    city: 'Mississauga',
    country: 'Canada',
    index: 50.5,
  },
  'dortmund-germany': {
    city: 'Dortmund',
    country: 'Germany',
    index: 40.8,
  },
  'leeds-united kingdom': {
    city: 'Leeds',
    country: 'United Kingdom',
    index: 44.8,
  },
  'tampere-finland': {
    city: 'Tampere',
    country: 'Finland',
    index: 41.1,
  },
  'liverpool-united kingdom': {
    city: 'Liverpool',
    country: 'United Kingdom',
    index: 43.4,
  },
  'mannheim-germany': {
    city: 'Mannheim',
    country: 'Germany',
    index: 41.3,
  },
  'dubai-united arab emirates': {
    city: 'Dubai',
    country: 'United Arab Emirates',
    index: 55.2,
  },
  'the hague (den haag)-netherlands': {
    city: 'The Hague (Den Haag)',
    country: 'Netherlands',
    index: 48.1,
  },
  'edmonton-canada': {
    city: 'Edmonton',
    country: 'Canada',
    index: 43.7,
  },
  'erlangen-germany': {
    city: 'Erlangen',
    country: 'Germany',
    index: 41.6,
  },
  'christchurch-new zealand': {
    city: 'Christchurch',
    country: 'New Zealand',
    index: 44.6,
  },
  'birmingham-united kingdom': {
    city: 'Birmingham',
    country: 'United Kingdom',
    index: 44.7,
  },
  'newcastle upon tyne-united kingdom': {
    city: 'Newcastle upon Tyne',
    country: 'United Kingdom',
    index: 41.9,
  },
  'aachen-germany': {
    city: 'Aachen',
    country: 'Germany',
    index: 39.8,
  },
  'leipzig-germany': {
    city: 'Leipzig',
    country: 'Germany',
    index: 39.5,
  },
  'sheffield-united kingdom': {
    city: 'Sheffield',
    country: 'United Kingdom',
    index: 42.7,
  },
  'macao-macao (china)': {
    city: 'Macao',
    country: 'Macao (China)',
    index: 43.5,
  },
  'winnipeg-canada': {
    city: 'Winnipeg',
    country: 'Canada',
    index: 41.5,
  },
  'malmo-sweden': {
    city: 'Malmo',
    country: 'Sweden',
    index: 40.2,
  },
  'dresden-germany': {
    city: 'Dresden',
    country: 'Germany',
    index: 39.2,
  },
  'gothenburg-sweden': {
    city: 'Gothenburg',
    country: 'Sweden',
    index: 40.5,
  },
  'belfast-united kingdom': {
    city: 'Belfast',
    country: 'United Kingdom',
    index: 41.6,
  },
  'london-canada': {
    city: 'London',
    country: 'Canada',
    index: 45.2,
  },
  'groningen-netherlands': {
    city: 'Groningen',
    country: 'Netherlands',
    index: 40.3,
  },
  'cincinnati-united states': {
    city: 'Cincinnati',
    country: 'United States',
    index: 45.9,
  },
  'limassol-cyprus': {
    city: 'Limassol',
    country: 'Cyprus',
    index: 46,
  },
  'kingston-jamaica': {
    city: 'Kingston',
    country: 'Jamaica',
    index: 40.5,
  },
  'leuven-belgium': {
    city: 'Leuven',
    country: 'Belgium',
    index: 40.2,
  },
  'padova-italy': {
    city: 'Padova',
    country: 'Italy',
    index: 39.5,
  },
  'tokyo-japan': {
    city: 'Tokyo',
    country: 'Japan',
    index: 41.4,
  },
  'tallinn-estonia': {
    city: 'Tallinn',
    country: 'Estonia',
    index: 36.8,
  },
  'verona-italy': {
    city: 'Verona',
    country: 'Italy',
    index: 38.5,
  },
  'port of spain-trinidad and tobago': {
    city: 'Port of Spain',
    country: 'Trinidad And Tobago',
    index: 36.7,
  },
  'abu dhabi-united arab emirates': {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    index: 45,
  },
  'sliema-malta': {
    city: 'Sliema',
    country: 'Malta',
    index: 42.2,
  },
  'turin-italy': {
    city: 'Turin',
    country: 'Italy',
    index: 36.3,
  },
  'rome-italy': {
    city: 'Rome',
    country: 'Italy',
    index: 40.5,
  },
  'barcelona-spain': {
    city: 'Barcelona',
    country: 'Spain',
    index: 41.9,
  },
  'naples-italy': {
    city: 'Naples',
    country: 'Italy',
    index: 37.4,
  },
  'san jose-costa rica': {
    city: 'San Jose',
    country: 'Costa Rica',
    index: 36.2,
  },
  'madrid-spain': {
    city: 'Madrid',
    country: 'Spain',
    index: 41.6,
  },
  'athens-greece': {
    city: 'Athens',
    country: 'Greece',
    index: 34.1,
  },
  'ljubljana-slovenia': {
    city: 'Ljubljana',
    country: 'Slovenia',
    index: 37,
  },
  'nicosia-cyprus': {
    city: 'Nicosia',
    country: 'Cyprus',
    index: 34.8,
  },
  'montevideo-uruguay': {
    city: 'Montevideo',
    country: 'Uruguay',
    index: 32.5,
  },
  'larnaca-cyprus': {
    city: 'Larnaca',
    country: 'Cyprus',
    index: 36.4,
  },
  'doha-qatar': {
    city: 'Doha',
    country: 'Qatar',
    index: 41.8,
  },
  'bari-italy': {
    city: 'Bari',
    country: 'Italy',
    index: 34,
  },
  'kampala-uganda': {
    city: 'Kampala',
    country: 'Uganda',
    index: 31.4,
  },
  'taipei-taiwan': {
    city: 'Taipei',
    country: 'Taiwan',
    index: 34.8,
  },
  'thessaloniki-greece': {
    city: 'Thessaloniki',
    country: 'Greece',
    index: 31.7,
  },
  'sharjah-united arab emirates': {
    city: 'Sharjah',
    country: 'United Arab Emirates',
    index: 36,
  },
  'split-croatia': {
    city: 'Split',
    country: 'Croatia',
    index: 34.5,
  },
  'prague-czech republic': {
    city: 'Prague',
    country: 'Czech Republic',
    index: 37.3,
  },
  'tartu-estonia': {
    city: 'Tartu',
    country: 'Estonia',
    index: 31.6,
  },
  'manama-bahrain': {
    city: 'Manama',
    country: 'Bahrain',
    index: 34.6,
  },
  'riyadh-saudi arabia': {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    index: 36.2,
  },
  'lisbon-portugal': {
    city: 'Lisbon',
    country: 'Portugal',
    index: 40.8,
  },
  'bratislava-slovakia': {
    city: 'Bratislava',
    country: 'Slovakia',
    index: 33.4,
  },
  'riga-latvia': {
    city: 'Riga',
    country: 'Latvia',
    index: 30.8,
  },
  'vilnius-lithuania': {
    city: 'Vilnius',
    country: 'Lithuania',
    index: 33.1,
  },
  'panama city-panama': {
    city: 'Panama City',
    country: 'Panama',
    index: 36.9,
  },
  'al khobar-saudi arabia': {
    city: 'Al Khobar',
    country: 'Saudi Arabia',
    index: 30.6,
  },
  'addis ababa-ethiopia': {
    city: 'Addis Ababa',
    country: 'Ethiopia',
    index: 31.9,
  },
  'vigo-spain': {
    city: 'Vigo',
    country: 'Spain',
    index: 31.2,
  },
  'zagreb-croatia': {
    city: 'Zagreb',
    country: 'Croatia',
    index: 31.6,
  },
  'seville (sevilla)-spain': {
    city: 'Seville (Sevilla)',
    country: 'Spain',
    index: 32.6,
  },
  'kaunas-lithuania': {
    city: 'Kaunas',
    country: 'Lithuania',
    index: 29.9,
  },
  'yerevan-armenia': {
    city: 'Yerevan',
    country: 'Armenia',
    index: 32.4,
  },
  'warsaw-poland': {
    city: 'Warsaw',
    country: 'Poland',
    index: 35,
  },
  'kuwait city-kuwait': {
    city: 'Kuwait City',
    country: 'Kuwait',
    index: 33.7,
  },
  'porto-portugal': {
    city: 'Porto',
    country: 'Portugal',
    index: 35,
  },
  'jeddah (jiddah)-saudi arabia': {
    city: 'Jeddah (Jiddah)',
    country: 'Saudi Arabia',
    index: 28.7,
  },
  'valencia-spain': {
    city: 'Valencia',
    country: 'Spain',
    index: 34.4,
  },
  'malaga-spain': {
    city: 'Malaga',
    country: 'Spain',
    index: 34.7,
  },
  'brno-czech republic': {
    city: 'Brno',
    country: 'Czech Republic',
    index: 31.4,
  },
  'caracas-venezuela': {
    city: 'Caracas',
    country: 'Venezuela',
    index: 28.6,
  },
  'tirana-albania': {
    city: 'Tirana',
    country: 'Albania',
    index: 29.6,
  },
  'beirut-lebanon': {
    city: 'Beirut',
    country: 'Lebanon',
    index: 31.4,
  },
  'ad dammam-saudi arabia': {
    city: 'Ad Dammam',
    country: 'Saudi Arabia',
    index: 27.6,
  },
  'gaborone-botswana': {
    city: 'Gaborone',
    country: 'Botswana',
    index: 25.9,
  },
  'plzen-czech republic': {
    city: 'Plzen',
    country: 'Czech Republic',
    index: 28.5,
  },
  'budva-montenegro': {
    city: 'Budva',
    country: 'Montenegro',
    index: 32.5,
  },
  'krakow (cracow)-poland': {
    city: 'Krakow (Cracow)',
    country: 'Poland',
    index: 31.8,
  },
  'santo domingo-dominican republic': {
    city: 'Santo Domingo',
    country: 'Dominican Republic',
    index: 30.5,
  },
  'monterrey-mexico': {
    city: 'Monterrey',
    country: 'Mexico',
    index: 31.7,
  },
  'muscat-oman': {
    city: 'Muscat',
    country: 'Oman',
    index: 29.4,
  },
  'ostrava-czech republic': {
    city: 'Ostrava',
    country: 'Czech Republic',
    index: 28.3,
  },
  'kaohsiung-taiwan': {
    city: 'Kaohsiung',
    country: 'Taiwan',
    index: 27,
  },
  'wroclaw-poland': {
    city: 'Wroclaw',
    country: 'Poland',
    index: 30.4,
  },
  'gdansk-poland': {
    city: 'Gdansk',
    country: 'Poland',
    index: 30.1,
  },
  'suzhou-china': {
    city: 'Suzhou',
    country: 'China',
    index: 27.1,
  },
  'shanghai-china': {
    city: 'Shanghai',
    country: 'China',
    index: 33.9,
  },
  'coimbra-portugal': {
    city: 'Coimbra',
    country: 'Portugal',
    index: 29.9,
  },
  'belgrade-serbia': {
    city: 'Belgrade',
    country: 'Serbia',
    index: 30,
  },
  'katowice-poland': {
    city: 'Katowice',
    country: 'Poland',
    index: 28,
  },
  'abidjan-ivory coast': {
    city: 'Abidjan',
    country: 'Ivory Coast',
    index: 29.1,
  },
  'istanbul-turkey': {
    city: 'Istanbul',
    country: 'Turkey',
    index: 30.8,
  },
  'guatemala city-guatemala': {
    city: 'Guatemala City',
    country: 'Guatemala',
    index: 28.4,
  },
  'sofia-bulgaria': {
    city: 'Sofia',
    country: 'Bulgaria',
    index: 28,
  },
  'san salvador-el salvador': {
    city: 'San Salvador',
    country: 'El Salvador',
    index: 30.2,
  },
  'amman-jordan': {
    city: 'Amman',
    country: 'Jordan',
    index: 26.1,
  },
  'braga-portugal': {
    city: 'Braga',
    country: 'Portugal',
    index: 29.8,
  },
  'budapest-hungary': {
    city: 'Budapest',
    country: 'Hungary',
    index: 28.1,
  },
  'santiago-chile': {
    city: 'Santiago',
    country: 'Chile',
    index: 27.4,
  },
  'bucharest-romania': {
    city: 'Bucharest',
    country: 'Romania',
    index: 27.4,
  },
  'osijek-croatia': {
    city: 'Osijek',
    country: 'Croatia',
    index: 26.4,
  },
  'poznan-poland': {
    city: 'Poznan',
    country: 'Poland',
    index: 28.3,
  },
  'phuket-thailand': {
    city: 'Phuket',
    country: 'Thailand',
    index: 30,
  },
  'constanta-romania': {
    city: 'Constanta',
    country: 'Romania',
    index: 26.4,
  },
  'lodz-poland': {
    city: 'Lodz',
    country: 'Poland',
    index: 26.8,
  },
  'kigali-rwanda': {
    city: 'Kigali',
    country: 'Rwanda',
    index: 25.6,
  },
  'beijing-china': {
    city: 'Beijing',
    country: 'China',
    index: 30.7,
  },
  'phnom penh-cambodia': {
    city: 'Phnom Penh',
    country: 'Cambodia',
    index: 26.1,
  },
  'novi sad-serbia': {
    city: 'Novi Sad',
    country: 'Serbia',
    index: 26.6,
  },
  'mexico city-mexico': {
    city: 'Mexico City',
    country: 'Mexico',
    index: 30.2,
  },
  'buenos aires-argentina': {
    city: 'Buenos Aires',
    country: 'Argentina',
    index: 26.4,
  },
  'bangkok-thailand': {
    city: 'Bangkok',
    country: 'Thailand',
    index: 27.9,
  },
  'cluj-napoca-romania': {
    city: 'Cluj-Napoca',
    country: 'Romania',
    index: 26.7,
  },
  'harare-zimbabwe': {
    city: 'Harare',
    country: 'Zimbabwe',
    index: 25.3,
  },
  'shenzhen-china': {
    city: 'Shenzhen',
    country: 'China',
    index: 28.5,
  },
  'szczecin-poland': {
    city: 'Szczecin',
    country: 'Poland',
    index: 26.7,
  },
  'varna-bulgaria': {
    city: 'Varna',
    country: 'Bulgaria',
    index: 25,
  },
  'podgorica-montenegro': {
    city: 'Podgorica',
    country: 'Montenegro',
    index: 26,
  },
  'brasov-romania': {
    city: 'Brasov',
    country: 'Romania',
    index: 25.1,
  },
  'antalya-turkey': {
    city: 'Antalya',
    country: 'Turkey',
    index: 25.9,
  },
  'merida-mexico': {
    city: 'Merida',
    country: 'Mexico',
    index: 25.7,
  },
  'izmir-turkey': {
    city: 'Izmir',
    country: 'Turkey',
    index: 25.2,
  },
  'timisoara-romania': {
    city: 'Timisoara',
    country: 'Romania',
    index: 23.6,
  },
  'guayaquil-ecuador': {
    city: 'Guayaquil',
    country: 'Ecuador',
    index: 23.2,
  },
  'tijuana-mexico': {
    city: 'Tijuana',
    country: 'Mexico',
    index: 26.4,
  },
  'queretaro (santiago de querétaro)-mexico': {
    city: 'Queretaro (Santiago de Querétaro)',
    country: 'Mexico',
    index: 25.2,
  },
  'colombo-sri lanka': {
    city: 'Colombo',
    country: 'Sri Lanka',
    index: 23.5,
  },
  'ankara-turkey': {
    city: 'Ankara',
    country: 'Turkey',
    index: 25.1,
  },
  'manila-philippines': {
    city: 'Manila',
    country: 'Philippines',
    index: 25.8,
  },
  'guangzhou-china': {
    city: 'Guangzhou',
    country: 'China',
    index: 25,
  },
  'johannesburg-south africa': {
    city: 'Johannesburg',
    country: 'South Africa',
    index: 24.1,
  },
  'suva-fiji': {
    city: 'Suva',
    country: 'Fiji',
    index: 26.9,
  },
  'tbilisi-georgia': {
    city: 'Tbilisi',
    country: 'Georgia',
    index: 26.3,
  },
  'oradea-romania': {
    city: 'Oradea',
    country: 'Romania',
    index: 22.5,
  },
  'guadalajara-mexico': {
    city: 'Guadalajara',
    country: 'Mexico',
    index: 25.5,
  },
  'burgas-bulgaria': {
    city: 'Burgas',
    country: 'Bulgaria',
    index: 23.2,
  },
  'banja luka-bosnia and herzegovina': {
    city: 'Banja Luka',
    country: 'Bosnia And Herzegovina',
    index: 22,
  },
  'iasi-romania': {
    city: 'Iasi',
    country: 'Romania',
    index: 22.8,
  },
  'debrecen-hungary': {
    city: 'Debrecen',
    country: 'Hungary',
    index: 23.2,
  },
  'pattaya-thailand': {
    city: 'Pattaya',
    country: 'Thailand',
    index: 24.2,
  },
  'kuala lumpur-malaysia': {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    index: 23.7,
  },
  'plovdiv-bulgaria': {
    city: 'Plovdiv',
    country: 'Bulgaria',
    index: 22.5,
  },
  'hangzhou-china': {
    city: 'Hangzhou',
    country: 'China',
    index: 24.1,
  },
  'sarajevo-bosnia and herzegovina': {
    city: 'Sarajevo',
    country: 'Bosnia And Herzegovina',
    index: 22.2,
  },
  'sibiu-romania': {
    city: 'Sibiu',
    country: 'Romania',
    index: 22.1,
  },
  'ulaanbaatar-mongolia': {
    city: 'Ulaanbaatar',
    country: 'Mongolia',
    index: 25.1,
  },
  'quito-ecuador': {
    city: 'Quito',
    country: 'Ecuador',
    index: 23,
  },
  'erbil (irbil)-iraq': {
    city: 'Erbil (Irbil)',
    country: 'Iraq',
    index: 22.7,
  },
  'cape town-south africa': {
    city: 'Cape Town',
    country: 'South Africa',
    index: 26.1,
  },
  'pretoria-south africa': {
    city: 'Pretoria',
    country: 'South Africa',
    index: 22.6,
  },
  'puebla-mexico': {
    city: 'Puebla',
    country: 'Mexico',
    index: 23.2,
  },
  'moscow-russia': {
    city: 'Moscow',
    country: 'Russia',
    index: 27.4,
  },
  'lima-peru': {
    city: 'Lima',
    country: 'Peru',
    index: 23.5,
  },
  'sao paulo-brazil': {
    city: 'Sao Paulo',
    country: 'Brazil',
    index: 23.9,
  },
  'chisinau-moldova': {
    city: 'Chisinau',
    country: 'Moldova',
    index: 23.5,
  },
  'skopje-north macedonia': {
    city: 'Skopje',
    country: 'North Macedonia',
    index: 21.1,
  },
  'bursa-turkey': {
    city: 'Bursa',
    country: 'Turkey',
    index: 22,
  },
  'casablanca-morocco': {
    city: 'Casablanca',
    country: 'Morocco',
    index: 22.3,
  },
  'accra-ghana': {
    city: 'Accra',
    country: 'Ghana',
    index: 22.8,
  },
  'nis-serbia': {
    city: 'Nis',
    country: 'Serbia',
    index: 20.5,
  },
  'baku-azerbaijan': {
    city: 'Baku',
    country: 'Azerbaijan',
    index: 21.8,
  },
  'baghdad-iraq': {
    city: 'Baghdad',
    country: 'Iraq',
    index: 21.8,
  },
  'lagos-nigeria': {
    city: 'Lagos',
    country: 'Nigeria',
    index: 27.2,
  },
  'rabat-morocco': {
    city: 'Rabat',
    country: 'Morocco',
    index: 21.9,
  },
  'nanjing-china': {
    city: 'Nanjing',
    country: 'China',
    index: 21.6,
  },
  'nairobi-kenya': {
    city: 'Nairobi',
    country: 'Kenya',
    index: 21.6,
  },
  'mersin-turkey': {
    city: 'Mersin',
    country: 'Turkey',
    index: 20.6,
  },
  'batumi-georgia': {
    city: 'Batumi',
    country: 'Georgia',
    index: 21.9,
  },
  'rio de janeiro-brazil': {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    index: 21.1,
  },
  'marrakech-morocco': {
    city: 'Marrakech',
    country: 'Morocco',
    index: 19.6,
  },
  'durban-south africa': {
    city: 'Durban',
    country: 'South Africa',
    index: 20.5,
  },
  'brasilia-brazil': {
    city: 'Brasilia',
    country: 'Brazil',
    index: 20.7,
  },
  'chiang mai-thailand': {
    city: 'Chiang Mai',
    country: 'Thailand',
    index: 20.2,
  },
  'cuenca-ecuador': {
    city: 'Cuenca',
    country: 'Ecuador',
    index: 20.3,
  },
  'jakarta-indonesia': {
    city: 'Jakarta',
    country: 'Indonesia',
    index: 21.9,
  },
  'wuhan-china': {
    city: 'Wuhan',
    country: 'China',
    index: 20,
  },
  'almaty-kazakhstan': {
    city: 'Almaty',
    country: 'Kazakhstan',
    index: 22.7,
  },
  'florianopolis-brazil': {
    city: 'Florianopolis',
    country: 'Brazil',
    index: 20.9,
  },
  'chengdu-china': {
    city: 'Chengdu',
    country: 'China',
    index: 19,
  },
  'campinas-brazil': {
    city: 'Campinas',
    country: 'Brazil',
    index: 19.9,
  },
  'porto alegre-brazil': {
    city: 'Porto Alegre',
    country: 'Brazil',
    index: 19.5,
  },
  'ho chi minh city-vietnam': {
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    index: 21.2,
  },
  'astana (nur-sultan)-kazakhstan': {
    city: 'Astana (Nur-Sultan)',
    country: 'Kazakhstan',
    index: 20.4,
  },
  'fortaleza-brazil': {
    city: 'Fortaleza',
    country: 'Brazil',
    index: 18.1,
  },
  'medellin-colombia': {
    city: 'Medellin',
    country: 'Colombia',
    index: 20.4,
  },
  'kiev (kyiv)-ukraine': {
    city: 'Kiev (Kyiv)',
    country: 'Ukraine',
    index: 21.3,
  },
  'saint petersburg-russia': {
    city: 'Saint Petersburg',
    country: 'Russia',
    index: 21,
  },
  'belo horizonte-brazil': {
    city: 'Belo Horizonte',
    country: 'Brazil',
    index: 19.1,
  },
  'hanoi-vietnam': {
    city: 'Hanoi',
    country: 'Vietnam',
    index: 19.6,
  },
  'tunis-tunisia': {
    city: 'Tunis',
    country: 'Tunisia',
    index: 17.7,
  },
  'dar es salaam-tanzania': {
    city: 'Dar es Salaam',
    country: 'Tanzania',
    index: 20.9,
  },
  'curitiba-brazil': {
    city: 'Curitiba',
    country: 'Brazil',
    index: 18.5,
  },
  'tehran-iran': {
    city: 'Tehran',
    country: 'Iran',
    index: 20.4,
  },
  'vladivostok-russia': {
    city: 'Vladivostok',
    country: 'Russia',
    index: 19.4,
  },
  'bogota-colombia': {
    city: 'Bogota',
    country: 'Colombia',
    index: 19,
  },
  'algiers-algeria': {
    city: 'Algiers',
    country: 'Algeria',
    index: 16.7,
  },
  'sao jose dos campos-brazil': {
    city: 'Sao Jose dos Campos',
    country: 'Brazil',
    index: 18.5,
  },
  'bishkek-kyrgyzstan': {
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    index: 19.4,
  },
  'dnipro-ukraine': {
    city: 'Dnipro',
    country: 'Ukraine',
    index: 19.6,
  },
  'cali-colombia': {
    city: 'Cali',
    country: 'Colombia',
    index: 17.1,
  },
  'pristina-kosovo (disputed territory)': {
    city: 'Pristina',
    country: 'Kosovo (Disputed Territory)',
    index: 17.8,
  },
  'minsk-belarus': {
    city: 'Minsk',
    country: 'Belarus',
    index: 18.8,
  },
  'mumbai-india': {
    city: 'Mumbai',
    country: 'India',
    index: 22.4,
  },
  'tashkent-uzbekistan': {
    city: 'Tashkent',
    country: 'Uzbekistan',
    index: 21,
  },
  'odessa (odesa)-ukraine': {
    city: 'Odessa (Odesa)',
    country: 'Ukraine',
    index: 16.6,
  },
  'recife-brazil': {
    city: 'Recife',
    country: 'Brazil',
    index: 17.2,
  },
  'gurgaon-india': {
    city: 'Gurgaon',
    country: 'India',
    index: 17.3,
  },
  'yekaterinburg-russia': {
    city: 'Yekaterinburg',
    country: 'Russia',
    index: 17.6,
  },
  'kathmandu-nepal': {
    city: 'Kathmandu',
    country: 'Nepal',
    index: 15.2,
  },
  'lviv-ukraine': {
    city: 'Lviv',
    country: 'Ukraine',
    index: 17.9,
  },
  'samara-russia': {
    city: 'Samara',
    country: 'Russia',
    index: 15.9,
  },
  'kharkiv-ukraine': {
    city: 'Kharkiv',
    country: 'Ukraine',
    index: 15.5,
  },
  'tomsk-russia': {
    city: 'Tomsk',
    country: 'Russia',
    index: 16.1,
  },
  'nizhny novgorod-russia': {
    city: 'Nizhny Novgorod',
    country: 'Russia',
    index: 16.6,
  },
  'bangalore-india': {
    city: 'Bangalore',
    country: 'India',
    index: 17.1,
  },
  'kazan-russia': {
    city: 'Kazan',
    country: 'Russia',
    index: 16.8,
  },
  'krasnodar-russia': {
    city: 'Krasnodar',
    country: 'Russia',
    index: 16.4,
  },
  'novosibirsk-russia': {
    city: 'Novosibirsk',
    country: 'Russia',
    index: 16.2,
  },
  'ufa-russia': {
    city: 'Ufa',
    country: 'Russia',
    index: 15.4,
  },
  'kaliningrad-russia': {
    city: 'Kaliningrad',
    country: 'Russia',
    index: 16.1,
  },
  'asuncion-paraguay': {
    city: 'Asuncion',
    country: 'Paraguay',
    index: 17.2,
  },
  'dhaka-bangladesh': {
    city: 'Dhaka',
    country: 'Bangladesh',
    index: 14.2,
  },
  'rostov-on-don (rostov-na-donu)-russia': {
    city: 'Rostov-on-Don (Rostov-na-donu)',
    country: 'Russia',
    index: 15.7,
  },
  'voronezh-russia': {
    city: 'Voronezh',
    country: 'Russia',
    index: 15.2,
  },
  'pune-india': {
    city: 'Pune',
    country: 'India',
    index: 15.4,
  },
  'noida-india': {
    city: 'Noida',
    country: 'India',
    index: 14.9,
  },
  'delhi-india': {
    city: 'Delhi',
    country: 'India',
    index: 15.7,
  },
  'hyderabad-india': {
    city: 'Hyderabad',
    country: 'India',
    index: 14.9,
  },
  'ahmedabad-india': {
    city: 'Ahmedabad',
    country: 'India',
    index: 14.1,
  },
  'perm-russia': {
    city: 'Perm',
    country: 'Russia',
    index: 15,
  },
  'chennai-india': {
    city: 'Chennai',
    country: 'India',
    index: 13.9,
  },
  'tripoli-libya': {
    city: 'Tripoli',
    country: 'Libya',
    index: 13.7,
  },
  'chandigarh-india': {
    city: 'Chandigarh',
    country: 'India',
    index: 13.3,
  },
  'vadodara-india': {
    city: 'Vadodara',
    country: 'India',
    index: 12.8,
  },
  'chelyabinsk-russia': {
    city: 'Chelyabinsk',
    country: 'Russia',
    index: 13.9,
  },
  'islamabad-pakistan': {
    city: 'Islamabad',
    country: 'Pakistan',
    index: 13.5,
  },
  'cairo-egypt': {
    city: 'Cairo',
    country: 'Egypt',
    index: 13.2,
  },
  'kolkata-india': {
    city: 'Kolkata',
    country: 'India',
    index: 12.6,
  },
  'bhubaneswar-india': {
    city: 'Bhubaneswar',
    country: 'India',
    index: 12.6,
  },
  'surat-india': {
    city: 'Surat',
    country: 'India',
    index: 16,
  },
  'jaipur-india': {
    city: 'Jaipur',
    country: 'India',
    index: 12.5,
  },
  'kochi-india': {
    city: 'Kochi',
    country: 'India',
    index: 12.8,
  },
  'bhopal-india': {
    city: 'Bhopal',
    country: 'India',
    index: 12.1,
  },
  'karachi-pakistan': {
    city: 'Karachi',
    country: 'Pakistan',
    index: 11.7,
  },
  'indore-india': {
    city: 'Indore',
    country: 'India',
    index: 12.3,
  },
  'lucknow (lakhnau)-india': {
    city: 'Lucknow (Lakhnau)',
    country: 'India',
    index: 12.1,
  },
  'alexandria-egypt': {
    city: 'Alexandria',
    country: 'Egypt',
    index: 11.4,
  },
  'lahore-pakistan': {
    city: 'Lahore',
    country: 'Pakistan',
    index: 11.7,
  },
  'coimbatore-india': {
    city: 'Coimbatore',
    country: 'India',
    index: 11.6,
  },
};
