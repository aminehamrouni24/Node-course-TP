const fs =require('fs');


//reading files
fs.readFile('./docs/doc.txt', (err, data)=>{
if (err){
    console.log('this is an error')
}
//the output of the console will buffer wich is a group of packages 
//we need to use toString()
console.log(data.toString())
})

//writing files
//test 1 : with an existing file :
fs.writeFile('./docs/doc.txt' , 'still learning NodeJs', ()=>{
    console.log('file was writing');
})

//test2: what if we don't have a file?
// Node will simply create a new file and add the text in it 

fs.writeFile('./docs/doc2.txt', 'this is a new file', ()=>{
    console.log('this a new file added')
})


//directories 
// making a new directory : fs.mkdir
// deleting a directory : fs.rmdir

fs.mkdir('./assets', (err)=>{
    if(err){
        console.log('this is an error')
    }
})

// if we try to create the same folder while it exists , it will through an error
// Let's solve this : 
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log('this is an error')
        }
        console.log('file added')
    })
}else {
    fs.rmdir('./assets', (err)=>{
        if(err){console.log('this is another error')}
        
    })
    console.log('file removed')
}

//delete files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if (err){
            console.log('this is an error')
        }
        console.log('file was removed')
    })
}