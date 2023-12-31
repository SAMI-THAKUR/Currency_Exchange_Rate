const codeToCountryWithCurrencyNames = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia and Herzegovina Convertible Marka",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BOV: "Bolivian Mvdol",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswana Pula",
  BYR: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHE: "WIR Euro (Complementary Currency)",
  CHF: "Swiss Franc",
  CHW: "WIR Franc (Complementary Currency)",
  CLF: "Chilean Unidad de Fomento",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  COU: "Colombian Real Value Unit",
  CRC: "Costa Rican Colón",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CYP: "Cypriot Pound (Obsolete)",
  CZK: "Czech Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EEK: "Estonian Kroon (Obsolete)",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgyzstani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LTL: "Lithuanian Litas (Obsolete)",
  LVL: "Latvian Lats (Obsolete)",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanmar Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRO: "Mauritanian Ouguiya",
  MTL: "Maltese Lira (Obsolete)",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MXV: "Mexican Unidad de Inversion (UDI)",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Złoty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SKK: "Slovak Koruna (Obsolete)",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  STD: "São Tomé and Príncipe Dobra",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMM: "Turkmenistani Manat (Obsolete)",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  USN: "United States Dollar (Next day)",
  USS: "United States Dollar (Same day)",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistani Som",
  VEB: "Venezuelan Bolívar (Obsolete)",
  VND: "Vietnamese Đồng",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "Central African CFA Franc BEAC",
  XAG: "Silver (one troy ounce)",
  XAU: "Gold (one troy ounce)",
  XBA: "European Composite Unit (EURCO)",
  XBB: "European Monetary Unit (E.M.U.-6)",
  XBC: "European Unit of Account 9 (E.U.A.-9)",
  XBD: "European Unit of Account 17 (E.U.A.-17)",
  XCD: "East Caribbean Dollar",
  XDR: "International Monetary Fund (IMF) Special Drawing Rights",
  XFO: "French Gold Franc (Obsolete)",
  XFU: "French UIC-Franc (Obsolete)",
  XOF: "West African CFA Franc",
  XPD: "Palladium (one troy ounce)",
  XPF: "CFP Franc",
  XPT: "Platinum (one troy ounce)",
  XTS: "Testing Currency Code",
  XXX: "No Currency",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMK: "Zambian Kwacha (Obsolete)",
  ZWD: "Zimbabwean Dollar (Obsolete)",
};
export default codeToCountryWithCurrencyNames;
