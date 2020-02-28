
const fs = require('fs');
const path = require('path');

module.exports = ((dir, filteredStr, callback)=>{
    fs.readdir(dir,(error,list)=>{
        if(error){
            return callback(error)
        }
        list = list.filter((file)=>{
            return path.extname(file) === '.' + filteredStr;
        })
        callback(null,list)
    })
})