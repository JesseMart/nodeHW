const fs = require('fs');
const contents = process.argv[2]
 fs.readFile(contents, (error, data)=>{
    if(error){
        return console.log(error)
    }
    const newLines = data.toString().split('\n').length - 1
    console.log(newLines);
});
