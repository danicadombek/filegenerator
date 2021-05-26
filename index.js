const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message:
      'Which functions and files would you like to create? Please seperate by comma.',
  },
  {
    type: 'checkbox',
    message: 'Please select a file type',
    name: 'files',
    choices: [{ name: 'component' }, { name: 'cpec' }, { name: 'stories' }],
    validate(answer) {
      if (answer.legth < 1) {
        return 'You must choosen at least one file type.'
      }
      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  const files = answers['name'].split(',').map(el => el.trim())
  files.forEach(name => writeFile(name))
  console.log(files)
})
