const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');

// READ DOCUMENATION - ALL ANSWERS ARE IN DOCUMENTATION https://www.npmjs.com/package/inquirer
// CHECK SOLUTION TO MINI PROJECT - VERY SIMILAR TO THIS PROJECT

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the purpose of this project?',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Would you like to include a table of contents?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How should this project be installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What license is this project distributed under?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are available for this project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provice contact information for questions about the project.',
        },
    ]);

const generateReadMe = (answers) =>
`
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

${answers.questions}
`;

promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));