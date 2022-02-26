const fs = require('fs');

const printCatDetails = (details) => console.log(details);

const breedDetailsFromFile = (breed, callback) =>{
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      return callback();
    }
    callback(data);
  });
};

module.exports = breedDetailsFromFile;