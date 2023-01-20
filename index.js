const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

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
        choices: [
          {
          value: {
            badge: '',
            title: 'No Licenses'},
          name: 'none'},
          {value: {
            badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            title: 'Apache License 2.0'}, 
          name: 'Apache License 2.0'},

          {value: {
            badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            title: 'GNU General Public License v3.0'},
          name: 'GNU General Public License v3.0'},

          {value: {
            badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            title: 'MIT License'},
          name: 'MIT License'},

          {value: {
            badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            title: 'BSD 2-Clause "Simplified" License'},
          name: 'BSD 2-Clause "Simplified" License'},

          {value: {
            badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            title: 'BSD 3-Clause "New" or "Revised" License'},
          name: 'BSD 3-Clause "New" or "Revised" License'},

          {value: {
            badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            title: 'Boost Software License 1.0'},
          name: 'Boost Software License 1.0'},

          {value: {
            badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
            title: 'Creative Commons Zero v1.0 Universal'},
          name: 'Creative Commons Zero v1.0 Universal'},

          {value: {
            badge: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            title: 'Eclipse Public License v2.0'},
          name: 'Eclipse Public License v2.0'},

          {value: {
            badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
            title: 'GNU Affero General Public License v3.0'},
          name: 'GNU Affero General Public License v3.0'},

          {value: {
            badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
            title: 'GNU General Public License v2.0'},
          name: 'GNU General Public License v2.0'},

          {value: {
            badge: '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)',
            title: 'GNU Lesser General Public License v2.1'},
          name: 'GNU Lesser General Public License v2.1'},

          {value: {
            badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            title: 'Mozilla Public License 2.0'},
          name: 'Mozilla Public License 2.0'},

          {value: {
            badge: '',
            title: 'The Unlicense'}, 
          name: 'The Unlicense'}
        ],
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
  const readmeTemplate = `# ${response.project} ${response.license.badge}\n\n## Table of Contents\n- Description\n- Installation\n- Usage\n- Licenses\n- Contributing\n- Tests\n- Questions\n\n## Description\n${response.description}\n\n## Installation\n${response.installation}\n\n## Usage\n${response.usage}\n\n## Licenses\n${response.license.title}\n\n## Contributing\n${response.contribution}\n\n## Tests\n${response.tests}\n\n## Questions\n${response.email}`
  fs.writeFile('genREADME.md', readmeTemplate, (err) =>
    err ? console.log(err) : console.log('Success!')
  )
})