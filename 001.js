var fs = require('fs');

var readMe = fs.readFileSync('scowl60.txt', 'utf8').split('\r\n');

var fiveLetterWords = []

for(i = 0; i < readMe.length; i++) {
  if ((readMe[i].length == 5) && !(readMe[i].includes("'"))){
    fiveLetterWords.push(readMe[i])
  }
}
console.log(fiveLetterWords)
const file = fs.createWriteStream('fiveLetterWords.txt');
file.on('error', function(err) { Console.log(err) });
fiveLetterWords.forEach(value => file.write(`\"${value}\"\, `));
file.end();
