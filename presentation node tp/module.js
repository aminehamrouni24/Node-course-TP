// modularity = exporting and importing data from a file to another

const xyz = require('./people')
console.log(xyz)
// accessing directly to the properties of our object
console.log(xyz.family , xyz.age)

// we can use destructring as well , wich is a good way to just import what we need from the object;

const{family , age} =require('./people');
console.log(family,age)


//Node also come with a build-in modules
//exemples :
const os =require('os');
// this the operating system module
console.log(os.platform(), os.homedir());
//the platformo() methods checks the environment and the system running on (win32)
//  homedir() goes with the path 