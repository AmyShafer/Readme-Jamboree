// ✅ a command-line application that accepts user input
// ✅ I am prompted for information about my application repository
// ✅ a high-quality, professional README.md is generated with the title of my project and sections entitled ✅ Description, ✅ Table of Contents, ✅ Installation, ✅ Usage, ✅ License, ✅ Contributing, ✅ Tests, and ✅ Questions
// ✅ I enter my project title
// ✅ this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// ✅  I choose a license for my application from a list of options
// ✅  a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// ✅ I enter my GitHub username
// ✅ this is added to the section of the README entitled Questions, with a link to my GitHub profile
// ✅ I enter my email address
// ✅ this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// ✅ I click on the links in the Table of Contents
// ✅ I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');

const readmeJamboree = ({ title, description, instructions, usage, license, contributing, tests, github, email }) => 

`
# ${title}

${description}

## Table of contents
* [Install-Instructions](#install-instructions)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [![Made for - Penn LPS](https://img.shields.io/static/v1?label=Made+for&message=Penn+LPS&color=%23FF1493)](https://bootcamp.sas.upenn.edu/)
* [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)

## Install Instructions

${instructions}

## Usage

Here's a look at the application in action:

<img src="${usage}" width="490" height="340" alt="${title}/>

## License

${license.name}
${license.badge}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions, you can visit my GitHub Page at <a href="https://github.com/${github}" target="_blank">${github}</a>.

You can also email me at <${email}>.
`;

// Pull data from the uses inputs to dynamically create a readme file
const generateReadme = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',    
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a brief description of your project:',
      name: 'description',    
    },
    {
      type: 'input',
      message: 'Please inform the user how to install the application:',
      name: 'instructions',    
    },
    {
      type: 'input',
      message: 'Provide the file name for a screenshot of your project',
      name: 'usage',    
    },
    {
      type: 'checkbox',
      message: 'Please choose a license',
      name: 'license',    
      choices: [
        {
          name: 'MIT',
          badge: '* [![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)',
          section: 'MIT License - Copyright (c) [2022] - Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: - The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. - THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
        },
        {
          name: 'Apache License',
          badge: '* [![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)',
          section: 'Copyright [2022] - Licensed under the Apache License, Version 2.0 (the "License") - You may not use this file except in compliance with the License. You may obtain a copy of the License at - http://www.apache.org/licenses/LICENSE-2.0 - Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
        },
        {
          name: 'GPL License', 
          badge: '* [![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js)',
          section: 'GNU GENERAL PUBLIC LICENSE - Version 3, - Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> - Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.'
        },
     ],
    },
    {
      type: 'input',
      message: 'How should users contribute?',
      name: 'contributing',    
    },
    {
      type: 'input',
      message: 'Run some tests.',
      name: 'tests',    
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }
  ]); 
};

const init = () => {
  generateReadme()
  // Use File System to generate the readme file
  .then((response) => fs.writeFileSync('README.md', readmeJamboree(response)))
  .then(() => console.log("Get out your maracas, we did it!"))
  .catch((error) => console.error(error));    
};

init();