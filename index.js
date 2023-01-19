const inquirer = require('inquirer');
const fs = require('fs');

const answers = inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please provide a description of your application?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What packages do you need to install to run this application?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain how this application is used.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license does your application use?',
        choices: ['none','Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License v2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please explain any tests you can run for this application, and how to run them.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please input your email address for any questions users may have.',
        name: 'email',
    }
])
.then((response) => {
  const readmeTemplate = `# ${response.project}\n## Table of Contents\n- Description\n- Installation\n- Usage\n- Licenses\n- Contributing\n- Tests\n- Questions\n\n## Description\n${response.description}\n\n## Installation\n${response.installation}\n\n## Usage\n${response.usage}\n\n## Licenses\n${response.license}\n\n## Contributing\n${response.contribution}\n\n## Tests\n${response.tests}\n\n## Questions\n${response.email}`
  fs.writeFile('README.md', readmeTemplate, (err) =>
    err ? console.log(err) : console.log('Success!')
  )
})