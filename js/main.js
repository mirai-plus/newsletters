// Esempio preso dal blog -> https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

//Acquisisci elemento HTML dal file che servirà poi per stamparlo
// const lista = document.querySelector('.lista')
//requiring path and fs modules
const path = require('path');
const fs = require('fs-extra');
//Regex to match with
const regex = /([a-zA-Z0-9\s_\\.\-\(\):])+(.html|.HTML)$/i
//joining path of directory 
const directoryPath = path.join(__dirname, '../newsletters');
//passing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(file => {
        // Cerca se i file combaciano con l'espressione regolare e stampali
        if (file.match(regex)) {
            // let nl = document.createElement('div')
            // nl.className ='single'
            // let linkNl = document.createElement('a')
            // linkNl.setAttribute('href',`/newsletters/${file}`)
            // nl.appendChild(linkNl)
            // console.log(linkNl.getAttribute('href'))
            // //stampa nella pagina la singola scheda della newsletter
            // lista.appendChild(nl)
            console.log(file)
        }

    });
});