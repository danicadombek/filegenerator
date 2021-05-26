const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files would you like to create? Please seperate by comma.',
  },
  {
    type: 'checkbox',
    message: 'Please select a file type',
    name: 'files',
    choices: [{ name: 'Component' }, { name: 'Spec' }, { name: 'Stories' }],
    validate(answer) {
      if (answer.legth < 1) {
        return 'You must choosen at least one file type.'
      }
      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
  console.log(files)
})
