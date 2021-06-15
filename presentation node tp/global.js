// global object
console.log(global)
//showing methods that are attached to the global object in Node
//Reminder : the global object in the browser is the window.object

// In node we work with the global object 

//test: using the settimeout method in the global object
global.setTimeout(() => {
    console.log('this is a test')
}, 3000);

//this method is offered to us in the global object so we don't need to explicit global.
setTimeout(() => {
    console.log('this is a test')
}, 1000);


// setInterval vs setTimeout:
//setInterval keeps running the code every time based on the sequence of time provided 
//setTimeOut runs the code once basedon the amount time provided
//test : 
const interval = setInterval(() => {
    console.log('this is another test with the interval')
}, 2000);

//it will compile until we break the code with ctrl+c
// or we use the 'clearInterval' method
//test:
setTimeout(() => {
    console.log('last test')
    clearInterval(int);
}, 4000);
const int = setInterval(() => {
    console.log('inside the method')
}, 1000);

// since we're working with node ; paths are really used in the future
console.log(__dirname)
//the absolut path of the directory
console.log(__filename)
// name of the folder