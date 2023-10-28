/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

/**
 * Represents a list of provinces.
 * @type {string[]}
 */
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

/**
 * Represents a list of names.
 * @type {string[]}
 */
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

//Using forEach console log each name to the console
console.log('NAMES:');
names.forEach((name) => console.log(name));

//Console log each name with the corresponding province
console.log('\nNAMES AND PROVINCES:');
names.forEach((name, index) => console.log(`${name} - ${provinces[index]}`));

//Using map to turn province names to uppercase
console.log('\nPROVINCES (UPPERCASE):');
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces.join('\n'));

//Create a new array that has the amount of characters in each name
console.log('\nNAME LENGTH:');
const charCounts = names.map((name) => name.length);
console.log(charCounts);

//Sort all provinces alphabetically
console.log('\nSORTED PROVINCES:');
const sortedProvinces = provinces.toSorted();
sortedProvinces.forEach(province => console.log(province));

//Filter to remove provinces that contain "Cape" and get the count.
console.log('\nFILTERED PROVINCES:');
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length); // 3

// check for 'S' in names.
console.log('\nNAMES CONTAINING "S":');
const containsS = names.map((name) => name.includes('S') || name.includes('s'));
console.log(containsS);

//Turn the arrays into an object
console.log('\nNAME & PROVINCE OBJECT:');
const namesObject = names.reduce((object, name, index) => {
  object[name] = provinces[index];
  return object;
}, {});
console.log(namesObject);
