var arr;

function getArr(arr){
    this.arr = arr;
    arrToJsonFile();
}

function arrToJsonFile(){
    var json = JSON.stringify(arr);

    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', callback);
}

function addToJson(pet){
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); 
        obj.table.push(pet); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
    }});
}

function readJson(){
    
}