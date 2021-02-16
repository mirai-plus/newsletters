// Esempio preso dal blog -> https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//Regex to match with
const regex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.html|.HTML)$/i
let filesArray = [];
//joining path of directory 
const directoryPath = path.join(__dirname, '../newsletters');
//passsing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(file => {
        // Cerca se i file combaciano con l'espressione regolare e stampali
        if (file.match(regex)) {
            filesArray.push(file)
        }
    });
    console.log(filesArray);
});