let twoLetterISO = [
    "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", 
    "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", 
    "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", 
    "ro", "rs", "ru", "sa", "se", "sg", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"
];

let isoCountries = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cu: "Cuba",
    cz: "Czech Republic",
    de: "Germany",
    eg: "Egypt",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa"
};

// let countries = [];
const countries = twoLetterISO.map(element => ({
    iso_2_alpha: element,
    png: `https://flagcdn.com/32x24/${element}.png`,
    countryName: isoCountries[element]
}));


// function getCountryName(countryCode) {
//     if(isoCountries.hasOwnProperty.call(countryCode)){
//         return isoCountries[countryCode];
//     }
//     else{
//         return countryCode;
//     }
// }
console.log(countries);

export default countries;
