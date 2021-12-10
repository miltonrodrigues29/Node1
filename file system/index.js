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

fs.readdir('c:/',function(err,data)
{
    if(err)
    {
        console.log(err);   //reading c directory contents synchronously
    }
    else
    {
        console.log(data);
    }
})

var data = {
    "name":"bob",
    "age":22
}

fs.writeFile('./newFile.json',JSON.stringify(data),(err,data)=>
{
    if(!err)
    {
        console.log("Written complete");                            //writing the data to json file
    }
    else
    {
        console.log("Error occured!");
    }
    
})

console.log("this is after") //this is exceuted first because of the asynchronous function readFile