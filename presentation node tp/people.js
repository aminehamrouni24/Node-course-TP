const people =["amine","rawand","elene","mahdi"];
console.log(people);


//we're exporting our data to another file
//using the module.exports with the name of the variable to be exported
// the in the other file we use the require method with the path of this file
module.exports=(people)

//but if we need to export a lot of data ?

const family =["amine","rawand","elene","mahdi"];
const age=[27,22,2,1]

module.exports = {
     family,
      age ,
}