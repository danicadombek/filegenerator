const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would you like to create? Please seperate by comma.',
  answer => {
    answer
      .split(',')
      //ändert string in ein array
      .map(name => name.trim())
      //entfernt leerzeichen
      .forEach(answer => writeFile(answer))
    //erstellt das für jede antwort
    rl.close()
  }
)
