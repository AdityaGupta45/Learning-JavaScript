const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "Ruby",
    swift: 'Swift by apple'
    
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const progamming = ['js', 'python', 'java', 'ruby'];
for (const key in progamming) {
    // console.log(progamming[key]);
}
const map = new Map() ;
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    console.log(key);
}