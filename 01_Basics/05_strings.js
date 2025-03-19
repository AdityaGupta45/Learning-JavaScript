const name = "aditya";
const repoCount = 50;

// console.log(name + repoCount + " Value")

console.log(`Hello my Name is ${name} and I have ${repoCount} repos`);

const gameName = new String ('Aditya-ag-pg');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));


const newGameName = gameName.substring(0, 4);
console.log(newGameName);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString = "     aditya    ";
console.log(newString);
console.log(newString.trim());

const url = "https://aditya.com/aditya%20gupta" ;
console.log(url.replace('%20', '-'));
console.log(url.includes('aditya'));
console.log(gameName.split('-'));