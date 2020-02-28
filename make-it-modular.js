
const filter1 = require('./mymodule.js');
const dir = process.argv[2];
const filteredStr = process.argv[3];

filter1(dir,filteredStr,(error,list)=>{
    if(error){
        return console.error(`An error ocurred ${error}`)
    }
    list.forEach((file)=>{
        console.log(file);
    })
})