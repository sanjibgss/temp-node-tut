// CommonJS, everyfile is module (by default).
// Modules - Encapsulated Code (Only Share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils'); 

sayHi('Test Name');
sayHi(names.sanjib);
