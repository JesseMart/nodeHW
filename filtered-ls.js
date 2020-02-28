const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, (err, list)=>{
    if(err){
        console.log(err)
    }
list.forEach((file)=>{
        if(path.extname(file)=== ext){
            console.log(file);
        }
    })
})