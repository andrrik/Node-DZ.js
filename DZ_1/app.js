const fs = require('node:fs');
const path = require('node:path');

const directoryPath = path.join(__dirname, 'Boxed_Directory');
let countBox = 5;
for(let i = 1; i <= countBox; i++ ){
    let folderName = `Directory_${i}`;
    let folderPath = path.join(directoryPath, folderName);
    fs.mkdir(folderPath, (err) => {})
}

for(let i = 1; i <= countBox; i++ ){
    let fileName = `TextFile_${i}.txt`;
    let folderPath = path.join(directoryPath, fileName);
    let fileContent = `Це вміст файлу ${fileName}`;
    fs.writeFile(folderPath, fileContent, (err) => {})
}
fs.readdir(directoryPath, (err, files) => {
    files.forEach((file) => {
        let filePath = path.join(directoryPath, file);
        fs.stat(filePath, (err, stats) => {
            if (stats.isFile()) {
                console.log(`FILE: ${file}`);
            } else if (stats.isDirectory()) {
                console.log(`FOLDER: ${file}`);
            }
        })
    })
})