var fs = require('fs')
var data = require('./data.json'); //file system access synchronous
console.log(data)

fs.readFile('./data.json','utf-8',(err,data)=>
{
    if(!err)
    {
        var data = JSON.parse(data);

        console.log(data); 
    }
    else
    {
        console.log(err)
    }
          //file system access asynchronous
})

console.log("this is after") //this is exceuted first because of the asynchronous function readFile